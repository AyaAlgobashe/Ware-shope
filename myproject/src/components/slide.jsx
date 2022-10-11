import { Component } from "react";
import { Carousel } from "react-bootstrap";

export default class MySlider extends Component {
render() {
    return (
       
        <Carousel>
        <Carousel.Item>
        <img
            className=" cloth d-block w-100"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1206958270.jpg?crop=1.00xw:0.760xh;0,0.0316xh&resize=980:*"
            alt="First slide"
        />
        <Carousel.Caption>
        <h4>Sale starts now</h4>
            <h1>Up to 70% off</h1>
            <h4>In store and online</h4>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className=" cloth d-block w-100"
            src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/02/20/12/lfwstreetstyle2002j.jpg?width=968"
            alt="Second slide"
        />
  
        <Carousel.Caption>
        <h1>New Winter Collection</h1>
        <h4>Available Now</h4>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className=" cloth d-block w-100"
            src="https://fashionista.com/.image/t_share/MTU4NTQ4MjU3OTAxOTEzNDQ0/best-london-fashion-week-street-style-spring-2019.jpg"
            alt="Third slide"
        />

        <Carousel.Caption>
            <h1>50% off </h1>
            <h3> Summer Collection</h3>
        
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
   


    );
}
}