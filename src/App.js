import React, { useEffect, useState } from 'react';
import axios from 'axios';

import RecipeList from  './components/RecipeList';
import Navbar from  './components/Navbar';
import PaymentGateway from './components/PaymentGateway';
import Filter from './components/Filter';

import './styles/main.scss';

const App = props => {
    const [showFilter,setShowFilter] = useState(false);
    const [showPaymentGateway,setShowPaymentGateway] = useState(false);
    const [foodItemData,setFoodItemData] = useState([]);

    //Fetching Data on mounting of App component

    useEffect(() => {
        axios.get('http://starlord.hackerearth.com/recipe')
             .then((res) => {
                 setFoodItemData(res.data);
             })
             .catch((err) => {
                 console.log("Error is ",err);
                 setFoodItemData([]);
             });
    },[]);

    const pageElement = showPaymentGateway ? <PaymentGateway /> : <RecipeList foodItemData={foodItemData} onItemClick={() => setShowPaymentGateway(true)} />
    const filterElement = showFilter ? <Filter /> : '';

    return(
        <main className={'recipe-app-cont'}>
            {filterElement}
            <Navbar onFilterClick={() => setShowFilter(!showFilter)} onTitleClick={() => setShowPaymentGateway(false)}/>
            {pageElement}
        </main>
    );
}

export default App;