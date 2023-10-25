import React, { useState } from "react";
import { Card, Grid, CardContent, TextField, Typography } from "@mui/material";
export const Assignreplace = () => {
  const [name, setName] = useState("First Name");
  const [last, setLast] = useState("Last Name");
  const [mob, setMob] = useState("Mobile Number");
  const [city, setCity] = useState(" City");
  const [add, setAdd] = useState("Address...");
  return (
    <Grid container spacing={3}>
        <Grid item xs={12} align="center" sx={{fontSize:"20px"}}><b>Assignment-18</b></Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography size="small" align="center" sx={{fontSize:"20px"}}>
             <b> Fill Employee Details</b>
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  label="Enter First Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField onChange={(e)=>setLast(e.target.value)}
                     label= "Enter Last Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Mobile Number" onChange={(e)=>setMob(e.target.value)} variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField onChange={(e)=>setCity(e.target.value)} label="City" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField  onChange={(e)=>setAdd(e.target.value)}label="Address" variant="outlined" fullWidth />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ padding:5 }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography size="small" align="center" sx={{fontSize:"20px"}}>
                 <b>Show Employee Details</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography size="small" align="center">
                 {" "}
                 <b> {name}{" "}</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography size="small" align="center">
                 <b> {last}</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography size="small" align="center">
                  <b>{mob}</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography size="small" align="center">
                 <b>{city}</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography size="small" align="center">
                <b>{add}</b>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
