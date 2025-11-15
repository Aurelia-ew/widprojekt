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
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </SelectField>

        <SelectField
          label="Ort"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        >
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Medium</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </SelectField>

        <SelectField
          label="Zielgruppe"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        >
          <MenuItem value="A">Alpha</MenuItem>
          <MenuItem value="B">Beta</MenuItem>
        </SelectField>
      </div>
    </aside>
  );
};
