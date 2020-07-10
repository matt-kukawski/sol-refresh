import React from 'react';
import {contactForm} from 'js/contactForm.js'

function ContactForm(props) {
    {contactForm()}
    return (
        
        <div id="contactFormDiv">
            <form id="contactForm">
                <h3>Contact Us</h3>
                <p id="successMsg"></p>
                <label>Name: <span>*</span></label>
                <input type="text" className="contactFormInput" id="contactFormName" placeholder="Please enter your name" /><br/>
                <label>Email: <span>*</span></label>
                <input type="text" className="contactFormInput" id="contactFormEmail" placeholder="Please enter a valid email address" /><br/>
                <label>Phone: </label>
                <input type="text" className="contactFormInput" id="contactFormPhone" placeholder="Please enter your phone number if you'd like us to call you" /><br/>
                <label>How can we help you?</label><br/>
                <textarea id="contactFormMsg"></textarea>
                <p>What is your preferred contact method?<br/><span className="colorGrey">(If you don't have a preference there's no need to select one).</span></p>
                <input type="radio" name="contactRadio" id="phoneRadio" />Phone<br/>
                <input type="radio" name="contactRadio" id="emailRadio" />Email<br/><br/>
                <input type="submit" className="submitBtn" id="contactSubmitBtn" name="contactSubmitBtn" value="Send" />
            </form>
        </div>



        );
    }
    
export default ContactForm;