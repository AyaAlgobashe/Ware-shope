import { Component } from "react";
import { Carousel } from "react-bootstrap";


export default class ShopTittle extends Component {
    render() {
        return (
            <div className="shoptit">
                <div className="container">
                    <div className="row justify-content-between">

                        <div className="col-6 text-start">

                            <h1>OUER SHOP</h1>
                            <p>Best quality clothes</p>


                        </div>
                        <div className="col-6 align-self-end">
                            <Carousel>
                                <Carousel.Item>
                                    <img className="girl" src="https://images.pexels.com/photos/5885840/pexels-photo-5885840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>

                                </Carousel.Item>
                                <Carousel.Item>
                                <img className="girl" src="https://images.pexels.com/photos/9558577/pexels-photo-9558577.jpeg?auto=compress&cs=tinysrgb&w=600"></img>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="girl"
                                        src="https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>





        )
    }
}