import { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default class FeadSlider extends Component {
render() {
    return (
        <div className="posts">
        <Carousel>
        <Carousel.Item>
        <div className="container">
            <div className="row">
                <div className=" person col-6">
                    <div className="info d-flex ">
                    <img src="https://media.boohoo.com/i/boohoo/fzz37910_teal_xl?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit"/>
                        <div className="post1 text-end">
                            <h4>20% OFF THE ALL ORDE</h4>
                            <h1>Winter Collection</h1>
                            <div>
                                <Link to="/shop">
                                    <button>Shop Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className=" person info d-flex ">
                        <div className="post1 ">
                            <h4>20% OFF THE ALL ORDE</h4>
                            <h1>Spring Collection</h1>
                            <div>
                                <Link to="/shop">
                                    <button>Shop Now</button>
                                </Link>
                            </div>
                        </div>
                        <img className="right" src="https://media.boohoo.com/i/boohoo/fzz69527_black_xl/womens-black-woman-signature-oversized-hoodie/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit"/>

                        
                    </div>
                </div>
            </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="container">
            <div className="row">
                <div className=" person col-6">
                    <div className="info d-flex ">
                    <img src="https://media.boohoo.com/i/boohoo/fzz37910_teal_xl?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit"/>
                        <div className="post1 text-end">
                            <h4>20% OFF THE ALL ORDE</h4>
                            <h1>Winter Collection</h1>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className=" person info d-flex ">
                        <div className="post1">
                            <h4>20% OFF THE ALL ORDE</h4>
                            <h1>Spring Collection</h1>
                            <button>Shop Now</button>
                        </div>
                        <img className="right" src="https://media.boohoo.com/i/boohoo/fzz69527_black_xl/womens-black-woman-signature-oversized-hoodie/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit"/>

                        
                    </div>
                </div>
            </div>
        </div>
        </Carousel.Item>
       
    </Carousel>
    </div>
   


    );
}
}