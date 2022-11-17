import React from "react";
import Column from "../components/UI/Column";
import Row from "../components/UI/Row";
import iconOne from '../assets/mission-icon.svg';
import iconTwo from '../assets/vision-icon.svg';
import iconth from '../assets/value-icon.svg';
import colab from '../assets/colaboration.jpg';
import profile from '../assets/profile.jpg';
import vms from '../assets/vms-hospital.jpg';
import DrMushtaq from '../assets/Dr-Mushtaq.jpeg';
import DrEnayat from '../assets/DR-enayat.jpeg';
import DrAltaf from "../assets/Dr-altaf.jpeg";
import DrMaqbool from "../assets/DR-maqbool.jpeg";
import ErMushtaq from "../assets/Er-Mushtaq.jpeg";
import DrBilal from '../assets/Dr.Bilal.jpg';


import './WhoWeAre.css'
const WhoWeAre = () => {
    return (
        <>
            <section class="about-cards">
                <div className="container py-md-5 py-3">
                    <Row className="px-lg-5 text-primary pb-5">
                        <Column className="col-md-3 align-self-end pb-5">
                            <h1 className="mb-4">Who <br />We Are</h1>
                        </Column>
                        <Column className="col-md-9 pb-5">
                            <p className="fs-5 col-text">VMS Specialty Hospital is the first NOT FOR PROFIT Hospital in Jammu & Kashmir situated in Srinagar on National Highway near Hajj house, Bemina.The hospital would bridge the gap in accessibility to quality healthcare services in child and adult heartdiseases &critical care in phase 1 and then Neurosciences &orthopedic in phase 2. The hospital would be equipped with state-of-the-art diagnostic and clinical facilities to provide best in class treatment to the local community. This initiative is shouldered by two strong trusts (VMS & JKHHF).</p>
                        </Column>
                        <Column className="col-md-12 px-0">
                            <div>
                            <video className="img-fluid w-100" height="400" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                            </video>
                            </div>
                        </Column>
                    </Row>
                    <Row className="position-relative">
                        <Column className="col-lg-6 order-2 position-absolute bg-light py-5 px-4 end-0">
                            <h2 className="fw-bold mb-4">ABOUT VMS</h2>
                            <p className="text-secondary col-text"><strong>Voluntary Medicare Society</strong> is registered with the registrar of societies J&K Govt. under No. 130 of 1970. It is located in the serene Environment spread over 46 kanals nearly 10 Km away from Srinagar airport, adjacent to Skims Medical College Bemina on National Highway Bye-pass Srinagar. The Voluntary Medicare society of J&K was established in the year 1970 as a medico-social voluntary organization dedicated to the care, treatment, and rehabilitation of physically and mentally challenged persons irrespective of caste, color, creed, and religion.</p>
                        </Column>
                        <Column className="col-lg-9 order-1">
                            <img src={vms} className="img-fluid w-100" alt="" />
                        </Column>
                    </Row>
                    <Row className="position-relative">
                        <Column className="col-lg-6 order-lg-1 order-2 position-absolute start-0 bg-warning text-white py-5 px-4">
                            <h2 className="fw-bold mb-4">ABOUT JKHHF</h2>
                            <p className="col-text">A Not-for-Profit Organization founded in 2019 by Kashmiri Doctors and conscientious citizens with the idea of providing high quality healthcare to all with dignity and compassion and to fulfill the unmet need for healthcare to low-income groups. Registered under Section 8 company act 2013, having section 8 license number 133230. A humanitarian organization with a pan J&K presence with members placed globally. Focuses primarily on healthcare in underserved areas. Its work is guided by principles of humanity, neutrality, and impartiality. It offers services to people in general and underprivileged irrespective of religion, gender, class, and caste.</p>
                        </Column>
                        <Column className="col-lg-9 offset-lg-3 order-lg-2 order-1">
                            <img src={vms} className="img-fluid w-100" alt="" />
                        </Column>
                    </Row>
                    <Row className="position-relative">
                        <Column className="col-lg-6 order-lg-2 order-2 position-absolute end-0 py-5 px-4 bg-danger text-white">
                            <h2 className="fw-bold mb-4">About AJH</h2>
                            <p className="col-text"><strong> VMS AND JKHHF </strong> has partnered with <strong>Aurjaan Healthcare (AJH)</strong> as a healthcare management team to provide professional healthcare services from planning, construction, commissioning, and operational running of the hospital. AurJaan (AJ) Healthcare is a new introductory healthcare management company in Kashmir who intends to develop the healthcare system, which will be benchmark to other government, and private healthcare institutions in Kashmir. AurJaan (AJ) Healthcare team members have a proven track record of commissioning specialty clinics and hospitals across the globe as per Joint Commission International standards. AJ healthcare team has quite a vast experience in different domains of healthcare like medical operations, quality, commissioning, improving business operations.</p>
                        </Column>
                        <Column className="col-lg-9 order-lg-1 order-1">
                            <img src={vms} className="img-fluid w-100" alt="" />
                        </Column>
                    </Row>
                </div>
                <div className="bg-light">
                    <div className="container py-5">
                        <Row className>
                            <Column className="col-lg-4 mb-lg-0 mb-4 d-flex align-self-stretch">
                                <div className="card mx-auto rounded-5 px-4 py-5 shadow-sm">
                                    <div className="d-flex align-items-center mb-4">
                                        <img src={iconOne} className="img-fluid" alt="mission" width={80} />
                                        <h2 className="ps-5 mb-0 fw-bold">Mission</h2>
                                    </div>
                                    <div>
                                        <p className="card-text text-secondary col-text">To provide referral healthcare services according to established National and International Healthcare Standards with compassion uniform to all </p>
                                    </div>
                                </div>
                            </Column>
                            <Column className="col-lg-4 mb-lg-0 mb-4 d-flex align-self-stretch">
                                <div className="card mx-auto align-self-stretch rounded-5 p-4 shadow-sm">
                                    <div className="d-flex align-items-center mb-4">
                                        <img src={iconTwo} className="img-fluid" alt="mission" width={80} />
                                        <h2 className="ps-5 mb-0 fw-bold">Vission</h2>
                                    </div>
                                    <div>
                                        <p className="card-text text-secondary col-text">To establish a healthcare institute which will be a benchmark to other institutions in the valley and region thereby improving health for all</p>
                                    </div>
                                </div>
                            </Column>
                            <Column className="col-lg-4 mb-lg-0 mb-4 d-flex align-self-stretch">
                                <div className="card mx-auto align-self-stretch rounded-5 p-4 shadow-sm">
                                    <div className="d-flex align-items-center mb-4">
                                        <img src={iconth} className="img-fluid" alt="mission" width={80} />
                                        <h2 className="ps-5 mb-0 fw-bold">Value</h2>
                                    </div>
                                    <div>
                                        <p className="card-text text-secondary col-text">Human Dignity, Compassion, Justice, Quality, Advocacy</p>
                                    </div>
                                </div>
                            </Column>
                        </Row>
                    </div>
                </div>
            </section>
            <section>
                <div className="container py-5">
                    <h2 className="fw-bold py-1 text-center py-3">Governance And Leadership</h2>
                    <div className="row mx-0 py-5">
                        <div className="col-md-12 align-self-center">
                            <p className="fs-5">VMSSH is governed by the Board of Governance, which consists of 6 members and provides support, direction, and supervision of VMSSH</p>
                            <p className="fs-5 lh-base">The organization is headed by a chairman of the Board, who is appointed jointly by the 6 members of the board. The Board delegated the project to Aurjaan Healthcare for planning, construction, commissioning, and managing operations of the hospital.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="organisation">
                <div className="container">
                    <div className="row mx-0">
                        <div className="col-md-12 px-0">
                            <h2 className="fw-bold mb-5 text-center">Organisational Structure</h2>
                            {/* organisational structure */}
                            <div className="text-center border py-5">
                                <h2 className="level-1 rectangle">Board of Governance VMSSH</h2>
                                <h2 className="level-1-b rectangle">Aurjaan Healthcare Management</h2>
                                <ol className="level-2-wrapper ps-0 position-relative row mx-0 list-unstyled">
                                    <li className="col-4">
                                        <h2 className="level-2 rectangle">Project Manager</h2>
                                        <div className="level-3 position-relative w-100 my-0 mx-auto">
                                            <ul className="list-unstyled text-start border px-lg-5 px-2 py-5 fs-6">
                                                <li className="mb-2">Project Management</li>
                                                <li className="mb-2">Work Flow & Medical</li>
                                                <li className="mb-2">Space Management</li>
                                                <li className="mb-2">MEP</li>
                                                <li className="mb-2">Tender</li>
                                                <li className="mb-2">Remaining civil works</li>
                                                <li className="mb-2">Quality control</li>
                                                <li className="mb-2">Operation Room & CSSD</li>
                                                <li className="mb-2">Medical Equipment</li>
                                                <li className="mb-2">Medical Furniture</li>
                                                <li className="mb-2">Contractual Services</li>
                                                <li className="mb-2">Laundry</li>
                                                <li className="mb-2">Housekeeping</li>
                                                <li className="mb-2">Kitchen</li>
                                                <li className="mb-2">Security</li>
                                                <li className="mb-2">Lenin & Uniform</li>
                                                <li className="mb-2">Supply chain</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="col-8">
                                        <h2 className="rectangle level-2-b">Hospital Director/CEO</h2>
                                        <ol className="level-3-wrapper ps-0 row mx-0 list-unstyled">
                                            <li className="col-6">
                                                <h3 className="level-3 rectangle">Clinical Director (MD)</h3>
                                                <div className="level-3 level-3-wrapper position-relative w-100 my-0 mx-auto">
                                                    <ul className="list-unstyled text-start border py-5 px-lg-3 px-2 fs-6">
                                                        <li className="mb-2">Medical Staff</li>
                                                        <li className="mb-2">Nursing Manager/staff</li>
                                                        <li className="mb-2">Technicians</li>
                                                        <li className="mb-2">Pharmacy</li>
                                                        <li className="mb-2">Infection Control</li>
                                                        <li className="mb-2">Quality & Audits</li>
                                                        <li className="mb-2">Medical Records</li>
                                                        <li className="mb-2">Health Information</li>
                                                        <li className="mb-2">Health Information system</li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="col-6">
                                                <h3 className="level-3 rectangle">Operation Director</h3>
                                                <div className="level-3 level-3-wrapper position-relative w-100 my-0 mx-auto">
                                                    <ul className="list-unstyled text-start border py-5 px-lg-3 px-2 fs-6">
                                                        <li className="mb-2">Facility Management</li>
                                                        <li className="mb-2">Financial Management (Billing, accounts, strategy)</li>
                                                        <li className="mb-2">Insurance</li>
                                                        <li className="mb-2">Housekeeping</li>
                                                        <li className="mb-2">Transport</li>
                                                        <li className="mb-2">Patient relation (call center, reception, porters)</li>
                                                        <li className="mb-2">IT</li>
                                                        <li className="mb-2">Biomedical</li>
                                                        <li className="mb-2">Supplychain</li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
                            {/* organisational structure */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="board-members py-5">
                <div className="container position-relative">
                    <div className="row mx-0">
                        <div className="col-lg-3 position-absolute top-50 end-0 translate-middle bg-light p-5 chair-col">
                            <div className="text-end">
                                <h5 className="fw-bold mb-4">Chairman</h5>
                                <h6>Dr. Mir Maqbool</h6>
                                <button data-bs-toggle="modal" data-bs-target="#doctor_2" className="btn btn-primary my-5 fw-bold fs-sm px-4">Read Biography</button>
                            </div>
                        </div>
                        <div className="col-lg-9 px-0">
                            <div>
                                <img src={profile} class="img-fluid" alt="profile" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row mx-0">
                        <div className="mb-4 col-lg-6 px-0">
                            <div className="row mx-0">
                                <div className="col-lg-6 px-0 bg-light p-5">
                                    <div className="px-3">
                                        <h5 className="fw-bold mb-4">Consultant Cardiac Anesthesiologist</h5>
                                        <h6>Dr. Altaf Bukhari</h6>
                                        <button data-bs-toggle="modal" data-bs-target="#doctor_1" className="btn btn-primary my-5 fw-bold fs-sm px-4">Read Biography</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 px-0">
                                    <img src={profile} class="img-fluid h-100 w-100" alt="profile" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 col-lg-6 px-0">
                            <div className="row mx-0">
                                <div className="col-lg-6 px-0 bg-light p-5 order-2">
                                    <div className="px-3">
                                        <h5 className="fw-bold mb-4">Psychiatrist, Co-Principal, investigator/Researcher</h5>
                                        <h6>Dr. Mushtaq Margoob</h6>
                                        <button data-bs-toggle="modal" data-bs-target="#doctor_3" className="btn btn-primary my-5 fw-bold fs-sm px-4">Read Biography</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 px-0 order-1">
                                    <img src={profile} class="img-fluid h-100 w-100" alt="profile" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 col-lg-6 px-0">
                            <div className="row mx-0">
                                <div className="col-lg-6 px-0 bg-light p-5 order-2">
                                    <div className="px-3">
                                        <h5 className="fw-bold mb-4">Expert in state vigilence organisation</h5>
                                        <h6>Er. Mushtaq Ahmad</h6>
                                        <button data-bs-toggle="modal" data-bs-target="#doctor_4" className="btn btn-primary my-5 fw-bold fs-sm px-4">Read Biography</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 px-0 order-1">
                                    <img src={profile} class="img-fluid h-100 w-100" alt="profile" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 col-lg-6 px-0">
                            <div className="row mx-0">
                                <div className="col-lg-6 px-0 bg-light p-5">
                                    <div className="px-3">
                                        <h5 className="fw-bold mb-4">Consultant Rheumatology and Internal Medicine</h5>
                                        <h6>Dr. Enayat Ali</h6>
                                        <button data-bs-toggle="modal" data-bs-target="#doctor_5" className="btn btn-primary my-5 fw-bold fs-sm px-4">Read Biography</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 px-0">
                                    <img src={profile} class="img-fluid h-100 w-100" alt="profile" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 col-lg-6 px-0">
                            <div className="row mx-0">
                                <div className="col-lg-6 px-0 bg-light p-5">
                                    <div className="px-3">
                                        <h5 className="fw-bold mb-4">Chairman</h5>
                                        <h6>Mr. Waqar Gani</h6>
                                        <button data-bs-toggle="modal" data-bs-target="#doctor_7" className="btn btn-primary my-5 fw-bold fs-sm px-4">Read Biography</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 px-0">
                                    <img src={profile} class="img-fluid h-100 w-100" alt="profile" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 col-lg-6 px-0">
                            <div className="row mx-0">
                                <div className="col-lg-6 px-0 bg-light p-5 order-2">
                                    <div className="px-3">
                                        <h5 className="fw-bold mb-4">Chairman</h5>
                                        <h6>Dr. Mir Maqbool</h6>
                                        <button data-bs-toggle="modal" data-bs-target="#doctor_2" className="btn btn-primary my-5 fw-bold fs-sm px-4">Read Biography</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 px-0 order-1">
                                    <img src={profile} class="img-fluid h-100 w-100" alt="profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container position-relative">
                    <div className="row mx-0">
                        <div className="col-lg-3 position-absolute top-50 end-0 translate-middle bg-light p-5 chair-col">
                            <div className="text-end">
                                <h5 className="fw-bold mb-4">Aurjaan Healthcare Director</h5>
                                <h6>Dr. Bilal A Bhat</h6>
                                <button data-bs-toggle="modal" data-bs-target="#doctor_6"className="btn btn-primary my-5 fw-bold fs-sm px-4">Read Biography</button>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div>
                                <img src={profile} class="img-fluid" alt="profile" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="bg-light people">
                <div className="container py-5">
                    <div>
                        <h2  className="fw-bold text-center pb-3">Our Members</h2>
                        <Row className="text-center">
                            <Column className="col-md-4 mb-5 align-items-center align-self-stretch d-flex flex-column">
                                <img src={DrAltaf} alt="" className="img-fluid mb-3 rounded-circle" />
                                <h4 className="text-secondary fw-bold" data-bs-toggle="modal" data-bs-target="#doctor_1">Dr. Altaf Bukhari</h4>
                                <p className="text-secondary">Consultant Cardiac Anesthesiologist</p>
                            </Column>
                            <Column className="col-md-4 mb-5 align-items-center align-self-stretch d-flex flex-column">
                                <img src={DrMaqbool} alt="" className="img-fluid mb-3 rounded-circle" />
                                <h4 className="text-secondary fw-bold" data-bs-toggle="modal" data-bs-target="#doctor_2">Dr. Mir Maqbool</h4>
                                <p className="text-secondary">President Voluntary Medicare Society</p>
                            </Column>
                            <Column className="col-md-4 mb-5 align-items-center align-self-stretch d-flex flex-column">
                                <img src={DrMushtaq} alt="" className="img-fluid mb-3 rounded-circle" />
                                <h4 className="text-secondary fw-bold" data-bs-toggle="modal" data-bs-target="#doctor_3">Dr. Mushtaq Margoob</h4>
                                <p className="text-secondary">Psychiatrist, Co-Principal, investigator/Researcher</p>
                            </Column>
                            <Column className="col-md-4 mb-5 mb-md-0 align-items-center align-self-stretch d-flex flex-column">
                                <img src={ErMushtaq} alt="" className="img-fluid mb-3 rounded-circle" />
                                <h4 className="text-secondary fw-bold" data-bs-toggle="modal" data-bs-target="#doctor_4">Er. Mushtaq Ahmad</h4>
                                <p className="text-secondary">Expert in state vigilence organisation</p>
                            </Column>
                            <Column className="col-md-4 mb-5 mb-md-0 align-items-center align-self-stretch d-flex flex-column">
                                <img src={DrEnayat} alt="" className="img-fluid mb-3 rounded-circle" />
                                <h4 className="text-secondary fw-bold" data-bs-toggle="modal" data-bs-target="#doctor_5">Dr. Enayat Ali</h4>
                                <p className="text-secondary">Consultant Rheumatology and Internal Medicine</p>
                            </Column>
                            <Column className="col-md-4 mb-5 mb-md-0 align-items-center align-self-stretch d-flex flex-column">
                                <img src={DrBilal} alt="" className="img-fluid mb-3 rounded-circle" />
                                <h4 className="text-secondary fw-bold" data-bs-toggle="modal" data-bs-target="#doctor_6">Dr. Bilal Ahmad Bhat</h4>
                                <p className="text-secondary">Aurjaan Healthcare Director</p>
                            </Column>
                        </Row>
                    </div>
                </div>
            </section> */}
            {/* Modal */}
            <div className="modal fade" id="doctor_1" tabIndex="-1" aria-labelledby="doctor_1Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-secondary border-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-secondary px-4">
                            <h3 className="text-center mb-4">Dr. Altaf Bukhari</h3>
                            <p className="lh-base">Ex. Professor and Head Deptt. Of Otorhinolaryngology Government Medical College Srinagar till 1992
                                Ex- Chief Consultant Ear, Nose & Throat diseases, SMHS Hospital and Associated Hospitals Srinagar Kashmir till 1992.
                                Ex-Chief Neuro-otology till 1992 at Speech and Hearing Centre S.M.H.S. Hospital Srinagar.
                                Ex-Professor of ENT SKIMS Medical College, Srinagar (1993).
                                Ex- Professor ENT, King Abdul Aziz University Hospital Riyadh, Saudi Arabia (1994-95) invited for establishing Post Graduate E.N.T Department.
                                Founder and President Voluntary Medicare Society J&K an NGO (Govt. Registered) since 1970.
                                Shafaqat Special School for mentally and physically Challenged, deaf, dumb and visually impaired.
                                Shafaqat Rehabilitation Centre for all spinal and other orthopedic Problems.</p>
                        </div>
                        <div className="modal-footer border-0 justify-content-center">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="doctor_2" tabIndex="-1" aria-labelledby="doctor_2Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-secondary border-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-secondary px-4">
                            <h3 className="text-center mb-4">Dr. Mir Maqbool</h3>
                            <p className="lh-base"></p>
                        </div>
                        <div className="modal-footer border-0 justify-content-center">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="doctor_3" tabIndex="-1" aria-labelledby="doctor_3Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-secondary border-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-secondary px-4 b">
                            <h3 className="text-center mb-4">Dr. Mushtaq Margoob</h3>
                            <p className="lh-base"></p>
                        </div>
                        <div className="modal-footer border-0 justify-content-center">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="doctor_4" tabIndex="-1" aria-labelledby="doctor_4Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-secondary border-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-secondary px-4 b">
                            <h3 className="text-center mb-4">Er. Mushtaq Ahmad</h3>
                            <p className="lh-base"></p>
                        </div>
                        <div className="modal-footer border-0 justify-content-center">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="doctor_5" tabIndex="-1" aria-labelledby="doctor_5Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-secondary border-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-secondary px-4 b">
                            <h3 className="text-center mb-4">Dr. Enayat Ali</h3>
                            <p className="lh-base"></p>
                        </div>
                        <div className="modal-footer border-0 justify-content-center">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="doctor_6" tabIndex="-1" aria-labelledby="doctor_6Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-secondary border-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-secondary px-4 b">
                            <h3 className="text-center mb-4">Dr. Bilal Ahmad Bhat</h3>
                            <p className="lh-base"></p>
                        </div>
                        <div className="modal-footer border-0 justify-content-center">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="doctor_7" tabIndex="-1" aria-labelledby="doctor_7Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-secondary border-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-secondary px-4 b">
                            <h3 className="text-center mb-4">Mr. Waqas Gani</h3>
                            <p className="lh-base"></p>
                        </div>
                        <div className="modal-footer border-0 justify-content-center">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}










export default WhoWeAre;