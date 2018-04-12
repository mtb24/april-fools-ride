import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Polyline } from 'react-google-maps';
import { AFRSTAGE1 } from './markers/afr-routes';
import { AFR_MARKERS } from './markers/afr-test-marker-data';
import Start from './markers/start';
import Finish from './markers/finish';
import Camera from './markers/camera';
import Leo from './markers/leo';
import Hazard from './markers/hazard';
import Provisions from './markers/provisions';

const markers = AFR_MARKERS.map( (marker, i) => {
    switch( marker.message ) {
        case 'start':
            const start = {
                position: { lat: marker.lat, lng: marker.lng }
            };
            return( <Start {...start} key={ i } /> );
            
        case 'finish':
            const finish = {
                position: { lat: marker.lat, lng: marker.lng }
            };
            return( <Finish {...finish} key={ i } /> );
            
        case 'camera':
            const camera = {
                position: { lat: marker.lat, lng: marker.lng }
            };
            return( <Camera {...camera} key={ i } /> );
            
        case 'leo':
            const leo = {
                position: { lat: marker.lat, lng: marker.lng }
            };
            return( <Leo {...leo} key={ i } /> );
            
        case 'hazard':
            const hazard = {
                position: { lat: marker.lat, lng: marker.lng }
            };
            return( <Hazard {...hazard} key={ i } /> );
            
        case 'provisions':
            const provisions = {
                position: { lat: marker.lat, lng: marker.lng }
            };
            return( <Provisions {...provisions} key={ i } /> );
            
        
        default:
            console.log('nothing');
            break;
    }
    return false;
});

const Map = withScriptjs(withGoogleMap((props) => {
    
    return (
        <GoogleMap
            defaultZoom={ props.zoom }
            defaultCenter={ props.center }
            options={
                {
                    mapTypeId: 'terrain',
                    mapTypeControlOptions: {position: 'BOTTOM_LEFT'},
                    fullscreenControlOptions: {position: 'BOTTOM_LEFT'},
                    disableDoubleClickZoom: true,
                    streetViewControl: false,
                }
            }
        >
            { props.showMarkers && markers }
            <Polyline options={ AFRSTAGE1 }/>
        </GoogleMap>
    );
}));

export default Map;