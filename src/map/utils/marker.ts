import { Poi } from '../../model';

export const createMarkers = (
  googleMap: google.maps.Map,
  pois: Poi[]
): google.maps.Marker[] => {
  return pois.map(poi => {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(poi.latitude, poi.longitude),
      title:
        'marker-map marker-poi poi-icon category-' +
        poi.category_id +
        ' id:' +
        poi.id,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillOpacity: 0,
        strokeWeight: 0,
      },
      map: googleMap,
    });

    // display action title when marker hovered
    //   marker.addListener('mouseover', function () {
    //       marker.setTitle('');
    //       map.popup = new Popup(new google.maps.LatLng(poi.latitude, poi.longitude), `<div class="popup-bubble-content-header popup-poi capitalize-first-letter">${poi.name}</div><div class="popup-bubble-content-bottom"><i class="action-icon poi-icon category-${poi.category.id}"></i><b>${poi.category.name}</b></div>`);
    //       map.popup.setMap(map.mapObject);
    //   });
    //   poi.marker.addListener('mouseout', map.hideMarkerTitle);

    //   // show detailed window when marker clicked
    //   poi.marker.addListener('click', function () {
    //       map.showPoi(poi, true);
    //   });

    //   if (first && getQueryParams('lat') && getQueryParams('lng')) {
    //       if (poi.latitude == getQueryParams('lat') && poi.longitude == getQueryParams('lng')) {
    //           map.currentPoi = poi;
    //       }
    //   }

    return marker;
  });
};
