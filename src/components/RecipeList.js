import React from 'react';
import FoodItemCard from './FoodItemCard';

const RecipeList = ({ foodItemData , onItemClick }) => {
    const foodItemListElement = foodItemData.map((data) => <FoodItemCard id={data.id} image={data.image} label={data.label} name={data.name} category={data.category} description={data.description} price={data.price} onItemClick={onItemClick} />)
    return(
        <div className={'food-item-list'}>
            {foodItemListElement}
        </div>
    );
}

export default RecipeList;