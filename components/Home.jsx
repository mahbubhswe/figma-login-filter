import {
  Container,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  List,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import AddFilterCom from "./AddFilterCom";
import FilterSideCom from "./FilterSideCom";
export default function Home() {
  return (
    <Container sx={{ paddingY: "20px" }}>
      <Paper variant="none" sx={{ marginBottom: "10px", paddingLeft: "10px" }}>
        <Button
          variant="contained"
          size="small"
          disableElevation={true}
          endIcon={<ReplayCircleFilledIcon />}
        >
          <Typography sx={{ fontWeight: 900,textTransform:"none" }}>Cloud Request</Typography>
        </Button>
        {/* <List dense={true} sx={{ width: "190px" }}>
          <ListItem disablePadding>
            <ListItemText>
              <Typography sx={{ fontWeight: 900 }}>Cloud Request</Typography>
            </ListItemText>
            <ListItemIcon>
              <ReplayCircleFilledIcon />
            </ListItemIcon>
          </ListItem>
        </List> */}
      </Paper>
      <Stack direction={"row"} spacing={2}>
        <Paper variant="none" sx={{ width: "400px", padding: "16px" }}>
          <FilterSideCom />
        </Paper>
        <Paper variant="none" sx={{ width: "100%" }}>
          <AddFilterCom />
        </Paper>
      </Stack>
    </Container>
  );
}
