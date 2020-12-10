import React from 'react';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import Sidebar from './sidebar/sidebar';
import './shop.css';
import ShopArea from './shopArea/shop.area';
import {connect} from 'react-redux';
import { SAGA_ACTIONS } from '../../../common/config/actions';
class Shop extends React.Component {
    constructor(props){
        super(props);
        this.state={value:null,cat:'',min:'',max:'',filterItems:{}};
    }
    componentDidMount(){
        this.props.dispatch({
            type:SAGA_ACTIONS.PRODUCTS.GET_CATAGORIES,
            callbackSuccess:resp=>{
                this.setState({value:resp.data});
            }
        });
        this.props.dispatch({
            type:SAGA_ACTIONS.PRODUCTS.GET_ALL,
            
        });        
    }
    resetAllProducts=()=>{

        this.props.dispatch({
            type:SAGA_ACTIONS.PRODUCTS.GET_ALL,}
        );
        this.setState({cat:'',min:'',max:''});
    }
    getFilteredProducts=()=>{
        this.props.dispatch({
            type:SAGA_ACTIONS.PRODUCTS.GET_FILTERED,
            payload:{
                min:this.state.min,
                max:this.state.max,
                cat:this.state.cat
            }
        })
    }
    catagory=e=>{
        console.log("catagory",e);
        this.setState({cat:e?e:''},this.getFilteredProducts)
    }
    price=e=>{
        console.log("price",e);
        this.setState({min:e.min,max:e.max},this.getFilteredProducts)
    }
    render() {
        return (
            <main>
                
                <Breadcrumb
                    page_title="Shop"
                    items={[{ path: '/', name: 'home' }, { name: 'shop' }]}
                />
                <div className="shop-main-wrapper pt-60 pb-60">
                    <div className="container">
                        <div className="row">
                            {/* <!-- sidebar area start --> */}
                            <div className="col-lg-3 order-2">
                                <Sidebar 
                                    filterItems={this.state.value}
                                    onCatChange={this.catagory}
                                    onPriceChange={this.price}
                                    reset={()=>this.resetAllProducts()}
                                />
                            </div>
                            <div className="col-lg-9 order-1 shop-area">
                                <ShopArea products={this.props.products}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )

    }
}

const mapStateToProps=state=>{

    return {...state,
    products:state.products.products && state.products.products.length?state.products.products:[]
    };
}
export default (connect)(mapStateToProps)(Shop);