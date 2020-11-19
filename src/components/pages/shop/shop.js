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
                console.log(resp.data);
                this.setState({value:resp.data});
            }
        });
        this.props.dispatch({
            type:SAGA_ACTIONS.PRODUCTS.GET_ALL,
            
        });
        this.onclickM();
        
    }
    onclickM=()=>{
        let sidebarFilter=[
            {
                cat:"classic",
                // subcats:[
                //     {id:1,name:"classic Summer Black Tea"},
                //     {id:2,name:"Mouling Special Autumn Green Tea"},
                //     {id:3,name:"Margaret's Hope classic Summer Chinary Black Tea"},
                // ]
            },
            {
                cat:"Special",
                subcats:[
                    {id:1,name:"Assam Breakfast Black Tea"},
                    {id:2,name:"Castleton Special Spring Chinary Black Tea"},
                    {id:3,name:"Mouling Special Autumn Green Tea"},
                    {id:4,name:"Seeyok Special Summer Muscatel Black Tea"},
                ]
            },
            {
                cat:"Exotic",
                // subcats:[
                //     {id:1,name:"Mouling Special Autumn Green Tea"},
                //     {id:2,name:"Castleton Exotic Summer Muscatel Black Tea"},
                //     {id:3,name:"Saffron (Kesar) Rose Chai"},
                //     {id:4,name:"Hibiscus Lemongrass Tisane"},
                // ]
            },
            {
                cat:"Organic",
                subcats:[
                    {id:1,name:"Risheehat classNameic Summer Black Tea"},
                    {id:2,name:"Mouling Special Autumn Green Tea"},
                    {id:3,name:"Selim Hill classNameic Spring Green Tea"},
                    {id:4,name:"Temi Summer Muscatel Black Tea"},
                ]
            },
            {
                cat:"Alcoholic",
                // subcats:[
                //     {id:1,name:">Champer's Holiday"},
                //     {id:2,name:"Mulled Wine Tea"},
                //     {id:3,name:" Rum & Raisin Tea"},
                //     {id:4,name:"Nepal Breakfast Black Tea"},
                // ]
            },
        ];
        // this.setState({value:sidebarFilter});
        let ar=[
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:5,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            },
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:3,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            },
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:1,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            },
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:6,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            },
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:0,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            },
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:5,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            },
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:2,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            },
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:1,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            },
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:5,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            },
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:3,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            },
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:1,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            },
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:6,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            },
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:0,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            },
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:5,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            },
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:2,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            },
            {
                name:'Condimentum food',
                regular_price:'130.00',
                rating:1,
                image:'assets/images/product-product-1.png',
                details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet sem vitae urna fringilla tempus.'
            }
        ];
        this.setState({ar:ar});
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
                            <div className="col-lg-9 order-1">
                                <ShopArea products={this.state.ar}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )

    }
}
const mapStateToProps=state=>{
    return {...state};
}
export default (connect)(mapStateToProps)(Shop);