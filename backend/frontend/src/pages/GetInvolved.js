import React from "react";
import Column from "../components/UI/Column";
import Row from "../components/UI/Row";
import partner_1 from '../assets/bkma.jpg';
import partner_2 from '../assets/bkme.png';
import fund_3 from '../assets/fund-3.png';
import fund_4 from '../assets/fund-4.png';
import fund_5 from '../assets/fund-5.png';
import colab from '../assets/colaboration.jpg';
import kid1 from "../assets/vmssh1.png";
import kid2 from "../assets/kid-1.jpg";
import fund_1 from '../assets/fund-1.png';
import fund_2 from '../assets/fund-2.png';
import './Getinvolved.css';

const GetInvolved = () => {
    return (
        <>
            <section className="bg-light">
                <div className="container py-5">
                    <Row>
                        <Column className="col-md-2">
                            <h1 className="fw-bold text-primary">Get Involved</h1>
                        </Column>
                        <Column className="col-md-10">
                            <p className="text-primary ps-md-5 ms-md-5 fs-4 fst-italic">“Verily! Allah will never change the condition of the people until they change it themselves (with state of Goodness)"</p>
                            <p className="text-primary fw-bold fs-sm text-end">{"{Al Quran 13:11}"}</p>
                        </Column>
                    </Row>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row mx-0 py-5">
                        <Column className="col-lg-6 d-flex align-self-stretch px-0 mb-lg-0 mb-4">
                            <img src={kid1} className="img-fluid w-100" alt="kid-img" />
                        </Column>
                        <Column className="col-lg-6 d-flex align-self-stretch text-white text-card-2 p-5">
                            <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                                <h2 className="fw-bold pt-lg-0 pt-4">YOU CAN HELP TO SAVE LIVES</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </Column>
                    </div>
                    <div className="row mx-0 pb-5">
                        <Column className="col-lg-6 order-lg-1 order-2 bg-secondary text-white">
                            <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                <h2 className="fw-bold pt-lg-0 pt-4">PARTERNER WITH US</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </Column>
                        <Column className="col-lg-6 order-lg-2 order-1 px-0 mb-lg-0 mb-4">
                            <img src={colab} className="img-fluid w-100 kids" alt="kid-img" />
                        </Column>
                    </div>
                </div>
            </section>
            <section className="bg-light py-5 mb-5">
                <div className="container text-center">
                    <h2 className="fw-bold py-3">Your ideas can help  #SAVELIVES</h2>
                    <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button className="rounded-pill btn shadow primary-btn py-3 px-5 fs-sm fw-bold mt-3"> Learn More</button>
                </div>
            </section>
            <section className="funds d-lg-flex d-none align-items-center">
                <div className="container">
                    <h1 className="text-primary">Funding Strategy</h1>
                    <div className="row mx-0 position-relative">
                        <div className="col-md-10 offset-md-1 px-0 position-relative">
                            <img src={fund_5} class="img-fluid w-100" alt="fund" />
                            <div className="card card-1 position-absolute border-0 shadow translate-middle">
                                <div className="card-body">
                                    <h4 className="fw-bold"> Zakat/Crowd funding</h4>
                                    <p className="text-secondary">We aim to create platform where people who wants to donate zakat for the right cause feel confident to donate. Online zakat funding platforms and other possibilities to be explored
                                    </p>
                                </div>
                            </div>
                            <div className="card card-2 top-0 translate-middle position-absolute border-0 shadow">
                                <div className="card-body">
                                    <h4 className="fw-bold">Equipment funding</h4>
                                    <p className="text-secondary">There are many companies and people who want to donate the equipment rather than money. VMSSH shall approach companies in India or overseas for that provisions
                                    </p>
                                </div>
                            </div>
                            <div className="card card-3 position-absolute border-0 shadow">
                                <div className="card-body">
                                    <h4 className="fw-bold">Member Funding</h4>
                                    <p className="text-secondary">VMSSH has currently more than 100 active members from different parts of world donating for different causes and successfully running the Kids Heart Program. List of donors attached. We aim at more than 400 members in next 2 years.
                                    </p>
                                </div>
                            </div>
                            <div className="shadow card card-4 border-0 position-absolute translate-middle">
                                <div className="card-body">
                                    <h4 className="fw-bold">Government Funding</h4>
                                    <p className="text-secondary">All insurance empanelment including Gold Card shall be done. All government healthcare schemes shall be applied and availed.
                                    </p>
                                </div>
                            </div>
                            <div className="shadow card card-5 border-0 position-absolute translate-middle top-50">
                                <div className="card-body">
                                    <h4 className="fw-bold"> Beneficiary  funding</h4>
                                    <p className="text-secondary">Patients who get treated in our facility will be enrolled in donation program.
                                    </p>
                                </div>
                            </div>
                            <div className="shadow card card-6 border-0 position-absolute">
                                <div className="card-body">
                                <h4 className="fw-bold"> Corporations</h4>
                                    <p className="text-secondary">Through corporate social responsibilitiesprogrammes, individual companies can make a vital contribution to this mission. Corporate donations of cash, product or services can help save lives of underprivileged kids, families, and community. In turn, corporations engage their employees, customers and other stakeholders in a vital, life-saving mission.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="partners">
              <div className="container">
                <h2 className="text-primary fw-bold">Charity Partners</h2>
                <Row className="align-items-stretch text-center">
                    <Column className="col-md-6 bg-danger text-white py-5 mb-lg-0 mb-4">
                        <h3 className="w-75 mx-auto mb-4">British Kashmiri Medical Association (BKMA)</h3>
                    <img width={200} className="img-fluid mb-4" src={partner_1} alt="logo"/>
                    <div>
                    <a href="https://bkma.net/"><button className="btn btn-primary rounded-pill px-4 py-2">Learn more</button></a>
                    </div>
                    </Column>
                    <Column className="col-md-6 bg-warning text-white py-5">
                    <h3 className="w-75 mx-auto mb-4">British Kashmiri Charity Foundation (BKCF)-tbc</h3>
                    <img width={200} className="img-fluid mb-4" src={partner_2} alt="logo"/>
                    <div>
                    <a href="https://www.gov.uk/government/organisations/charity-commission"><button className="btn btn-primary rounded-pill px-4 py-2">Learn more</button></a>
                    </div>
                    </Column>
                </Row>
              </div>
            </section>
            <section className="funding d-lg-none d-block">
                <div className="container py-5">
                    <Row>
                        <Column className="col-md-4 mb-5 d-flex align-self-stretch">
                            <div className="shadow card border-0 mx-2">
                                <div className="card-header p-0 bg-white">
                                    <img alt="fund" src={fund_3} className="img-fluid rounded-top w-100" />
                                </div>
                                <div className="card-body">
                                    <h4 className="fw-bold"> Zakat/Crowd funding</h4>
                                    <p className="text-secondary">We aim to create platform where people who wants to donate zakat for the right cause feel confident to donate. Online zakat funding platforms and other possibilities to be explored
                                    </p>
                                </div>
                            </div>
                        </Column>
                        <Column className="col-md-4 mb-5 d-flex align-self-stretch">
                            <div className="shadow card border-0 mx-2">
                                <div className="card-header p-0 bg-white">
                                    <img alt="fund" src={fund_1} className="img-fluid rounded-top w-100" />
                                </div>
                                <div className="card-body">
                                    <h4 className="fw-bold">Member Funding</h4>
                                    <p className="text-secondary">VMSSH has currently more than 100 active members from different parts of world donating for different causes and successfully running the Kids Heart Program. List of donors attached. We aim at more than 400 members in next 2 years.
                                    </p>
                                </div>
                            </div>
                        </Column>
                        <Column className="col-md-4 mb-5 d-flex align-self-stretch">
                            <div className="shadow card border-0 mx-2">
                                <div className="card-header p-0 bg-white">
                                    <img alt="fund" src={fund_2} className="img-fluid rounded-top w-100" />
                                </div>
                                <div className="card-body">
                                    <h4 className="fw-bold">Government Funding</h4>
                                    <p className="text-secondary">All insurance empanelment including Gold Card shall be done. All government healthcare schemes shall be applied and availed.
                                    </p>
                                </div>
                            </div>
                        </Column>
                        <Column className="col-md-4 mb-md-0 mb-5 d-flex align-self-stretch">
                            <div className="shadow card border-0 mx-2">
                                <div className="card-header p-0 bg-white">
                                    <img alt="fund" src={colab} className="img-fluid rounded-top w-100" />
                                </div>
                                <div className="card-body">
                                    <h4 className="fw-bold"> Corporations</h4>
                                    <p className="text-secondary">Through corporate social responsibilitiesprogrammes, individual companies can make a vital contribution to this mission. Corporate donations of cash, product or services can help save lives of underprivileged kids, families, and community. In turn, corporations engage their employees, customers and other stakeholders in a vital, life-saving mission.
                                    </p>
                                </div>
                            </div>
                        </Column>
                        <Column className="col-md-4 mb-md-0 mb-5 d-flex align-self-stretch">
                            <div className="shadow card border-0 mx-2">
                                <div className="card-header p-0 bg-white">
                                    <img alt="fund" src={fund_4} className="img-fluid rounded-top w-100" />
                                </div>
                                <div className="card-body">
                                    <h4 className="fw-bold">Equipment funding</h4>
                                    <p className="text-secondary">There are many companies and people who want to donate the equipment rather than money. VMSSH shall approach companies in India or overseas for that provisions
                                    </p>
                                </div>
                            </div>
                        </Column>
                        <Column className="col-md-4 mb-md-0 mb-5 d-flex align-self-stretch">
                            <div className="shadow card border-0 mx-2">
                                <div className="card-header p-0 bg-white">
                                    <img alt="fund" src={fund_5} className="img-fluid rounded-top w-100" />
                                </div>
                                <div className="card-body">
                                    <h4 className="fw-bold"> Beneficiary  funding</h4>
                                    <p className="text-secondary">Patients who get treated in our facility will be enrolled in donation program.
                                    </p>
                                </div>
                            </div>
                        </Column>
                    </Row>
                </div>
            </section>
        </>
    )
}



export default GetInvolved;