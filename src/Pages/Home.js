import React from 'react';
import { Banner } from '../Components/Banner';
import HouseList from '../Components/HouseList';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
export const Home = () => {
    return (
        <div className="min-h-[1800px]">
            <Header />
            <Banner />
            <HouseList />
            <Footer />
        </div>
    );
};

