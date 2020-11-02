import React from 'react';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import Sidebar from './sidebar/sidebar';
import './shop.css';
import ShopArea from './shopArea/shop.area';
class Shop extends React.Component {

    render() {
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
            }
        ]
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
                                <Sidebar />
                            </div>
                            <div className="col-lg-9 order-1">
                                <ShopArea products={ar}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )

    }
}
export default Shop;