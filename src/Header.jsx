import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Header = ({ info, setInfo, location_id, year, group }) => {
  //um von location_id den richtigen text im header anzuzeigen (theoretisch auch überbackendabfrage möglich)
  const locationMap = {
    331: "Bahnhofstrasse (Nord)",
    329: "Bahnhofstrasse (Mitte)",
    330: "Bahnhofstrasse (Süd)",
    670: "Lintheschergasse",
  };
  const location_name = locationMap[location_id];

  const groupMap = {
    adult: "Erwachsene",
    child: "Kinder",
  };
  const group_name = groupMap[group];

  return (
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d3/FHNW_Logo.svg"
        alt="Logo FHNW"
      />
      <h2 style={{ color: "black", fontStyle: "Arial" }}>
        Fussgängeraufkommen an der {location_name} im Jahre {year} -{" "}
        {group_name}
      </h2>

      <div>
        <IconButton
          aria-label="Info"
          color="primary"
          onClick={() => setInfo(true)}
        >
          <InfoIcon fontSize="large" />
        </IconButton>
        <Dialog open={info} onClose={() => setInfo(false)}>
          <DialogTitle>
            <h3>Informationen zur Webseite</h3>
          </DialogTitle>
          <DialogContent>
            <Typography>
              Autorinnen: Aurelia Weickgenannt und Celine Philippin
              <br />
              <br />
              Die Fokus-Frage dieses Projekt lautet: "Wann im Jahre 2024 gibt es
              an der Bahnhofstrasse Nord mehr erwachsene Fussgänger, die von
              links-nach-rechts gehen im Vergleich zu rechts-nach-links? "
              <br />
              <br />
              Weitere Informationen siehe README.md file.
              <br />
              <br />
              Datenquelle Gesamtdatensatz: FHNW bzw. Stadt Zürich
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={() => setInfo(false)}>
              Schliessen
            </Button>
          </DialogActions>
        </Dialog>

        <Button variant="contained" onClick={() => window.location.reload()}>
          Reset Webseite
        </Button>
      </div>
    </header>
  );
};
