import React from "react";
import Map from "./Map";
import Layout from "../../layout/Layout";
import { useJsApiLoader } from '@react-google-maps/api';
import FromInput from "./FromInput";

const Home: React.FC = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: String(process.env.API_KEY)
    });

    return (
        <Layout title="Order Taxi">
            {isLoaded ? <Map /> : 'Loading...'}

            <div style={{'zIndex' : 100}} className="absolute z-10 left-1/2 -translate-x-1/2 bottom-60 w-11/12">
                <FromInput />
            </div>

        </Layout>
    )
}

export default Home;