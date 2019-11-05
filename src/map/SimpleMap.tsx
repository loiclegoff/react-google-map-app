import React, { Component, FunctionComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import Papa from "papaparse"

const AnyReactComponent: FunctionComponent<{lat: number, lng: number, text: string}> = ({ text }) => <div>{text}</div>;

interface SimpleMapProps {
    center: {
        lat: number,
        lng: number
    }, zoom: number
}

interface SimpleMapState {
  hasErrors: boolean,
  data: any[]
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
    hasErrors: false,
    data: []
  }

  componentWillMount() {
    Papa.parse("https://entourage-csv.s3.eu-west-1.amazonaws.com/production/entourages.csv", {
      download: true,
      // delimiter: ",",
      // header: true,
      // error: () => this.setState({hasErrors: true}),
      complete: this.updateData
    })

  }

  updateData = (result: Papa.ParseResult) => {
    if (result.errors.length){
      this.setState({ hasErrors: true })
      console.log(result.errors)
    } else {
      this.setState({data: result.data})
    }
  }

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

        {JSON.stringify(this.state.data)}
      </div>
    );
  }
}

export default SimpleMap;