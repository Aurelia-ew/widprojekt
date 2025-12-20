from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import numpy as np

app = FastAPI()

data_zh = pd.read_csv("src/assets/Gesamtdatensatz.csv")
data_zh["timestamp"] = pd.to_datetime(data_zh["timestamp"])
data_zh["year"] = data_zh["timestamp"].dt.year.astype(int)      # type: ignore # year aus timestamp extrahieren (in Teildatensatz igwie bereits vorhanen)

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_methods=["GET"],
    allow_headers=["*"],
    allow_credentials=False,
    max_age = 600
)

@app.get("/")
async def get_root():
    return {"message": "gib die den richtigen api pfad oben ein"}

@app.get("/api/v1/year/{year}/location_id/{location_id}/group/{group}")
async def get_data(year : int , location_id : int, group : str):
    filtered_data = data_zh.query("year == @year and location_id == @location_id").copy()

    ltr_ped_count = f"{group}_ltr_pedestrians_count"    # nur als variable definiert weil direkt unten nicht möglich
    rtl_ped_count = f"{group}_rtl_pedestrians_count"    # nur als variable definiert weil direkt unten nicht möglich
    
    filtered_data["Stunde"] = filtered_data["timestamp"].dt.hour # type: ignore # Stunde für die x-Achse (falscher Datentyp für Pylance, keine funktionseinschränkung)
    filtered_data["Datum"] = filtered_data["timestamp"].dt.strftime("%Y%m%d") # type: ignore # Datum für den Slider (falscher Datentyp für Pylance, keine funktionseinschränkung)

    data_richtung = filtered_data.melt(
        id_vars=["timestamp", "Stunde", "Datum", "location_name", "location_id", "ltr_label", "rtl_label"],
        value_vars=[ltr_ped_count, rtl_ped_count],
        var_name="Richtung",
        value_name="Anzahl")
    
    unique_dates = sorted(data_richtung["Datum"].unique().tolist())
    date_index_map = {d: i for i, d in enumerate(unique_dates)}
    data_richtung["date_idx"] = data_richtung["Datum"].map(date_index_map)
    
    data_richtung["Richtung_Label"] = np.where(
        data_richtung["Richtung"] == ltr_ped_count,
        data_richtung["ltr_label"],
        data_richtung["rtl_label"])
    
    final_data = data_richtung[["Stunde",
                                "Datum",
                                "date_idx",
                                "location_name",
                                "location_id",
                                "Richtung",
                                "Richtung_Label",
                                "Anzahl"]].to_dict(orient="records")
    return final_data
