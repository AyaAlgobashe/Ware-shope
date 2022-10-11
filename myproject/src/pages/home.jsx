
import { Component } from "react";
import SendMessag from "../components/contactHome";
import FeadSlider from "../components/FeadSlider";
import MyFead from "../components/feat";
import MyProdect from "../components/product";
import MySlider from "../components/slide";
export default class Home extends Component {
    render() {
        return ( 
            <div className="home">
                <div className="slid ">
                    <div className="container">
                    <MySlider></MySlider>
                    </div>
                </div>
                <MyFead></MyFead>
                <FeadSlider></FeadSlider>
                <div className="new text-center">
                    <div className="container">
                        <h1>Trandy Products</h1>
                    </div>
                </div>
                <MyProdect></MyProdect>
                <SendMessag></SendMessag>

                
            </div>
    
        )
    }}