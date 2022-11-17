import React from "react";
import Column from "../components/UI/Column";
import Row from '../components/UI/Row';
import HealthCare from '../assets/Asset-4.svg';
import TeleCovid from '../assets/Asset-2.svg';
import O2 from "../assets/Asset-3.svg";
import HeartLogo from "../assets/Asset-1.svg";
import WorkPic from '../assets/hospital.jpg';
import kids from '../assets/kids.jpg';
import vmssh from '../assets/vmssh-1.JPEG';
import './work.css';
const Work = () => {
  return (
    <>
      <section className=" py-5 bg-light">
        <div className="container ">
          <Row className="position-relative">
            <Column className="px-4 mb-lg-0 mb-4 text-card-3 position-absolute text-white shadow py-5 ps-5 start-0">
              <h2 className="fw-bold mb-4">VMS</h2>
              <ul className="text-white">
                <li className="mb-2"><a className="text-white" href="http://vmssh.com/">History and its purpose</a></li>
                <li className="mb-2">Shafaqat Rehabilitation centre</li>
                <li className="mb-2">Shafaqat Special School /Shafaqat Inclusive School</li>
                <li className="mb-2">Speech & Audiology Department</li>
                <li className="mb-2">CBR Programmes</li>
                <li className="mb-2">Kidney Care Center</li>
                <li className="mb-2">VMS Polyclinic</li>
                <li>Parental counselling</li>
              </ul>
            </Column>
            <Column className="offset-lg-3 px-0 col-lg-9">
              <img src={vmssh} className="img-fluid w-100" alt="" />
            </Column>
          </Row>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold pb-5"> JKHFF</h2>
          <div className="d-flex justify-content-center icons">
            <div className="text-center mx-3 text-secondary fs-sm mb-md-0 mb-4">
              <img src={TeleCovid} alt="img" className="img-fluid logos" />
              <p className="fw-bold pt-3 text-center">Tele-Health Covid support</p>
            </div>
            <div className="text-center mx-3 text-secondary fs-sm mb-md-0 mb-4">
              <img src={O2} alt="img" className="img-fluid logos" />
              <p className="fw-bold pt-3 text-center">Oxygen support during Covid </p>
            </div>
            <div className="text-center mx-3 text-secondary fs-sm mb-md-0 mb-4">
              <img src={HealthCare} alt="img" className="img-fluid logos" />
              <p className="fw-bold pt-3 text-center">Primary care clinic</p>
            </div>
            <div className="text-center mx-3 text-secondary fs-sm mb-md-0 mb-4">
              <img src={HeartLogo} alt="img" className="img-fluid logos" />
              <p className="fw-bold pt-3 text-center">Kids Heart Program</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-5 bg-light">
        <div className="container">
          <Row className="position-relative">
            <Column className="col-lg-9 mb-lg-0 mb-4 px-0">
              <div className="">
                <img src={kids} class="d-block img-fluid w-100 kid" alt="..." />
              </div>
            </Column>
            <div className="position-absolute end-0 text-card-3 text-white shadow py-5 ps-5">
              <h4 className="fw-bold py-2">Kids Heart Surgery Program</h4>
              <h4 className="fw-bold py-2">A success story</h4>
              <p className="text-white">Number of kids treated = 70</p>
              <p className="text-white">Total amount spent = 55 Lacs INR</p>
              <p className="text-white">Total Number of Donors &#62; 100</p>
              <p className="text-white">Money Saved to society &#62; 6 Cr </p>
            </div>
          </Row>
        </div>
      </section>
      <section className="container py-5">
        <div class="accordion border accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed fs-4 fw-bold text-prim" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Accordion Item 
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Lorem Ipsum <i class="fa-sharp fa-solid fa-minus"></i> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed fs-4 fw-bold text-prim" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed fs-4 fw-bold text-prim" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Work;