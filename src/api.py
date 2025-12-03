from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI()

data_zh = pd.read_csv("assets/Gesamtdatensatz.csv")
data_zh["timestamp"] = pd.to_datetime(data_zh["timestamp"])
data_zh["year"] = data_zh["timestamp"].dt.year.astype(int)      # type: ignore # year aus timestamp extrahieren (in Teildatensatz igwie bereits vorhanen)

origins = ["http://localhost:5173/",
           "http://localhost:5174/"]

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],    # anderer server zulassen (aus liste oben)
    allow_methods=["GET"],      # same as default (others: POST, PUT, DELETE, ...)
    allow_headers=["*"],        # ööhm ,hani nanned ganz checked...
    allow_credentials=False,    # cookies weitergeben zulassen
    max_age = 600               # same as default (in seconds)
)

@app.get("/")
async def get_root():
    return {"message": "gib die den richtigen api pfad oben ein"}

@app.get("/api/v1/year/{year}/location_id/{location_id}/group/{group}")   #API mit Pfadparametern (Query wäre auch mögl. jedoch anderer Aufbau/Struktur)
async def get_data(year : int , location_id : int, group : str):  # type hints -> erster check, ob str (auch mit logisch | oder weitere möglich -> wird automatisch in dokumentation ergänzt)
    filtered_data = data_zh.query("year == @year and location_id == @location_id")

    ltr_ped_count = f"{group}_ltr_pedestrians_count"    # nur als variable definiert weil direkt unten nicht möglich
    rtl_ped_count = f"{group}_rtl_pedestrians_count"    # nur als variable definiert weil direkt unten nicht möglich

    final_data = filtered_data[["timestamp",
                                "location_name",
                                "ltr_label",
                                "rtl_label",
                                ltr_ped_count,
                                rtl_ped_count]
                                ].to_dict(orient="records")
    return final_data


#(nur speichern um print in terminal anzusehen, da server läuft wird code permanent ausgeführt)

#print(data_zh.dtypes)      
#print(data_zh[["timestamp", "year"]].head())

# um server zu starten: fastapi dev api.py unten in terminal eingeben
# auf http://localhost:8000/hallo     oder    http://127.0.0.1:8000/hallo   server aufrufen
# -> base root ist leer
