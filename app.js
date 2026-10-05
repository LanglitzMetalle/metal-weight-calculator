const shapeField = document.querySelector('#shape');
const materialField = document.querySelector('#material');
const densityField = document.querySelector('#density');
const quantityField = document.querySelector('#quantity');
const dimensions = document.querySelector('#dimensions');
const errorBox = document.querySelector('#error');
const pieceBox = document.querySelector('#weight-piece');
const totalBox = document.querySelector('#weight-total');
const metreBox = document.querySelector('#weight-meter');
const formulaBox = document.querySelector('#formula');

const definitions = {
  plate: {
    fields: [['width', 'Breite', 100], ['height', 'Dicke', 5], ['length', 'Länge', 1000]],
    area: ({ width, height }) => width * height,
    formula: 'Querschnitt = Breite × Dicke'
  },
  round: {
    fields: [['diameter', 'Durchmesser', 20], ['length', 'Länge', 1000]],
    area: ({ diameter }) => Math.PI * diameter ** 2 / 4,
    formula: 'Querschnitt = π × Durchmesser² ÷ 4'
  },
  square: {
    fields: [['width', 'Kantenlänge', 20], ['length', 'Länge', 1000]],
    area: ({ width }) => width ** 2,
    formula: 'Querschnitt = Kantenlänge²'
  },
  rect: {
    fields: [['width', 'Breite', 40], ['height', 'Höhe', 20], ['length', 'Länge', 1000]],
    area: ({ width, height }) => width * height,
    formula: 'Querschnitt = Breite × Höhe'
  },
  'tube-round': {
    fields: [['diameter', 'Außendurchmesser', 30], ['wall', 'Wanddicke', 2], ['length', 'Länge', 1000]],
    area: ({ diameter, wall }) => Math.PI * (diameter ** 2 - (diameter - 2 * wall) ** 2) / 4,
    validate: ({ diameter, wall }) => wall * 2 < diameter,
    formula: 'Querschnitt = π × (Außendurchmesser² − Innendurchmesser²) ÷ 4'
  },
  'tube-rect': {
    fields: [['width', 'Außenbreite', 40], ['height', 'Außenhöhe', 20], ['wall', 'Wanddicke', 2], ['length', 'Länge', 1000]],
    area: ({ width, height, wall }) => width * height - (width - 2 * wall) * (height - 2 * wall),
    validate: ({ width, height, wall }) => wall * 2 < width && wall * 2 < height,
    formula: 'Querschnitt = Außenfläche − Innenfläche (ohne Eckradien)'
  }
};

function renderFields() {
  const definition = definitions[shapeField.value];
  dimensions.replaceChildren();
  definition.fields.forEach(([name, label, value]) => {
    const wrapper = document.createElement('div');
    const fieldLabel = document.createElement('label');
    const input = document.createElement('input');
    fieldLabel.htmlFor = name;
    fieldLabel.textContent = `${label} in mm`;
    input.id = name;
    input.name = name;
    input.type = 'number';
    input.min = '0.001';
    input.step = 'any';
    input.value = String(value);
    input.inputMode = 'decimal';
    wrapper.append(fieldLabel, input);
    dimensions.append(wrapper);
  });
  calculate();
}

function formatKg(value) {
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: value < 1 ? 3 : 2,
    maximumFractionDigits: value < 1 ? 3 : 2
  }).format(value) + ' kg';
}

function calculate() {
  const definition = definitions[shapeField.value];
  const values = {};
  for (const [name] of definition.fields) {
    values[name] = Number(document.querySelector(`#${name}`).value);
  }
  const density = Number(densityField.value);
  const quantity = Number(quantityField.value);
  const allPositive = Object.values(values).every(value => Number.isFinite(value) && value > 0);

  if (!allPositive || !Number.isFinite(density) || density <= 0 || !Number.isInteger(quantity) || quantity < 1) {
    showError('Bitte nur positive Abmessungen und eine ganze Stückzahl ab 1 eingeben.');
    return;
  }
  if (definition.validate && !definition.validate(values)) {
    showError('Die Wanddicke muss kleiner als die halbe Außenabmessung sein.');
    return;
  }

  const areaMm2 = definition.area(values);
  const lengthMm = values.length;
  const volumeM3 = areaMm2 * lengthMm / 1_000_000_000;
  const pieceKg = volumeM3 * density;
  const metreKg = areaMm2 * density / 1_000_000;

  errorBox.textContent = '';
  pieceBox.textContent = formatKg(pieceKg);
  totalBox.textContent = formatKg(pieceKg * quantity);
  metreBox.textContent = formatKg(metreKg) + '/m';
  formulaBox.textContent = `${definition.formula}; Masse = Volumen × Dichte.`;
}

function showError(message) {
  errorBox.textContent = message;
  pieceBox.textContent = '–';
  totalBox.textContent = '–';
  metreBox.textContent = '–';
  formulaBox.textContent = '';
}

materialField.addEventListener('change', () => {
  if (materialField.value !== 'custom') densityField.value = materialField.value;
  calculate();
});
densityField.addEventListener('input', () => {
  materialField.value = 'custom';
  calculate();
});
shapeField.addEventListener('change', renderFields);
dimensions.addEventListener('input', calculate);
quantityField.addEventListener('input', calculate);
document.querySelector('#calculate').addEventListener('click', calculate);

renderFields();
