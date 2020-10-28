import React from 'react';
import Carousal from '../../hero-carousal/carousal';
import PopularCatagories from '../../catagories/popular/popular.catagories';
import BestSeller from '../../bestSellers/bestSellers';
import Bannerstats from '../../bannerStats/banner.stats';
import BrandCarousal from '../../hero-carousal/brand.area.carousal';
import ProductCarousal from '../../hero-carousal/product.carousal';
import InputSlider from '../../../common/FormElements/input.slider';
class HomePage extends React.Component{
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        document.title="Home | Tafreeh"
    }
    render()
    {
        let arr=[{name:'Condimentum Food',tag:'fruit',price:'160.00',old_price:'180.00',img:'assets/images/product-product-1.png'},
            {name:'Tincidunt Malesuada',tag:'coffee',price:'60.00',old_price:'180.00',img:'assets/images/product-product-1.png'},
            {name:'Tincidunt Malesuada',tag:'coffee',price:'60.00',img:'assets/images/product-product-1.png'},
        ];
        return(
           <main>
                <Carousal/>
                {/* <div className="product-details-inner">
                        <div className="row">
                            <div className="col-lg-5 col-md-6"> */}
                {/* <ProductCarousal img={[{
                    src_original:"assets/images/product-product-1.png"
                },
                {
                    src_original:"assets/images/product-product-details-img1.png"
                },
                {
                    src_original:"assets/images/product-product-1.png"
                },
                {
                    src_original:"assets/images/product-product-details-img1.png"
                },
                {
                    src_original:"assets/images/product-product-1.png"
                },
                {
                    src_original:"assets/images/product-product-details-img1.png"
                }
                ]}/> */}
                {/* </div>
                </div>
                </div> */}
                <PopularCatagories/>
                <BestSeller
                    products={arr}
                    product_image="assets/images/banner-best-sellers.png"
                />
                <Bannerstats/>
                <BrandCarousal/>
           </main>
                
        )
        
    }
}
export default HomePage;