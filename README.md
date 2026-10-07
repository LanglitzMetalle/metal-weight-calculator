# Metallgewicht-Rechner von METALXACT

Ein kleiner, komplett browserbasierter Rechner für die theoretische Masse einfacher Metallhalbzeuge:

- Blech und Flachmaterial
- Rund-, Vierkant- und Rechteckstäbe
- Sechskantstäbe
- Rund- und Rechteckrohre
- Vierkantrohre sowie idealisierte Winkel-, U- und T-Profile

Die Dichte wird aus dem ausgewählten Werkstoff übernommen und ist im Seitenformular ausgeblendet. Die hinterlegten Werte dienen der theoretischen Vorberechnung. Legierung, Toleranzen, Eckradien, Oberfläche und Fertigung können die reale Masse verändern.

Die Werkstoffauswahl enthält dokumentierte Werte und ausdrücklich gekennzeichnete Richtwerte. Quellen und Hinweise zu den einzelnen Einträgen sind im Rechner hinterlegt. Für die konkrete Legierung, den Lieferzustand, die Toleranzen und die tatsächliche Produktmasse sind die Originalunterlagen maßgeblich. Quelle: [METALXACT Werkstoffdatenblätter](https://www.metalxact.com/werkstoffdatenblaetter).

## Verwendung

Der eigenständige [Metallgewicht-Rechner auf GitHub Pages](https://langlitzmetalle.github.io/metal-weight-calculator/) ermittelt theoretische Werte anhand der ausgewählten Form, Maße, Stückzahl und des Werkstoff-Richtwerts. Ergänzend steht der [offizielle METALXACT Gewichtsrechner](https://www.metalxact.com/service/gewichtsrechner-metallprofile-bleche/) auf der Shopdomain bereit.

## Rechenweg

1. Querschnitt in mm² bestimmen.
2. Querschnitt mit der Länge in mm multiplizieren.
3. Volumen von mm³ in m³ umrechnen.
4. Volumen mit der aus dem ausgewählten Werkstoff übernommenen Dichte in kg/m³ multiplizieren.

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



