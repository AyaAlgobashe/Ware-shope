import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";



export default class WomenCard extends Component {
    constructor() {
        console.log("Constructor");
        super();
    }

    state = {
        count: 0,
    }
    clickHandler = () => {
        this.setState({
            count: this.state.conut + 1
        });
    };
    getred=(e)=>{
        e.target.style.color="red";
        

    };
    getpink=(e)=>{
        e.target.style.color="#D19C97";
        

    };

    render() {
        let { prdctinfo } = this.props;
        console.log(this.props);


        return (
            <div className=" col-sm-6 col-md-3 " id="card">
                <Card id="maincard">
                    <Card.Img src={prdctinfo?.imgscr} className="cardimage" />
                    <Card.Body>
                        <Card.Title>
                            <h2>{prdctinfo?.productName}</h2>

                        </Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <div class="container">

                            {""}
                            <h4>{prdctinfo?.Price}</h4>


                            {""}
                            <div className=" cart d-flex justify-content-between">
                                <Button className="add">Add to <i class="bi bi-cart4"></i> </Button>
                                <i class="bi bi-heart-fill" onClick={this.getred} onDoubleClick={this.getpink}></i>

                            </div>
                            <div className="more text-end">
                                <h6><Link className="det" to="/moredetil">More Details</Link></h6>
                            
                            </div>
                            
                           
                            




                        </div>
                    </Card.Body>
                </Card>
            </div>

        )
    };
}
