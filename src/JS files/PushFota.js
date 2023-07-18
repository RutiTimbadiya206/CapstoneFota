import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Select,
  MenuItem,
  TableHead,
  Button,
  TableRow,
  Paper,
  Typography,
  Radio,
  styled,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";
import NavigationMenu from "./NavigationMenu";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import "./../CSS files/Firmware.css";

const useStyles = makeStyles({
  labelMargin: {
    marginTop: 20,
  },

  selectInput: {
    marginTop: 20,
  },
});

const StyledButton = styled(Button)({
  margin: "auto",
  width: "160px",
});

export default function PushFota() {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedEnvironment, setSelectedEnvironment] = useState("");
  const [items, setItems] = useState([]);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleEnvironmentSelect = (event) => {
    setSelectedEnvironment(event.target.value);
  };

  const handleSubmit = () => {
    // Implement your download logic here
  };

  const getDeviceDetails = async () => {
    axios
      .get("https://agentwhiskey.net/ruta/filedownloadg.php")
      .then((response) => {
        setItems(response?.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  useEffect(() => {
    getDeviceDetails();
  }, []);

  return (
    <div>
      <NavigationMenu />
      <div className="main">
        <div className="header">
          <Box
            sx={{
              minWidth: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FormControl fullWidth>
              <InputLabel
                className={classes.labelMargin}
                id="demo-simple-select-standard-label"
              >
                Client Select
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedEnvironment}
                onChange={handleEnvironmentSelect}
                className={classes.selectInput}
              >
                <MenuItem value="development">Client 1</MenuItem>
                <MenuItem value="production">Client 2</MenuItem>
                <MenuItem value="testing">Client 3</MenuItem>
              </Select>
            </FormControl>

            <StyledButton
              variant="contained"
              sx={{ marginTop: 4, backgroundColor: "#0F3F34" }}
              onClick={() => getDeviceDetails()}
            >
              GET CLIENT
            </StyledButton>
          </Box>
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "400px",
            overflow: "auto",
          }}
        >
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Sr#
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Mac
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Version
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items?.length > 0 &&
                  items?.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Radio
                          checked={selectedFile === item}
                          onChange={() => handleFileSelect(item)}
                        />
                        {item.id}
                      </TableCell>

                      <TableCell>{item.mac}</TableCell>
                      <TableCell>{item.version}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <StyledButton
          variant="contained"
          sx={{ marginTop: 4, backgroundColor: "#0F3F34" }}
          onClick={() => getDeviceDetails()}
        >
          REFRESH
        </StyledButton>
        <StyledButton
          variant="contained"
          sx={{ marginTop: 4, backgroundColor: "#0F3F34" }}
          onClick={handleSubmit}
        >
          PUSHFOTA
        </StyledButton>
      </div>
    </div>
  );
}
