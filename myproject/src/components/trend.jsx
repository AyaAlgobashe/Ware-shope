import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default class TrendsCard extends Component {
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

    render() {
        let { prdctinfo } = this.props;
        console.log(this.props);


        return (
            <div className=" col-sm-6 col-md-3 " id="card">
                <Card id="maincard">
                    <Card.Img src={prdctinfo?.imgscr} className="cardimage" />
                    <Card.Body>
                        <Card.Title>{prdctinfo?.productName}

                        </Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <div class="container">

                            {""}
                            <h2>{prdctinfo?.Price}</h2>


                            {""}

                            <div>
                                <Link to="/shop">
                                    <button>Shop Now</button>
                                </Link>
                            </div>





                        </div>
                    </Card.Body>
                </Card>
            </div>

        )
    };
}
