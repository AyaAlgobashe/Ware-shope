import { Component } from "react";
import { Link } from 'react-router-dom';



export default class SendMessag extends Component {
    render() {
        return (
            
            <div className="messag ">
                <div className="d-flex justify-content-around">
                    <div className=" send tet-start">
                        <img src="https://images.pexels.com/photos/5234774/pexels-photo-5234774.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                    </div>
                    <div className="leftbot text-end">
                        <h1>Any Problem</h1>
                        <div>
                            <Link to="/contactus">
                                <button className="but">Contact Us</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>


        )
    }
}