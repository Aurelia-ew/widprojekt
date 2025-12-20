# WID Projekt Aurelia + Celine

## About

Im Rahmen des Moduls 3050 Webprogrammierung und interaktive Datenvisualisierung wurde eine Projektarbeit erarbeitet.
Dieses Projekt dient in erster Linie zur Erlernung unterschiedlichere Elemente der Webprogrammierung und eine Veröffentlichung ist nicht geplant.

Das Ziel dieser Visualisierung ist, den Fussgänger-Fluss an vier verschiedenen Orten der Bahnhofstrasse Zürich zu zeigen. Dabei wird die Anzahl Personen pro Gruppe die von "links-nach-rechts" gehen mit jenen die von "rechts-nach-links" gehen verglichen.\
Die Webapplikation ist auf interaktive Erkundung der Daten optimiert.

Die Fokus-Frage dieses Projekt lautet: "Wann im Jahre 2024 gibt es an der Bahnhofstrasse Nord mehr erwachsene Fussgänger, die vom Bürkliplatz zum Hauptbahnhof gehen im Vergleich zu vom Hauptbahnhof zum Bürkliplatz?"

Der verwendete Datensatz (Fussgänger-Zählung an bestimmten Orten der Stadt Zürich) wurde von der Fachhochschule Nordwestschweiz (FHNW) zur Verfügung gestellt.

## How-To installieren:

in neuer Umgebung Abhängigkeiten Installieren\
(jeweils Befehle in Terminal ausführen):

- npm i

um Backend zu starten:

- fastapi dev api.py
- startet unter: http://localhost:8000/\
  -> (zur Kontrolle API abfragen manuell definieren, z.B.: http://localhost:8000/api/v1/year/2021/location_id/329/group/adult)

um Frontend zu starten:

- npm run dev
- startet unter: http://localhost:5173/

## Verwendete Technologien:

- React-Umgebung
- Styling mit CSS
- Grafik über Vega-Altair
- Buttons von Material UI (MUI)
- API Definition:
  http://localhost:8000/api/v1/year/{year}/location/{location}/group/{group}

## Daten-Erkundung:

Bitte beachten Sie, dass die Daten nicht immer vollständig sind.
Falls keine Daten angezeigt werden wählen Sie bitte einen anderen Tag.

Das Diagramm zeigt einen guten Überblick über das Fussgänger-Aufkommen an der Bahnhofstrasse. Dabei lassen sich einige grössere "Ausreisser" schnell durch organisierte Events erklären. Wie zum Beispiel:

- Neujahr (Peak in Richtung HB nach Mitternacht/Feuerwerk)
- Streetparade (10.08.2024)
- Sechsilüüte (28.04.2025)
- Frauenstreik (14.06.2022)

Auffallend ist, dass deutlich weniger Kinder als Erwachsene an der Bahnhofstrasse unterwegs sind. Weshalb die Grafik dieser Gruppe anders skaliert wurde.
