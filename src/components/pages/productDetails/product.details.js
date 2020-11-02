import React from 'react';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import ProductCarousal from '../../hero-carousal/product.carousal';
import ProductDescription from '../../product/productDescription/product.description';
import ProductReview from '../../product/productReview/product.review';
class ProductDetails extends React.Component {
    render() {
        return (
            <main className="body-details">
                <Breadcrumb
                    page_title="Product Details"
                    items={[{ name: 'home', path: '/' }, { name: 'product details' }]}
                />
            <div className="product-details-wrapper pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <ProductCarousal img={[{
                                src_original: "assets/images/product-product-1.png"
                            },
                            {
                                src_original: "assets/images/product-product-details-img1.png"
                            },
                            {
                                src_original: "assets/images/product-product-1.png"
                            },
                            {
                                src_original: "assets/images/product-product-details-img1.png"
                            },
                            {
                                src_original: "assets/images/product-product-1.png"
                            },
                            {
                                src_original: "assets/images/product-product-details-img1.png"
                            }
                            ]} />
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <ProductDescription 
                                rating={2}
                            />
                        </div>
                    </div>
                    <div class="row">
                    <div class="col-lg-12">
                            <ProductReview/>
                    </div>
                    </div>
                </div>
            </div>
            </main>
        
        )
    }
}
export default ProductDetails;