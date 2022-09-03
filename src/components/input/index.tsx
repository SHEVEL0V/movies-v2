/** @format */

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const film = [{ label: "The Shawshank Redemption", year: 1994 }];

const Input: React.FC = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={film}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
};

export default Input;
