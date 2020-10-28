import React from 'react';
export default function OrderTab(props) {
    return (
        <div className="tab-pane fade active show" id="orders" role="tabpanel">
            <div className="myaccount-content">
                <h3>Orders</h3>
                <div className="myaccount-table table-responsive text-center">
                    <table className="table table-bordered">
                        <thead className="thead-light">
                            <tr>
                                <th>Order</th>
                                <th>Products</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Product 1</td>
                                <td>Aug 22, 2018</td>
                                <td>Pending</td>
                                <td>$3000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Product 2</td>
                                <td>July 22, 2018</td>
                                <td>Approved</td>
                                <td>$200</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Product 3</td>
                                <td>June 12, 2019</td>
                                <td>On Hold</td>
                                <td>$990</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}