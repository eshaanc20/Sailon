import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 43.6532,
      lng: -79.3832,
    },
    zoom: 4
  };
 
  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCdwg9uCg2-XOB1CunXSq--G236XJiSwjk'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={43.6532}
            lng={79.3832}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;