import React from 'react';
import { Marker } from 'react-google-maps';
import start_icon from '../assets/icons/start-icon.png';

const Start = (props) => {
    return( 
        <Marker
            position={props.position}
            icon={start_icon}
        /> 
    );
};

export default Start;