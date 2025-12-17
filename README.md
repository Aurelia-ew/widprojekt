# WID Projekt Aurelia + Celine

## About

Im Rahmen des Moduls 3050 Webprogrammierung und interaktive Datenvisualisierung wurde eine Projektarbeit erarbeitet.
Dieses Projekt dient in erster Linie zur Erlernung unterschiedlichere Elemente der Webprogrammierung und eine Veröffentlichung ist nicht geplant.

Das Ziel dieser Visualisierung ist, den Fussgänger Fluss an vier verschiedenen Orten der Bahnhofstrasse Zürich zu zeigen. Dabei wird die Anzahl Personen pro Gruppe die von "links-nach-rechts" gehen mit jenen die von "rechts-nach-links" gehen verglichen.\
Die Webapplikation ist auf interaktive Erkundung der Daten optimiert.

Die Fokus-Frage dieses Projekt lautet: "Wann im Jahre 2024 gibt es an der Bahnhofstrasse Nord mehr erwachsene Fussgänger, die von links-nach-rechts gehen im Vergleich zu rechts-nach-links? "

Der verwendete Datensatz (Fussgänger-Zählung an bestimmten Orten der Stadt Zürich) wurde von der Fachhochschule Nordwestschweiz (FHNW) zur Verfügung gestellt.

## How-To installieren:

in neuer Umgebung Abhängigkeiten Installieren\
(jeweils Befehle in Terminal ausführen):

- npm i

um Frontend zu starten:

- npm run dev
- startet unter: http://localhost:5173/

um Backend zu starten:

- fastapi dev api.py
- startet unter: http://localhost:8000/\
  -> (zur Kontrolle API abfragen manuell definieren, z.B.: http://localhost:8000/api/v1/year/2021/location_id/329/group/adult)

## Schlüssel-Entscheidungen:

- React-Umgebung
- Styling mit CSS
- Grafik über Vega-Altair
- Buttons von Material UI (MUI)
- API Definition:
  http://localhost:8000/api/v1/year/{year}/location/{location}/group/{group}
