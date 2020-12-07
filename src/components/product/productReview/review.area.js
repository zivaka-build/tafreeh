import React from 'react';
import SingleReview from './single.review';
export function ReviewArea(props) {
    return (
        <div class="tab-pane fade" id="tab_three">
            <div action="#" class="review-form">
                <div class="total-reviews">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12 mt-4">
                            <SingleReview rating={5}/>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 mt-4">
                            <SingleReview rating={0}/>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 mt-4">
                            <SingleReview rating={2}/>    
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 mt-4">
                            <SingleReview rating={3}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end of review-form --> */}
        </div>

    )
}