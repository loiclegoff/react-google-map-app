import React, { Component, FunctionComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import Papa from "papaparse"
import { Poi } from 'model';
import { getPois } from 'api';

const AnyReactComponent: FunctionComponent<{lat: number, lng: number, text: string}> = ({ text }) => <div>{text}</div>;

interface SimpleMapProps {
    center: {
        lat: number,
        lng: number
    }, zoom: number
}

interface SimpleMapState {
  // hasErrors: boolean,
  // data: any[],
  pois: Poi[],
  isLoading: boolean

}

class SimpleMap extends Component<SimpleMapProps, SimpleMapState> {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  state = {
    // hasErrors: false,
    // data: []
    pois: [],
    isLoading: true
  }

  componentDidMount() {
    // Papa.parse(process.env.PUBLIC_EVENTS_URL as string, {
    //   download: true,
    //   // delimiter: ",",
    //   // header: true,
    //   // error: () => this.setState({hasErrors: true}),
    //   complete: this.updateData
    // })
    getPois((state: SimpleMapState) => this.setState(state),48.849919799999995, 2.637041100000033, 8)
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

        {JSON.stringify(pois)}
      </div>
    );
  }
}

export default SimpleMap;