import React, { Component, FunctionComponent } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent: FunctionComponent<{lat: number, lng: number, text: string}> = ({ text }) => <div>{text}</div>;

interface SimpleMapProps {
    center: {
        lat: number,
        lng: number
    }, zoom: number
}

class SimpleMap extends Component<SimpleMapProps> {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY as string}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;