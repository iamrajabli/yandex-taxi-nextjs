import React from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { useTypedSelector } from '../../../hooks/useTypedSelectors';


const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: 40.409264,
    lng: 49.867092
};


const Map: React.FC = () => {

    const { from } = useTypedSelector(state => state.taxi)

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={
                    from.location?.lat
                        ? {
                            lat: from.location?.lat,
                            lng: from.location?.lng
                        }
                        : center
                }
                zoom={10}
                options={{
                    zoomControl: false,
                    fullscreenControl: false,
                    keyboardShortcuts: false,
                    clickableIcons: false,
                }}

            />

        </div>
    );
};

export default Map;