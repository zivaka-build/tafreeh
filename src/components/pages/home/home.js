import React from 'react';
import Carousal from '../../hero-carousal/carousal';
import {connect} from 'react-redux';
import PopularCatagories from '../../catagories/popular/popular.catagories';
import BestSeller from '../../bestSellers/bestSellers';
import Bannerstats from '../../bannerStats/banner.stats';
import BrandCarousal from '../../hero-carousal/brand.area.carousal';
import { SAGA_ACTIONS } from '../../../common/config/actions';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={carItems:[]};
    }
    componentDidMount(){
        document.title="Home | Tafreeh";
        this.props.dispatch({
            type:SAGA_ACTIONS.LOGIN,
            payload:{},
            callbackSuccess:resp=>{
                let faka=[];
                for(var i=0;i<10;i++)
                {
                    faka.push(resp.data[i])
                }
                this.setState({carItems:faka});
            }
        },
        )
    }
    
    render()
    {
        let arr=[{name:'Condimentum Food',tag:'fruit',price:'160.00',old_price:'180.00',img:'assets/images/product-product-1.png'},
            {name:'Tincidunt Malesuada',tag:'coffee',price:'60.00',old_price:'180.00',img:'assets/images/product-product-1.png'},
            {name:'Tincidunt Malesuada',tag:'coffee',price:'60.00',img:'assets/images/product-product-1.png'},
 
        ];
        return(
           <main>
                <Carousal 
                    items={this.state.carItems}
                />
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
const mapStatetoProps=state=>{
    return {...state}
}
export default connect(mapStatetoProps) (HomePage);