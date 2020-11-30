import React from 'react';

const FoodItemCard = ({ id = 0 , image = "" , label = "" ,name = "" , category = "" , description = "" , price = 0 , onItemClick  }) => {
    return(
        <div className={'food-item-card'} onClick={() => onItemClick()}>
            <div className={'food-item-card__image'}>
                <img src={image} alt="item image" />
            </div>
        <div className={'food-item-card__name'}>{name}</div>
        <div className={'food-item-card__label'}>{label.length > 0 ? label : "--"}</div>
        <div className={'food-item-card__description'}>{description.length > 0 ? description : "--"}</div>
        <div className={'food-item-card__price'}>{"$" + price}</div>
        </div>
    );
}

export default FoodItemCard;