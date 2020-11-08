import React from 'react';
import '../shop.css';
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: null };
    }
    componentDidMount() {
        var categoryChildren = window.$('.sidebar-category li .children');
        categoryChildren.slideUp();
        categoryChildren.parents('li').addClass('has-children');
        window.$('.sidebar-category').on('click', 'li.has-children > a', function (e) {
            if (window.$(this).parent().hasClass('has-children')) {
                if (window.$(this).siblings('ul:visible').length > 0) window.$(this).siblings('ul').slideUp();
                else {
                    window.$(this).parents('li').siblings('li').find('ul:visible').slideUp();
                    window.$(this).siblings('ul').slideDown();
                }
            }
            if (window.$(this).attr('href') === '#') {
                e.preventDefault();
                return false;
            }
        });
    }
    componentWillReceiveProps(nextprops) {
        console.log("pr", nextprops);

        if (nextprops.filterItems && nextprops.filterItems.length) {
            setTimeout(
                () => {
                    var categoryChildren = window.$('.sidebar-category li .children');
                    categoryChildren.slideUp();
                    categoryChildren.parents('li').addClass('has-children');
                    window.$('.sidebar-category').on('click', 'li.has-children > a', function (e) {
                        if (window.$(this).parent().hasClass('has-children')) {
                            if (window.$(this).siblings('ul:visible').length > 0) { }
                            else {
                                window.$(this).parents('li').siblings('li').find('ul:visible').slideUp();
                                window.$(this).siblings('ul').slideDown();
                            }
                        }
                        if (window.$(this).attr('href') === '#') {
                            e.preventDefault();
                            return false;
                        }
                    });
                },500
            )

        }
    }

    selectedCat = id => {
        this.setState({ selected: id });
    }
    render() {
        return (
            <div className="sidebar-wrapper mt-md-60 mt-sm-60">
                {/* <!-- single sidebar start --> */}
                <div className="sidebar-single">
                    <div className="sidebar-title">
                        <h3>categories</h3>
                    </div>
                    <div className="sidebar-body">
                        <ul className="sidebar-category">
                            {
                                this.props.filterItems && this.props.filterItems.length ?
                                    this.props.filterItems.map((item, index) => {
                                        return (
                                            <li key={index}><a href="#">{item.cat}</a>
                                                <ul className="children">
                                                    {
                                                        item.subcats && item.subcats.length ?
                                                            item.subcats.map((subcat, index) => {
                                                                return (
                                                                    <li key={subcat.id}><a href="javaScript:void(0)" className={this.state.selected === (item.cat+index) ? 'subcat-selected' : ''} onClick={() => this.selectedCat((item.cat+index))}>{subcat.name}</a></li>
                                                                )
                                                            })
                                                            :
                                                            null
                                                    }

                                                </ul>
                                            </li>
                                        )
                                    })

                                    :
                                    null
                            }
                        </ul>
                    </div>
                </div>
                {/* <!-- single sidebar end -->
    
                                <!-- single sidebar start --> */}
                <div className="sidebar-single">
                    <div className="sidebar-title">
                        <h3>filter by price</h3>
                    </div>
                    <div className="sidebar-body">
                        <div className="price-range-wrap">
                            <div className="price-range" data-min="0" data-max="500"></div>
                            <div className="range-slider">
                                <form action="javaScript:void(0)">
                                    <div className="price-input">
                                        <label htmlFor="amount">Price: </label>
                                        <input type="text" id="amount" /></div>
                                    <button className="filter-btn">filter</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single sidebar end -->
                                <!-- single sidebar start --> */}
                <div className="sidebar-single">
                    <div className="sidebar-title">
                        <h3>Flavour</h3>
                    </div>
                    <div className="sidebar-body">
                        <ul className="color-list">
                            <li><a href="javaScript:void(0)">Floral</a><span>(5)</span></li>
                            <li><a href="javaScript:void(0)">Fruity</a><span>(6)</span></li>
                            <li><a href="javaScript:void(0)">Vegetal</a><span>(2)</span></li>
                            <li><a href="javaScript:void(0)">Spicy</a><span>(1)</span></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- single sidebar end -->
                                <!-- single sidebar start --> */}
                <div className="sidebar-single">
                    <div className="sidebar-title">
                        <h3>Let Me Decide</h3>
                    </div>
                    <div className="sidebar-body">
                        <ul className="size-list">
                            <li><a href="javaScript:void(0)">Refreshing</a></li>
                            <li><a href="javaScript:void(0)">Energized</a></li>
                            <li><a href="javaScript:void(0)">Soothing</a></li>
                            <li><a href="javaScript:void(0)">Cheerful</a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- single sidebar end -->
                                <!-- single sidebar start --> */}
                <div className="sidebar-single">
                    <div className="sidebar-banner">
                        <img src="images/banner-banner_left.jpg" alt="" style={{ cursor: "pointer" }} />
                    </div>
                </div>
                {/* <!-- single sidebar end --> */}
            </div>
        )
    }

}
export default Sidebar;