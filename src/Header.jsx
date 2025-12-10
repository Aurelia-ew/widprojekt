import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Header = ({ info, setInfo, location_id, group }) => {
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
      <h3 style={{ color: "black", fontStyle: "Arial" }}>
        Titel Webseite (Platzhalter) {location_name} - {group_name}
      </h3>

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
            </Typography>
            <Typography>
              Erstellt im Modul 3050 Webprogrammierung und interaktive
              Datenvisualisierung
            </Typography>
            <Typography>Datenquellen: ...</Typography>
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
