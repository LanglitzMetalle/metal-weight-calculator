# Metallgewicht-Rechner von METALXACT

Ein kleiner, komplett browserbasierter Rechner für die theoretische Masse einfacher Metallhalbzeuge:

- Blech und Flachmaterial
- Rund-, Vierkant- und Rechteckstäbe
- Sechskantstäbe
- Rund- und Rechteckrohre
- Vierkantrohre sowie idealisierte Winkel-, U- und T-Profile

Die Dichte ist frei editierbar. Die hinterlegten Materialwerte dienen nur als Richtwerte. Legierung, Toleranzen, Eckradien, Oberfläche und Fertigung können die reale Masse verändern.

Die Materialauswahl entspricht den öffentlich sichtbaren METALXACT Kategorien: Stahl, Edelstahl, Aluminium, Kupfer, Messing, Bronze, Rotguss und Kunststoff/POM. Werkstoffdatenblätter: [METALXACT](https://www.metalxact.com/werkstoffdatenlaetter).

## Verwendung

`index.html` lokal im Browser öffnen. Es werden keine Daten übertragen und keine externen Bibliotheken geladen.

## Rechenweg

1. Querschnitt in mm² bestimmen.
2. Querschnitt mit der Länge in mm multiplizieren.
3. Volumen von mm³ in m³ umrechnen.
4. Volumen mit der eingegebenen Dichte in kg/m³ multiplizieren.

Bei Rechteckrohren wird mit scharfkantiger Geometrie gerechnet. Eckradien werden nicht berücksichtigt.

## Fachlicher Hinweis

Das Ergebnis ist eine theoretische Näherung und kein Wiege-, Prüf- oder Abnahmeprotokoll. Für Angebote, Konstruktion und Nachweise sind Werkstoff, Norm, Lieferzustand, Toleranzen und tatsächliche Abmessungen zu prüfen.

Mehr zu verfügbaren Profilformen und Anfragewegen: [METALXACT – Metallprofile nach Form](https://www.metalxact.com/formen/).

## Produktübersicht

Die GitHub-Pages-Version enthält zusätzlich eine kuratierte [Produktübersicht](https://langlitzmetalle.github.io/metal-weight-calculator/produkte.html) mit direkten Links zu den METALXACT Kategorien für Profile, Rohre, Stangen, Bleche, Platten und Kantteile nach Maß.

## Pulverbeschichtung

Der separate [Überblick zur Pulverbeschichtung](https://langlitzmetalle.github.io/metal-weight-calculator/pulverbeschichtung.html) erklärt Produktgruppen und Prozessschritte und verlinkt direkt zu den passenden METALXACT Bereichen.

## Lizenz

MIT License. Siehe `LICENSE`.
