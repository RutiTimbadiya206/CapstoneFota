import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, Select, MenuItem, TableHead, Button, TableRow, Paper, Typography, Radio, styled, InputLabel, FormControl, Box } from '@mui/material';
import NavigationMenu from './NavigationMenu';
import { makeStyles } from '@mui/styles';
import './../CSS files/Firmware.css';

const useStyles = makeStyles({

    labelMargin: {
        marginTop: 20,
      },

  selectInput: {
    marginTop: 20,
  },
});

const StyledButton = styled(Button)({
  margin: 'auto',
  width: '160px',
});

export default function Firmware({ items }) {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedEnvironment, setSelectedEnvironment] = useState('');

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleEnvironmentSelect = (event) => {
    setSelectedEnvironment(event.target.value);
  };

  const handleSubmit = () => {
    // Implement your download logic here
  };

  return (
    <div>
      <NavigationMenu />
      <div className='main'>
        <div className='header'>
            <Box sx={{minWidth: 200}}>
          <FormControl fullWidth>
            <InputLabel className={classes.labelMargin} id="demo-simple-select-standard-label">Environment Select</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={selectedEnvironment}
              onChange={handleEnvironmentSelect}
              className={classes.selectInput}
            >
              
              <MenuItem value="development">Development</MenuItem>
              <MenuItem value="production">Production</MenuItem>
              <MenuItem value="testing">Testing</MenuItem>
            </Select>
          </FormControl>
          </Box>
        </div>

        <div style={{ width: '100%', maxWidth: '800px', height: '400px', overflow: 'auto' }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Version
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Filename
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Radio
                        checked={selectedFile === item}
                        onChange={() => handleFileSelect(item)}
                      />
                      {item.version}
                    </TableCell>
                    <TableCell>{item.filename}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <StyledButton variant="contained" sx={{ marginTop: 4, backgroundColor: '#0F3F34' }} onClick={handleSubmit}>
          DOWNLOAD
        </StyledButton>
      </div>
    </div>
  );
}
