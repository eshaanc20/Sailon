import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LinearProgress from '@material-ui/core/LinearProgress';
import mapImage from './maps.jpeg';
import boatImage from './boat.png';
import mapVisual from './Components/mapVisual';
import axios from 'axios';
import data from './Components/mapData';
import mapData from './Components/mapData';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import styles from "./Components/Styles.css";

function initialLat(event) {
  latInitial = event.target.value;
}
function initialLong(event) {
  longInitial = event.target.value;
}
function finalLat(event) {
  latFinal = event.target.value;
}
function finalLong(event) {
  longFinal = event.target.value;
}
function buttonClicked() {
  axios.post('http://35.243.156.149/', {
    lat1: latInitial,
    lon1: longInitial,
    lat2: latFinal,
    lon2: longFinal,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

var latInitial = 0;
var longInitial = 0;
var latFinal = 0;
var longFinal = 0;

class App extends Component{
  render(){
    return(
      <div className="screen">
        <header>
          <AppBar position="static">
            <Toolbar className="toolBar">
              <img src={boatImage} height="4%" width="4%" className="logo"/>
              <Typography variant = 'h3' color='inherit' className = "title">
              Sailon
              </Typography>
            </Toolbar>
          </AppBar>
          <LinearProgress color="primary" variant="query" />
        </header>
        <body className="userInterface">
          <Grid className="gridContainer" container justify = "center" container spacing={40}>
            <Paper className="mapPaper" >
              <h4>Efficient Path Coordinates</h4>
              <mapData/>
            </Paper>
            <Paper className="infoPaper">
              <div className="infoText">
                <h4>Sailon's Boat Routing System</h4>
                <p>Sailon is a path finding algorithm that provides the most efficient path between 
                   two locations for boats. This system incorporates and considers updated wind and 
                   water current data to determine the route. An initial and final destination coordinates 
                   must be provides as input. North and East are assigned positive coordinates.
                </p>
              </div>
            </Paper>
            <Paper className="inputPaper">
              <div className="inputContainer" noValidate autoComplete="off">
                <p className="spacer"></p>
                <p className="instruction"><br></br>Please enter the following information correctly [North +, East +]: </p>
                <TextField
                  id="inititalLad"
                  label="Initial Latitude"
                  margin="normal"
                  onChange={initialLat.bind(this)}
                  variant="outlined"
                /><br></br>
                <TextField
                  id="initialLong"
                  label="Initial Longitude"
                  margin="normal"
                  onChange={initialLong.bind(this)}
                  variant="outlined"
                /><br></br>
                <TextField
                  id="finalLat"
                  label="Final Latitude"
                  margin="normal"
                  onChange={finalLat.bind(this)}
                  variant="outlined"
                /><br></br>
                <TextField
                  id="finalLong"
                  label="Final Longitude"
                  margin="normal" 
                  onChange={finalLong.bind(this)}
                  variant="outlined"
                /><br></br>
              </div> 
              <br></br>
              <Button variant="contained" color="primary" className="button" onClick={buttonClicked}>
              Sail
              </Button>
              <p className = "spacer"></p>
              <LinearProgress color="secondary" variant="query" />
            </Paper>
          </Grid>
        </body>
      </div>
    );
  }
}

export default App;
