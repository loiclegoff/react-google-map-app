import React, { Component, FunctionComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import { Poi } from '../model';
import { getPois } from '../api';

const AnyReactComponent: FunctionComponent<{
  lat: number;
  lng: number;
  text: string;
}> = ({ text }) => <div>{text}</div>;

interface SimpleMapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

interface SimpleMapState {
  pois: Poi[];
  isLoading: boolean;
}

const DEFAULT_LAT = 48.8660992;
const DEFAULT_LNG = 2.3339008000000376;

class SimpleMap extends Component<SimpleMapProps, SimpleMapState> {
  static defaultProps = {
    center: {
      lat: DEFAULT_LAT,
      lng: DEFAULT_LNG,
    },
    zoom: 12,
  };

  state: SimpleMapState = {
    pois: [],
    isLoading: true,
  };

  updatePois = (pois: Poi[]) =>
    this.setState({
      isLoading: false,
      pois: pois,
    });

  componentDidMount() {
    getPois(this.updatePois, DEFAULT_LAT, DEFAULT_LNG, 8);
  }

  render() {
    const { pois, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY as string }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {pois.map(poi => (
            <AnyReactComponent
              lat={poi.latitude}
              lng={poi.longitude}
              text="Hey! Loïc"
            />
          ))}
        </GoogleMapReact>

        {JSON.stringify(pois)}
      </div>
    );
  }
}

export default SimpleMap;
