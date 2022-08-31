import React from "react";
import Image from 'next/image';
import preloaderImage from '../../assets/images/preloader.png';


const Loader: React.FC = () => {
    return (
        <div className="w-scren h-screen">
            <Image src={preloaderImage.src} alt="preloader" layout="fill" priority={true}></Image>
        </div>
    )
}

export default Loader

