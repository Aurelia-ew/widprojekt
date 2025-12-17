# WID Projekt Aurelia + Celine

## About

Im Rahmen des Moduls 3050 Webprogrammierung und interaktive Datenvisualisierung wurde eine Projektarbeit erarbeitet.
Dieses Projekt dient in erster Linie zur Erlernung unterschiedlichere Elemente der Webprogrammierung und eine Veröffentlichung ist nicht geplant.

Das Ziel dieser Visualisierung ist, den Fussgänger Fluss an vier verschiedenen Orten der Bahnhofstrasse Zürich zu zeigen. Dabei wird die Anzahl Personen pro Gruppe die von "links-nach-rechts" gehen mit jenen die von "rechts-nach-links" gehen verglichen.\
Die Webapplikation ist auf interaktive Erkundung der Daten optimiert.

Der verwendete Datensatz (Fussgänger-Zählung an bestimmten Orten der Stadt Zürich) wurde von der Fachhochschule Nordwestschweiz (FHNW) zur Verfügung gestellt.

## How-To install:

npm i

to run Frontend:

- type: npm run dev
- open (enjoy visualization): http://localhost:5173/

to run Backend:

- type: fastapi dev api.py
- open (only to check): http://localhost:8000/\
  -> (if you wanna get data, enter api e.g.: http://localhost:8000/api/v1/year/2021/location_id/329/group/adult)

## Schlüssel-Entscheidungen:

- React-Umgebung
- Grafik über Vega-Altair
- Buttons von Material UI (MUI)
- API Definition:
  http://localhost:8000/api/v1/year/{year}/location/{location}/group/{group}
