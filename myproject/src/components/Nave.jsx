import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



export default class MyNaveBare extends Component {
render() {
    return (
    <Navbar className="header ">
        <div className="container">
        <h1 href="#home" className="titl">Ware Shope</h1>
            <nav>
                <ul class="par">
                    <li><Link className="link" to="/home">Home</Link></li>
                    <li><Link className="link" to="/shop">Shoping</Link></li>
                    <li> <Link className="link"to="/aboutus">About US</Link></li>
                    <li> <Link className="link" to="/contactus">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
        
    
                
                

                    
        
        
    
    </Navbar>
        






    );}}