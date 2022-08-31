import { Coords } from 'google-map-react';
import React from 'react';
import InputPlaces from '../../ui/InputPlaces';


const FromInput: React.FC = () => {

    const cbSuccess = (address: string, location: Coords) => {
        console.log(address, location);

    }

    return (
        <InputPlaces
            cbSuccess={cbSuccess}
            type='from' />
    );
};

export default FromInput;