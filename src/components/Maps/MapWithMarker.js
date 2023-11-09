import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

function MapWithAMarker(props) {
    const { lat, lng } = props;

    return (
        <GoogleMap defaultZoom={12} defaultCenter={{ lat, lng }}>
            <Marker position={{ lat, lng }} />
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(MapWithAMarker));

export default WrappedMap;