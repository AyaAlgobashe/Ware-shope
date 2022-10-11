import { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";


export default class MyFead extends Component {
render() {
    return (
        <div className="sections text-center">
        <div className="container"> 
            <div className="row text-center">
                <div className="circ col-3">
                    <div className="min d-flex justify-content-between">
                        <i class="bi bi-arrow-up-right-circle-fill"></i>
                        <h3>Quality Product</h3>
                    </div>
                </div>
                <div className=" circ col-3">
                    <div className=" min d-flex justify-content-between">
                    <i class="bi bi-cart"></i>
                        <h3>Free Shipping</h3>
                    </div>
                    
                </div>
                <div className="circ col-3">
                    <div className=" min d-flex justify-content-between"> 
                    <i class="bi bi-arrow-left-right"></i> 
                    <h3>14-Day Return</h3>
                    </div>
                    
                   
                   
                </div>
                <div className="circ col-3">
                    <div className="min d-flex justify-content-between">
                        <i class="bi bi-telephone-fill"></i>
                        <h3>24/7 Support</h3>
                    </div>

                
                </div>
            </div>
        </div>
    </div>

    )}}