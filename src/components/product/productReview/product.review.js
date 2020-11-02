import React from 'react';
import '../product.css';
import { DescriptionReview } from './description';
import ReviewForm from './product.review.form';
import { ReviewArea } from './review.area';
class ProductReview extends React.Component {
    render() {
        return (
            <div class="product-details-reviews pt-60">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="product-review-info">
                            <div class="review-tab">
                                <ul class="nav">
                                    <li>
                                        <a class="active" data-toggle="tab" href="#tab_one">description</a>
                                    </li>
                                    <li>
                                        <a data-toggle="tab" href="#tab_three">reviews</a>
                                    </li>
                                    <li>
                                        <a data-toggle="tab" href="#tab_four">Add review</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content reviews-tab">
                                <DescriptionReview/>
                                <ReviewArea/>
                                <ReviewForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductReview;