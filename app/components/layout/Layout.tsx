import React, { useEffect, useState } from "react";
import Head from 'next/head';
import Script from 'next/script';
import FavIcon from '../../assets/images/favicon.png';
import Loader from '../ui/Loader';

interface ILayout {
    title: string;
    children: any
}

const Layout: React.FC<ILayout> = ({ title, children }) => {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const timeout = setTimeout(() => {
            setIsLoading(false)
        }, 3000);


        return () => clearTimeout(timeout)
    }, [])

    return <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Taxi App" />
            <link rel="shortcut icon" href={FavIcon.src} type="image/png" />
        </Head>

        <Script
            strategy="beforeInteractive"
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&libraries=places`}
        />

        <div style={{ maxWidth: 480 }} className='mx-auto relative overflow-hidden'>
            {isLoading ? <Loader /> : children}
        </div>

    </div>

}

export default Layout;