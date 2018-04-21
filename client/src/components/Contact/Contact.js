import React, { Component } from 'react';
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
        <section id="contact"> 
            <div className="container"> 
                <div className="row"> 
                    <div className="col-lg-12 text-center" id="contactHeader"> 
                        <h2 className="text-center text-secondary mb-0">Contact Us</h2>
                        <hr className="mb-5" />
                    </div> 
                </div> 
                <div className="row"> 
                    <div className="col-md-12"> 

                        {/* Contact Form Start */}
                        {/* update email in action https://formspree.io/your@email.com */}
                        <form method="POST" action="https://formspree.io/aidanclemente@gmail.com"
                            name="sentMessage" id="contactForm" novalidate=""> 

                            {/* User Name  */}
                            <div className="row  control-group"> 
                                <div className="form-group col-sm-12"> 
                                    <input type="text" className="form-control" placeholder="Name"name="name" id="name" /> 
                                </div> 
                            </div> 

                            {/* User Email */}
                            <div className="row control-group"> 
                                <div className="form-group col-sm-12"> 
                                    <input type="email" className="form-control" placeholder="Email Address" name="_replyto" id="email" /> 
                                </div> 
                            </div> 

                            {/* User Phone Number */}
                            <div className="row control-group"> 
                                <div className="form-group col-sm-12"> 
                                    <input type="tel" className="form-control" placeholder="Phone Number" name="phone" id="phone" /> 
                                </div> 
                            </div> 

                            {/* User Message */}
                            <div className="row control-group"> 
                                <div className="form-group col-sm-12"> 
                                    <textarea rows="4" className="form-control" placeholder="Message" name="message" id="message"></textarea> 
                                </div> 
                            </div>

                            <br /> 

                            {/* Submit Button */}
                            <div className="row"> 
                                <div className="col-sm-12"> 
                                    <button id="submitForm" type="submit" className="btn btn-lg">Send</button> 
                                </div> 
                            </div> 

                        </form> {/* End Contact Form */}
                    </div> {/* End col-md-8 offset-md-2 */}
                </div> {/* End row*/}
            </div> {/* End Container*/}
            <div className="push"></div>
        </section>
    )
  }
}

export default Contact;