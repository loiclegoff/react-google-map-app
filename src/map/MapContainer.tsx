import React from 'react';
import { Poi } from '../model';
import { getPois } from '../api';
import { getMapStyle } from './utils/style';

const DEFAULT_LAT = 48.8660992;
const DEFAULT_LNG = 2.3339008000000376;

interface Data {
  pois: Poi[];
  isLoading: boolean;
}

export const GoogleMap: React.FunctionComponent = () => {
  const googleMapRef = React.useRef<HTMLDivElement>(null);
  const [googleMap, setGoogleMap] = React.useState<google.maps.Map>();
  const [data, setData] = React.useState<Data>({ isLoading: true, pois: [] });

  React.useEffect(() => {
    // To load google map librairie
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', init);

    // getPois
    getPois(
      (pois: Poi[]) => setData({ pois, isLoading: false }),
      DEFAULT_LAT,
      DEFAULT_LNG,
      8
    );
  }, []);

  const init = () => {
    setGoogleMap(createGoogleMap());
  };

  const createGoogleMap = (position?: google.maps.LatLng) => {
    const mapObjectParams: google.maps.MapOptions = {
      maxZoom: 15,
      minZoom: 14,
      zoom: 14,
      //   zoomControl: !map.mobileView,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      center: {
        lat: DEFAULT_LAT,
        lng: DEFAULT_LNG,
      },
      styles: getMapStyle() as any,
    };

    // center the map on a custom position if given
    // if (position) {
    //   mapObjectParams.center.lat = position.lat();
    //   mapObjectParams.center.lng = position.lng();
    // }

    return new google.maps.Map(googleMapRef.current, mapObjectParams);
    //     {
    //   zoom: 12,
    //   center: {
    //     lat: DEFAULT_LAT,
    //     lng: DEFAULT_LNG,
    //   },
    //   disableDefaultUI: true,
    // }
    // );
  };

  const createMarkers = () => {
    if (googleMap && !data.isLoading) {
      data.pois.forEach(poi => {
        new google.maps.Marker({
          position: new google.maps.LatLng(poi.latitude, poi.longitude),
          title:
            'marker-map marker-poi poi-icon category-' +
            poi.category_id +
            ' id:' +
            poi.id,
          //   icon: {
          //     path: google.maps.SymbolPath.CIRCLE,
          //     fillOpacity: 0,
          //     strokeWeight: 0,
          //   },
          map: googleMap,
        });
      });
    }
  };

  React.useEffect(createMarkers, [data, googleMap]);

  return (
    <div
      id="google-map"
      ref={googleMapRef}
      style={{ height: '100vh', width: '100%' }}
    />
  );
};

// // see: https://engineering.universe.com/building-a-google-map-in-react-b103b4ee97f1
// class GoogleMap extends Component {
//     googleMapRef = React.createRef()

//     componentDidMount() {
//         const googleMapScript = document.createElement('script')
//         googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
//         window.document.body.appendChild(googleScript)

//         googleScript.addEventListener('load', {
//             this.googleMap = this.createGoogleMap()
//             this.marker = this.createMarker()
//         })
//     }

//     createGoogleMap = () =>
//         new window.google.maps.Map(this.googleMapRef.current, {
//             zoom: 16,
//             center: {
//                 lat: 43.642567,
//                 lng: -79.387054,
//             },
//             disableDefaultUI: true,
//         })

//     createMarker = () =>
//         new window.google.maps.Marker({
//             position: { lat: 43.642567, lng: -79.387054 },
//             map: this.googleMap,
//         })

//     render() {
//         return (
//             <div
//                 id="google-map"
//                 ref={this.googleMapRef}
//                 style={{ width: '400px', height: '300px' }}
//             />
//         )
//     }
// }
