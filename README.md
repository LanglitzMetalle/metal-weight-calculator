# Metallgewicht-Rechner von METALXACT

Ein kleiner, komplett browserbasierter Rechner für die theoretische Masse einfacher Metallhalbzeuge:

- Blech und Flachmaterial
- Rund-, Vierkant- und Rechteckstäbe
- Rund- und Rechteckrohre

Die Dichte ist frei editierbar. Die hinterlegten Materialwerte dienen nur als Richtwerte. Legierung, Toleranzen, Eckradien, Oberfläche und Fertigung können die reale Masse verändern.

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

## Lizenz

MIT License. Siehe `LICENSE`.
