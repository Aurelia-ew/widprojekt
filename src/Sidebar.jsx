import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Sidebar = ({
  year,
  setYear,
  place,
  setPlace,
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
      <div>Sidebar (da chunnt na en Titel inne...) </div>
      <div>
        <SelectField
          label="Jahr"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <MenuItem value={2021}>Jahr 2021</MenuItem>
          <MenuItem value={2022}>Jahr 2022</MenuItem>
          <MenuItem value={2023}>Jahr 2023</MenuItem>
          <MenuItem value={2024}>Jahr 2024</MenuItem>
          <MenuItem value={2025}>Jahr 2025</MenuItem>
        </SelectField>

        <SelectField
          label="Ort"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        >
          <MenuItem value={1}>Bahnhofstrasse (Nord)</MenuItem>
          <MenuItem value={2}>Bahnhofstrasse (Mitte)</MenuItem>
          <MenuItem value={3}>Bahnhofstrasse (Süd)</MenuItem>
          <MenuItem value={4}>Lintheschergasse</MenuItem>
        </SelectField>

        <SelectField
          label="Zielgruppe"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        >
          <MenuItem value="A">Erwachsene</MenuItem>
          <MenuItem value="B">Kinder</MenuItem>
        </SelectField>
      </div>
    </aside>
  );
};
