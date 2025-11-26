import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Header = ({ info, setInfo, place, group }) => {
  return (
    <header>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d3/FHNW_Logo.svg"
          alt="Logo FHNW"
        />
        <h3 style={{ color: "black", fontStyle: "Arial" }}>
          Wann gibt es an der {place} mehr {group}, die von Links nach Rechts
          gehen im Vergleich zu Personen die von Rechts nach Links gehen?
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
      </div>
    </header>
  );
};
