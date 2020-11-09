import React from 'react';
export default function CartCalculationArea(props) {
    return (
        // <!-- Cart Calculation Area --> 
        < div className = "cart-calculator-wrapper" >
            <div className="cart-calculate-items">
                <h3>Cart Totals</h3>
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                            <tr><td>Sub Total</td>
                                <td>${props.total_amount}</td>
                            </tr><tr><td>Shipping</td>
                                <td>$70</td>
                            </tr><tr className="total"><td>Total</td>
                                <td className="total-amount">$300</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <a href="checkout.html" className="btn btn__bg d-block">Proceed To Checkout</a>
        </div >

    )
}