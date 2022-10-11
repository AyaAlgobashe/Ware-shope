import { Component } from "react";


export default class AboutUs extends Component {
    render() {
        return (
            <div className="about">
                <section>

                    <div class="cont text-center">
                        <h1>About US</h1>
                        {/* <p>We Have Big Variety of Uniqe Coths</p> */}


                    </div>



                </section>

                <section>
                    <div className="container">
                        <div className=" abou row ">
                            <div className="col-4 leftabou">
                                <h1>Our Story</h1>
                                <p>Since 1996,  you have been the core and heart of our story.
                                    That’s why Carina has always used her intelligent intuition to empower you with joyful comfort.  Being your second skin and your reliable supporter, Carina accompanies you throughout life - everyday and everywhere.
                                    Our purpose is to provide you with high quality, great value everyday essentials to fulfill your everyday potential.</p>

                            </div>
                            <div className="col-4 rightabot ">
                                <h1>Our Values</h1>
                                <ul>
                                    <li>“Can Do” attitude
                                    </li>
                                    <li>Customer Centricity</li>
                                    <li>Confidence and Humbleness
                                    </li>
                                    <li>Courage</li>
                                    <li>Spreading Happiness & Positivity
                                    </li>
                                    <li>Ethics Over Gain
                                    </li>
                                    <li>One Family
                                    </li>
                                </ul>

                            </div>
                            <div className="col-4">
                                <div className="aboutimag">
                                    <img src="https://www.lebonmarche.com/dw/image/v2/BBWG_PRD/on/demandware.static/-/Sites-LeBonMarche-Library/default/dw4ba908a1/INSPIRATIONS/Imparfaite%20Paris/Imparfaite-corner.jpg?sw=768&sfrm=jpg"/>
                                </div>
                            </div>


                        </div>

                    </div>

                </section>
            </div>
        )
    }
}