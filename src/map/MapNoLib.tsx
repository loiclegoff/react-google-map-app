// import React from 'react';

// export class AppComponent implements React.Component<{}> {
//     mapElement: React.RefObject<unknown>;
//     map: google.maps.Map;

//     constructor() {
//         this.mapElement = React.createRef()
//         this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//     }

//     componentDidMount() {
//         this.initializeMap();
//     }

//     initializeMap() {
//         const lngLat = new google.maps.LatLng(6.5874964, 3.9886097);
//         const mapOptions: google.maps.MapOptions = {
//             center: lngLat,
//             zoom: 16,
//             fullscreenControl: false,
//             mapTypeControl: false,
//             streetViewControl: false
//         };
        
//     }

//     render() {
//         return <></>
//     }
//  }