import { Coords } from 'google-map-react';
import React from 'react';
import { useActions } from '../../../hooks/useActions';
import InputPlaces from '../../ui/InputPlaces';


const FromInput: React.FC = () => {
    const { setFrom, setTo } = useActions();

    const cbSuccess = (address: string, location: Coords) => {
        setFrom({ location, description: address });
        setTo('')
    }

    return (
        <InputPlaces
            cbSuccess={cbSuccess}
            type='from' />
    );
};

export default FromInput;