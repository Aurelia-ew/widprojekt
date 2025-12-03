from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def get_root():
    return {"message": "gib die route /hallo oben ein"}

@app.get("/hallo")
def sag_hallo():
    return {"message": "Hallo Welt oder wa?"}

@app.get("/gruess")
def greet_user(name: str ): # type hints -> erster check, ob str (auch mit logisch | oder weitere möglich -> wird automatisch in dokumentation ergänzt)
    return {f"Grüeziii {name}!"}

@app.get("/upper/{text}")       # PFAD PARAMETER -> andere form von aufruf... mit text als variable
@app.get("/upper")              # QUERY PARAMETER -> aufrufen mit http://127.0.0.1:8000/upper?text=hoi
def to_upper(text: str, repeat: int = 1):
    result = (text.upper() + " ") * repeat
    return {"result": result.strip()}

# um server zu starten: fastapi dev api.py unten in terminal eingeben
# auf http://localhost:8000/hallo     oder    http://127.0.0.1:8000/hallo   server aufrufen
# -> base root ist leer
