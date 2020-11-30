import React, { useState } from 'react';

const PaymentGateway = props => {
    const [showAddDetails,setShowAddDetails] = useState(false);
    return(
        <div className={'payment-gateway'}>
            <div className={'payment-gateway__details'}>
                {
                    (showAddDetails) && (
                        <div className={'payment-gateway__details__info'}>
                            <div className={'payment-gateway__details__info--card-num'}>
                                <input type="text" placeholder="Card Number"/>
                            </div>
                            <div className={'payment-gateway__details__info--card-exp'}>
                                <input type="date"  className="date"/>
                                <input type="text"  className="cvv" placeholder="CVV"/>
                            </div>
                            <div className={'payment-gateway__details__info--card-name'}>
                                <input type="text"  placeholder="Enter name on the card"/>
                            </div>
                            <div className={'payment-gateway__details__btn payment-gateway__details__btn--green'}>
                            Pay
                            </div>
                        </div>
                    )
                }
                {
                    (!showAddDetails) && (        
                            <div className={"payment-gateway__details__btn"} onClick={() => setShowAddDetails(true)}>
                            Add New Card
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default PaymentGateway;