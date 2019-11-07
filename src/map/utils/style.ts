export const getMapStyle = () => {
  return [
    {
      featureType: 'poi.attraction',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.business',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.government',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.medical',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off',
        },
        {
          weight: 1.5,
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.school',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.sports_complex',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
  ];
};
