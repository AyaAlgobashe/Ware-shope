import React from 'react'
import { Component } from 'react'
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
export default class KidsDetails extends Component {
    getred=(e)=>{
        e.target.style.color="red";
        

    };
    getpink=(e)=>{
        e.target.style.color="#D19C97";
        

    };

    render() {
        return (
            <div className="more container">
                <div className="row">
                    <div className=" mencard col-sm-6 col-md-3 " >
                        <div class>
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/olivier-baby-1623232815.jpg?crop=1xw:1xh;center,top&resize=480:*"  />

                        </div>
                    </div>
                    <div className=" detil col-6 text-end">

                        <h1>Mine-Dress</h1>
                        <h3>$50</h3>
                        <div className=" cart justify-content-between">
                            <button className="ad">Add to <i class="bi bi-cart4"></i> </button>
                            <button className="ad"><i class="bi bi-heart-fill" onClick={this.getred} onDoubleClick={this.getpink}></i></button>
                            

                        </div>
                        <div>
                            <Link to="/shop/kids">
                                <button className="but">Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

