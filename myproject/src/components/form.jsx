import { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from 'react';


export default function ContactUS() {
    
    const getNameValue=(e)=>{
        if (e.target.value.length <= 7) {

            e.target.style.border = "5px solid red";

        } else {
        
            e.target.style.border = "5px solid #D19C97 ";
        }

    };
    const getEmail=(e)=>{
        if (e.target.value.length <= 8) {
            e.target.style.border = "5px solid red";
            console.log("tast2");
            } 
        
            else {
        
            e.target.style.border = "5px solid #D19C97";
            
            }
        }
    


        return (
            <section class="form">
                <div class="container">
                    <div class="row ">
                        <div class="labels col-4 ">
                            <div class=" phon d-flex ">
                            <i class="bi bi-house-heart-fill"></i>
                                <div>
                                    <h4>Binghamton, New York</h4>
                                    <p class="text-sm ">4343 Hinkle Deegan Lake Road</p>
                                </div>
                            </div>
                            <div class=" phon d-flex ">
                                <i class="bi bi-telephone-fill"></i>
                                <div>
                                    <h4>00 (958) 9865 562</h4>
                                    <p class="text-sm ">Mon to Fri 9am to 6 pm</p>
                                </div>
                            </div>
                            <div class=" phon d-flex ">
                            <i class="bi bi-envelope-paper-heart-fill"></i>
                                <div>
                                    <h4>support@colorlib.com</h4>
                                    <p class="text-sm ">Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="inp">
                                <input type="text" placeholder="Enter your name" id="num" required minlength="4" maxlength="8"pattern="[a-zA-Z]+"
                                 onChange={getNameValue}></input>
                                <br/>
                                <span class="pan" id="span1">Name is required</span>
                                <input type="text" placeholder="Enter your Email"  id="email" onClick={getEmail} required minlength="8" maxlength="14" />
                                <input type="text" placeholder="Enter supject" />
                            </div>


                        </div>
                        <div class=" col-4">
                            <textarea class="area" name="message" placeholder="Enter Messege"></textarea>
                            <button variant="warning" type="submit">Send Message</button>
                        </div>
                    </div>
                </div>
            </section>






        )
    }
