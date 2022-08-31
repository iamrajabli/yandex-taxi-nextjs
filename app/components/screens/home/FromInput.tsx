import React from 'react';
import InputPlaces from '../../ui/InputPlaces';

const FromInput: React.FC = () => {

    const cbSuccess = () => {
        console.log('success');

    }

    return (
        <InputPlaces
            cbSuccess={cbSuccess}
            type='from' />
    );
};

export default FromInput;