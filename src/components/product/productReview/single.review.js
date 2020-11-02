import React from 'react';
export default function SingleReview(props) {
    let ratedItem=[];
        for(var i=1;i<=props.rating;i++){
            if(i===1)
                ratedItem.push(<span key={i}><i className="ion-android-star"></i></span>);
            else
                ratedItem.push(<span key={i} className="product-rate-star"><i className="ion-android-star"></i></span>);
        }
        for(var i=(props.rating+1);i<=5;i++)
        {
            if(i===1)
                ratedItem.push(<span key={i}><i className="ion-android-star unrated-star"></i></span>);
            else
                ratedItem.push(<span key={i} className="product-rate-star"><i className="ion-android-star unrated-star"></i></span>);
        }
    return (
        <div class="review-box">
            <div class="ratings">
                {ratedItem}
            </div>
            <div class="post-author">
                <p><span>Ratul -</span> 30 Nov, 2018</p>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                fringilla augue nec est tristique auctor. Ipsum metus feugiat
                sem, quis fermentum turpis eros eget velit. Donec ac tempus
                ante. Fusce ultricies massa massa. Fusce aliquam, purus eget
            </p>
        </div>
    )
}