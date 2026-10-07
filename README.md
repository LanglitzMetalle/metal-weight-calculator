# Metallgewicht-Rechner von METALXACT

Ein kleiner, komplett browserbasierter Rechner für die theoretische Masse einfacher Metallhalbzeuge:

- Blech und Flachmaterial
- Rund-, Vierkant- und Rechteckstäbe
- Sechskantstäbe
- Rund- und Rechteckrohre
- Vierkantrohre sowie idealisierte Winkel-, U- und T-Profile

Die Dichte ist frei editierbar. Die hinterlegten Materialwerte dienen nur als Richtwerte. Legierung, Toleranzen, Eckradien, Oberfläche und Fertigung können die reale Masse verändern.

Die Materialauswahl ist mit den öffentlich bereitgestellten METALXACT Werkstoffdatenblättern abgeglichen (Stand 05.10.2026). Enthalten sind bestätigte Dichten für EN AW-1050A, EN AW-2007, EN AW-2017A, EN AW-5083, EN AW-5754, EN AW-6060, EN AW-6082, 1.4301, 1.4404, 1.4541, 1.4571, CW004A, CW508L, CC483K und CC493K. Stahl S235JR und POM sind ausdrücklich als technische Richtwerte gekennzeichnet, da der METALXACT Datenblattbereich dafür keinen Dichtewert ausweist. Quelle: [METALXACT Werkstoffdatenblätter](https://www.metalxact.com/werkstoffdatenlaetter).

## Verwendung

Der öffentliche Gewichtsrechner liegt auf der offiziellen METALXACT Website: https://www.metalxact.com/service/gewichtsrechner-metallprofile-bleche/ Die GitHub-Pages-Startadresse leitet dorthin weiter.

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

## Produktkatalog ohne Preise

Der separate [Produktkatalog](https://langlitzmetalle.github.io/metal-weight-calculator/produktkatalog.html) listet die Produktgruppen nach Material und Form. Er enthält keine Preise und führt über direkte Links zu den jeweiligen METALXACT Kategorien.

## Pulverbeschichtung

Der separate [Überblick zur Pulverbeschichtung](https://langlitzmetalle.github.io/metal-weight-calculator/pulverbeschichtung.html) erklärt Produktgruppen und Prozessschritte und verlinkt direkt zu den passenden METALXACT Bereichen.

## Urheberrecht und Nutzung

Copyright © 2026 LANGLITZ Metalle GmbH. Alle Rechte vorbehalten.

Der Quellcode, das Design, die Texte, Berechnungen und die Dokumentation sind Eigentum der LANGLITZ Metalle GmbH. Das Kopieren, Verändern, Veröffentlichen, Weiterverbreiten oder kommerzielle Verwerten ist ohne vorherige schriftliche Zustimmung untersagt. Die öffentliche Nutzung des bereitgestellten Rechners überträgt keine Rechte am Quellcode.

Siehe `LICENSE`.
