import React from "react";
import Column from "../components/UI/Column";
import Row from "../components/UI/Row";
import "./contact.css"

const ContactUs =()=>{
    return(
        <>
        <section>
          <div className="container py-5">
           <Row>
            <Column className="col-8 mx-auto">
            <h1 className="fw-bold py-2">Contact VMSSH</h1>
            <div className="pt-5"> 
          <h2 className="fw-bold pb-2">Mailing Address</h2>
          <p>Highway near Bemina</p>
          <p>srinagar,190018</p>
          <p>Jammu and Kashmir, India</p>
          <p> 
            <strong>Tel:</strong><span>+39-06-65131</span>
          </p>
          <p>
            <strong>Fax</strong><span>+39-06-6590632</span>
          </p>
            </div>
            <h2 className="fw-bold py-3">Contact Us</h2>
            <form>
            <label className="text-secondary pb-3"> Type Of Inquiry</label>
            <select class="form-select form-select-lg mb-3 text-secondary" aria-label=".form-select-lg example">
              <option selected>select option</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>  
            <label className="pb-3 text-secondary" for="fname">
                First Name
            </label>
            <input class="form-control form-control-lg mb-3" id="fname" type="text" placeholder="Enter Your First Name" aria-label=".form-control-lg example"/>
            <label className="pb-3 text-secondary" for="lname">
                Last Name
            </label>
            <input class="form-control form-control-lg mb-3" id="lname" type="text" placeholder="Enter Your Last Name" aria-label=".form-control-lg example"/>
            <label className="pb-3 text-secondary" for="email">
                Your Email Address
            </label>
            <input class="form-control form-control-lg mb-3" id="email" type="email" placeholder="Enter Your Email Address" aria-label=".form-control-lg example"/>
            <label className="pb-3 text-secondary" for="subject">
                Subject
            </label>
            <input class="form-control form-control-lg mb-3" id="subject" type="text" placeholder="Subject" aria-label=".form-control-lg example"/>
           <label className="pb-3 text-secondary" for="mesg"> Message</label>
            <textarea className="form-control mb-3" id="mesg" rows="12" cols="60" placeholder="Leave your message here"></textarea>
           <button className="rounded-pill btn shadow primary-btn px-4 fw-bold mt-3">submit</button>
            </form>
            </Column>
           </Row>
          </div>
        </section>
        </>
    );
}
export default ContactUs;