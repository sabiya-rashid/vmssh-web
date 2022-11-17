import React from "react";

import './Home.css';
import img_2 from '../assets/vmssh-child.JPEG';
import Column from "../components/UI/Column";
import Banner from "../components/homeBanner/Banner";
import Donate from '../components/Donate';
import Row from "../components/UI/Row";

const Home = (props) => {
    return (
        <>
            <Banner />
            <section className='home container-xxl px-0 pb-5'>
                <div className='container py-3 px-md-5'>
                    <Row >
                        <Column className="col-md-12">
                            <div className="col-text mb-3">
                                <p className="fs-5 my-4">In the last few months, 85 children from Kashmir with serious heart diseases have been saved by getting their successful heart surgeries done outside Kashmir with wonderful results and almost zero mortality rate.</p>
                                <p className="fs-5 my-4">Whether you decide to make a one-off donation, or set up a monthly gift payment plan, you can mpact & save the lives of these kids, families, and community forever starting today. Your Every contribution and our management & expertise at the right time can be the difference between life and death.</p>
                                {/* <Link className="mt-4" to='/' ><button className="outline-primary rounded-pill fw-bold btn px-4">Learn More</button></Link> */}
                            </div>
                        </Column>
                    </Row>
                    <Row>
                        <Column className="col-md-12">
                            <div className="d-flex flex-column">
                                <h1 className="fw-bold mb-4 h2-text">Know where your donation goes?</h1>
                                <p className="fs-5 col-text">The [name of the volunteer bodies involved] are working on a construction project for a super speciality hospital in Kashmir which is in full swing. All related cardiac teams are on standby and ready to join as soon as the setup is ready, collaboration with high-end tertiary hospitals outside Jammu and Kashmir is in place to train our staff before cardiac services commence. Our groundwork continues to benefit our young ones on a daily basis through the “Kids Heart Surgery Program” saving lives of our future generations.</p>
                            </div>
                        </Column>
                    </Row>
                </div>

                <div className="container">
                    <Row className="position-relative">
                        <Column className="col-lg-9 order-1 px-0 mb-5 mb-lg-0">
                            <div className="position-relative h-50">
                                <img src={img_2} className="img-fluid w-100 home-kids" alt="" />
                                <div className="text-white bg-grad d-flex flex-column justify-content-center w-100 ps-5 position-absolute top-0 right-0 left-0 bottom-0">
                                    <h2 className="fw-bold mb-4">HELP SAVE KIDS NOW</h2>
                                    <p className="pb-3 pt-2 w-75">VMSSH relies entirely on you for voluntary contributions, so every donation big or small counts.</p>
                                    <Donate />
                                </div>
                            </div>
                        </Column>
                        <div className="col-lg-6 order-2 text-card position-absolute end-0 py-5 px-3 shadow-lg">
                            <div className="d-flex flex-column">
                                <h4 className="fw-bold mb-4 text-white">Together we can save a child, a family, and a community at large</h4>
                                <div className="text-white col-text mb-3">
                                    <p className="fs-sm">7 out of 10 children with heart diseases in Kashmir die either because of lack of access to appropriate healthcare facilities or they are under-privileged and unable to pay for such costly and complex surgeries. VMSSH is working  on the frontline to offer hope and healing to these kids by sending them to best tertiary care facilities outside Kashmir and now they have taken the initiative to build a hospital to treat them in Kashmir itself, saving travel cost and more importantly, the time which is usually of essence in such critical cases.</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </section>
            <section>
                <div className="container pb-5">
                    <h2 className="fw-bold mb-4 ps-2">Testimonial videos</h2>
                    <div className="row mx-0">
                        <div className="col-md-4 mb-md-0 mb-4">
                            <video className="img-fluid w-100" height="300" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-4">
                            <video className="img-fluid w-100" height="400" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-4">
                            <video className="img-fluid w-100" height="400" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;