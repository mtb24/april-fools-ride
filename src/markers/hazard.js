import React from 'react';
import { Marker } from 'react-google-maps';
import icon from '../assets/icons/hazard-icon.png';

const Hazard = (props) => {
    return( 
        <Marker
            position={props.position}
            icon={icon}
            animation={ 'google.maps.Animation.DROP' }
        /> 
    );
};

export default Hazard;