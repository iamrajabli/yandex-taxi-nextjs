import React from "react";
import Map from "./Map";
import Layout from "../../layout/Layout";
import { useJsApiLoader } from '@react-google-maps/api';

const Home: React.FC = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: String(process.env.API_KEY)
    });

    return (
        <Layout title="Order Taxi">
            {isLoaded ? <Map /> : 'Loading...'}

        <div className="absolute z-10 left-10 w-11/12"></div>
            
        </Layout>
    )
}

export default Home;