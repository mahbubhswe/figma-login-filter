import { Stack, IconButton, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";


export default function FilterSideCom() {
  return (
    <Stack direction={"row"} spacing={2}>
      <TextField
        className="styleSearchField"
        placeholder="Search"
        variant="standard"
        type="search"
        InputProps={{
          endAdornment: <SearchIcon />,
          disableUnderline: true,
        }}
      />
      <IconButton>
        <SortIcon />
      </IconButton>
    </Stack>
  );
}
