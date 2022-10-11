import React from 'react'
import { Component } from 'react'
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
export default class WomenDetails extends Component {
    getred = (e) => {
        e.target.style.color = "red";


    };
    getpink = (e) => {
        e.target.style.color = "#D19C97";


    };

    render() {
        return (
            <div className="more container">
                <div className="row">
                    <div className=" mencard col-sm-6 col-md-3 " >
                        <div class>
                            <img src="https://img.shopstyle-cdn.com/sim/3d/81/3d81199421647b5fd7025ad9ceb32196_best/hollister-cool-girl-collegiate-t-shirt-in-light-blue.jpg" />

                        </div>
                    </div>
                    <div className=" detil col-6 text-end">

                        <h1>T-Shirt</h1>
                        <h3>$80</h3>
                        <div className=" cart justify-content-between">
                            <button className="ad">Add to <i class="bi bi-cart4"></i> </button>
                            <button className="ad"><i class="bi bi-heart-fill" onClick={this.getred} onDoubleClick={this.getpink}></i></button>


                        </div>
                        <div className="size d-flex  ">
                            <button className='ad'>M</button>
                            <button className='ad'>L</button>
                            <button className='ad'>XL</button>
                            <button className='ad'>XXL</button>

                        </div>
                        <div>
                            <Link to="/shop/women">
                                <button className="but">Back</button>
                            </Link>
                        </div>                   
                    </div>
                </div>
            </div>


        )
    }
}

