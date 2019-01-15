import React, { Component } from 'react';
import axios from 'axios';
export default class MapData extends Component<Props> {

    props: Props;
   
    constructor(props) {
        super(props);
        //console.log("TEST");
        this.state = {};
        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };
        axios.get('http://35.243.156.149/', config)
        .then(response => {
            this.setState(response.data);
            console.log(response);
        }).catch(error => {
            // handle error
            console.log(error);
          })
    }

    render() {
        //console.log("TEST");
        return (
            <div>{this.state.data}</div>
        )
    }
}