import React from 'react';
import { Marker } from 'react-google-maps';
import icon from '../assets/icons/camera-icon.png';

const Camera = (props) => {
    return( 
        <Marker
            position={props.position}
            icon={icon}
            animation={ 'google.maps.Animation.DROP' }
        /> 
    );
};

export default Camera;