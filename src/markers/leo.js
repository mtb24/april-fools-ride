import React from 'react';
import { Marker } from 'react-google-maps';
import icon from '../assets/icons/leo-icon.png';

const Leo = (props) => {
    return( 
        <Marker
            position={props.position}
            icon={icon}
            animation={ 'google.maps.Animation.DROP' }
        /> 
    );
};

export default Leo;