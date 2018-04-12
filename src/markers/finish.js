import React from 'react';
import { Marker } from 'react-google-maps';
import icon from '../assets/icons/finish-icon.png';

const Finish = (props) => {
    return( 
        <Marker
            position={props.position}
            icon={icon}
        /> 
    );
};

export default Finish;