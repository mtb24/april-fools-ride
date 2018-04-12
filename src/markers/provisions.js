import React from 'react';
import { Marker } from 'react-google-maps';
import icon from '../assets/icons/aid-icon.png';

const Provisions = (props) => {
    return( 
        <Marker
            position={props.position}
            icon={icon}
        /> 
    );
};

export default Provisions;