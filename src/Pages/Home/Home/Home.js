import React from 'react';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItems></AdvertiseItems>
            <ProductCategories></ProductCategories>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;