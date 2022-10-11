import { Component } from "react";
import ShopTittle from "../components/header";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import MenProdect from "../components/menprodect";


export default class MyShop extends Component {
    render() {
        return (
            <div className="container">
                <ShopTittle></ShopTittle>
                <div className="filter text-center">
                    <h1>Our Prodect</h1>
                    <div className="list d-flex justify-content-around">
                        <div className="filtcard ">
                            <NavLink className="nav-link" to="men">MEN
                            </NavLink>
                        </div>
                        <div className="filtcard">
                            <NavLink className="nav-link" to="women">Women
                            </NavLink>
                        </div>
                        <div className="filtcard">
                            <NavLink className="nav-link" to="kids">KIDS
                            </NavLink>
                        </div>



                    </div>



                    <div className="text-center" >
                        <Outlet />



                    </div>
                </div>










            </div>



        )
    }
}