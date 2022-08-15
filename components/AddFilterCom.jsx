import React from "react";
import {
  Stack,
  Typography,
  Button,
  FormControl,
  InputLabel,
  TextField,
  Box,
  Select,
  ListItem,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  underline: {
    borderBottom: "0px solid red !important",
    "&:hover": {
      borderBottom: "0px solid rgba(0,0,0,0)",
    },
  },
});
export default function AddFilterCom() {
  const styles = useStyles();
  return (
    <>
      {/* <Stack
        style={{
          height: "100vh",
          display: "grid",
          placeContent: "center",
        }}
        spacing={1}
      >
        <Typography color="secondary" sx={{ fontWeight: 300 }}>
          You don't have any favourite filter. Please create a filter first
        </Typography>
        <div className="buttonWrapper">
          <Button
            variant="contained"
            sx={{
              background: "#47A7FF",
              color: "#ffffff",
              textTransform: "none",
            }}
          >
            Create Favourite Filter
          </Button>
        </div>
      </Stack> */}

      <Stack spacing={2} sx={{ padding: "30px" }}>
        <Typography variant="bold" sx={{ fontWeight: 900 }}>
          Create favourite filter
        </Typography>
        <div>
          <Typography>Give a title</Typography>
          <TextField
            className="styleTextField"
            variant="standard"
            type="text"
            placeholder="Type here"
            required
            fullWidth
            InputProps={{ disableUnderline: true }}
            // onChange={(e) =>
            //   setLoginCredential({
            //     ...loginCredentials,
            //     email: e.target.value,
            //   })
            // }
          />
        </div>
        <div>
          <Typography>Transaction Type</Typography>
          <Select
            variant="standard"
            fullWidth
            size="large"
            className="styleTextField"
            disableUnderline={true}
          >
            <MenuItem value={10}>Moving Item</MenuItem>
            <MenuItem value={20}>Returning</MenuItem>
          </Select>
        </div>
        <div>
          <Typography>Request Type</Typography>
          <Select
            variant="standard"
            fullWidth
            size="large"
            className="styleTextField"
            disableUnderline={true}
          >
            <MenuItem value={"normal"}>Normal</MenuItem>
            <MenuItem value={"premium"}>Premium</MenuItem>
          </Select>
        </div>
        <div>
          <Typography>Select City</Typography>
          <Select
            variant="standard"
            fullWidth
            size="large"
            className="styleTextField"
            disableUnderline={true}
          >
            <MenuItem value={"dhaka"}>Dhaka</MenuItem>
            <MenuItem value={"mymenshingh"}>Mymenshingh</MenuItem>
            <MenuItem value={"sherpur"}>Sherpur</MenuItem>
          </Select>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            disableElevation={true}
            sx={{
              textTransform: "none",
              backgroundColor: "#FF4E53",
              color: "#ffffff",
              width: "150px",
            }}
          >
            Cancle
          </Button>
          <Button
            variant="contained"
            disableElevation={true}
            sx={{
              textTransform: "none",
              backgroundColor: "#47A7FF",
              color: "#ffffff",
              width: "150px",
            }}
          >
            Add Filter
          </Button>
        </div>
      </Stack>
    </>
  );
}
