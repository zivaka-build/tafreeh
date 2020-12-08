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
        this.state={value:null,ar:[]};
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
    
    catagory=e=>{
        console.log("catagory",e);
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
                                    onChange={this.catagory}
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
const filter=ar=>{
    let a=[];
    console.log("l",ar.length);
    for(var i=0;i<ar.length-2;i++){
        a.push(ar[i]);
    }
    console.log(a);
    return a;
}
const mapStateToProps=state=>{

    return {...state,
    products:state.products.products && state.products.products.length?state.products.products:[]
    };
}
export default (connect)(mapStateToProps)(Shop);