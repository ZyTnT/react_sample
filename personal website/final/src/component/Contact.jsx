import '../CSS/basic.css'
import '../CSS/form.css'
import Form from './Form';
import React, { useEffect, useState } from "react";

function Contact(){
    
    return(
        <div class="content">
        <section id="contact_show" class="start_intro">
            <div class="wrap">
                <div class="box colour1">
                    <h1 className='title'>Let's make connection!</h1>
                    <p>Whether it's a business partnership, a task commission, a job search or making friends, please submit your contact information and we will contact you as soon as possible</p>
                    <p><a href="/about.html">Read more about us</a></p>
                </div>
            </div>
        </section>

        <section id="contact_form">
            <h2 style={{'textAlign' : 'center'}}>We will contact you as soon as possible after you sign up.</h2>
            <Form/>
        </section>
        </div>
    )
}

export default Contact;
