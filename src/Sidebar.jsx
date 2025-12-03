import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Sidebar = ({
  year,
  setYear,
  location_id,
  setLocation,
  group,
  setGroup,
}) => {
  // Basis-Select-Feld, mb für abstand (spacing)
  const SelectField = ({ label, value, onChange, children }) => (
    <Box sx={{ minWidth: 120, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={onChange}>
          {children}
        </Select>
      </FormControl>
    </Box>
  );

  return (
    <aside>
      <h4 style={{ color: "black" }}>Auswahl Optionen: </h4>
      <div>
        <SelectField
          label="Jahr"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
          <MenuItem value={2024}>2024</MenuItem>
          <MenuItem value={2025}>2025</MenuItem>
        </SelectField>

        <SelectField
          label="Ort"
          value={location_id}
          onChange={(e) => setLocation(e.target.value)}
        >
          <MenuItem value={331}>Bahnhofstrasse (Nord)</MenuItem>
          <MenuItem value={329}>Bahnhofstrasse (Mitte)</MenuItem>
          <MenuItem value={330}>Bahnhofstrasse (Süd)</MenuItem>
          <MenuItem value={670}>Lintheschergasse</MenuItem>
        </SelectField>

        <SelectField
          label="Zielgruppe"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        >
          <MenuItem value="adult">Erwachsene</MenuItem>
          <MenuItem value="child">Kinder</MenuItem>
        </SelectField>
      </div>
    </aside>
  );
};
