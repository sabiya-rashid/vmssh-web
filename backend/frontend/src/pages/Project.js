import React from "react";
import './project.css';
import Column from "../components/UI/Column";
import hospitalPic from '../assets/vmssh-beds.JPEG'
import { Link } from "react-router-dom";
import Row from "../components/UI/Row";
const data = [
    {
        project: "Building (2nd Floor and Trus) 10000 SFT",
        ratePerSqFeet: 1500,
        totalCost: 150,
    },
    {
        project: "Mechanical, Electrical & Plumbing",
        ratePerSqFeet: 1900,
        totalCost: 380,
    },
    {
        project: "Interior finishing & External development",
        ratePerSqFeet: 600,
        totalCost: 120,
    },
    {
        project: "Medical equipment",
        ratePerSqFeet: 2500,
        totalCost: 500,
    },
    {
        project: "Non-medical equipment & furniture",
        ratePerSqFeet: 250,
        totalCost: 50,
    },
    {
        project: "Cath Lab",
        ratePerSqFeet: "",
        totalCost: 200,
    },
];
const dataHead = [
    {
        phase: "BUA-Phase 1",
        budget: 20000
    },
    {
        phase: "BUA-Phase 2",
        budget: 20000
    }
]
const data2 = [
    {
        project: "Civil Works - Building cost",
        ratePerSqFeet: 2000,
        totalCost: 400,
    },
    {
        project: "Mechanical, Electrical & Plumbing",
        ratePerSqFeet: 1200,
        totalCost: 240,
    },
    {
        project: "Interior finishing & External development",
        ratePerSqFeet: 600,
        totalCost: 120,
    },
    {
        project: "Medical equipment",
        ratePerSqFeet: 2500,
        totalCost: 120,
    },
    {
        project: "Non-medical equipment & furniture",
        ratePerSqFeet: 250,
        totalCost: 50,
    },
];
const projectTimeHead = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,]
const activity = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
const design = ["green", "green", "green", "green", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
const tenders = ["", "green", "green", "green", "green", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
const work = ["", "", "", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "", "", "", "", "", ""];
const Engineer = ["", "", "", "", "", "", "", "", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "", "", ""];
const finishing = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "green", "green", "green", "green", "green", "green", "green", "green", "", ""];
const hospitalSetup = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "green", "green", "green", "green", "green", "green", "green"];

let dataOne
let dataTwo

const Project = () => {
    return (
        <>
            <section className='home container-xxl px-0 pb-5'>
                <div className='container'>
                    <Row className="position-relative">
                        <Column className="col-lg-9 order-1 mb-lg-0 mb-4">
                            <img src={hospitalPic} className="img-fluid w-100" alt="" />
                        </Column>
                        <Column className="col-lg-6 position-absolute end-0 text-white order-2 project-card">
                            <div className="bg-warning pe-3">
                                <h2 className="ps-3 fw-bold pt-4">Current Status of the hospital Project</h2>
                                <div className="col-text ps-md-5 mb-3">
                                    <ul>
                                        <li>Two storey hospital building with shell and core</li>
                                        <li>Approved permission for hospital by SMC</li>
                                        <li>Hospital construction resumption on 25th May 2022</li>
                                        <li>Vast land area with future possibility of expansion (46 kanals)</li>
                                        <li>Two strong organizations (VMS & JKHHF)</li>
                                        <li>AJ Healthcare Management company </li>
                                        <li>Strong clinical and non-clinical teams </li>
                                        <li>Dedicated donor base</li>
                                        <li>Stakeholder engagement</li>
                                        <li>Strong advisory board and BOG</li>
                                    </ul>
                                    <Link className="mt-4" to='/' ><button className="outline-primary rounded-pill fw-bold btn px-4">Learn More</button></Link>
                                </div>
                            </div>
                        </Column>
                    </Row>
                </div>

                <div className="container">
                    <Row className="position-relative">
                        <Column className="col-lg-9 offset-lg-3 order-2 mb-5 mb-lg-0  mt-lg-0 mt-4">
                            <img src={hospitalPic} className="img-fluid w-100 p-lg-4" alt="" />
                        </Column>
                        <Column className="col-lg-6 position-absolute start-0 order-1 project-card">
                            <div className="d-flex flex-column pe-3 bg-light py-5">
                                <h2 className="ps-3 fw-bold mb-4">Business development</h2>
                                <div className="text-secondary col-text ps-md-5 mb-3">
                                    <ul>
                                        <li>Partnership with top physicians in Kashmir</li>
                                        <li>Bring together local and overseas physicians</li>
                                        <li>Robust business processes based on clinical and process quality</li>
                                        <li>Strong financial and quality measurement system</li>
                                        <li>Activity based costing </li>
                                        <li>Underprivileged patients shall be funded by charity department</li>
                                        <li>Repeated and robust training and skills development programs </li>
                                        <li>Efficient and effective fundraising platform</li>
                                    </ul>
                                </div>
                            </div>
                        </Column>
                    </Row>
                    <Row className="position-relative">
                        <Column className="col-lg-9 order-lg-1 order-2 mb-5 mb-lg-0 mt-lg-0 mt-4">
                            <img src={hospitalPic} className="img-fluid w-100 p-lg-4" alt="" />
                        </Column>
                        <Column className="col-lg-6 order-lg-2 order-1 text-white position-absolute end-0 project-card">
                            <div className="d-flex flex-column pe-3 bg-danger py-5">
                                <h2 className="ps-3 fw-bold mb-4">Location Advantages</h2>
                                <div className="col-text ps-lg-5 mb-3">
                                    <ul>
                                        <li>Centrally located on highway near Bemina.</li>
                                        <li>Easy access to major hospitals for referrals</li>
                                        <li>Easy access from all districts</li>
                                        <li>Convenient location for staff and patients </li>
                                        <li>Non-congested area with enough parking spaces </li>
                                        <li>Expansion possible with available adjacent land</li>
                                    </ul>
                                </div>
                            </div>
                        </Column>
                    </Row>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2 className="text-center fw-bold mb-4">Project Time</h2>
                    <div className="table-responsive">
                        <table className="table table-bordered ">
                            <thead>
                                <tr>
                                    <th>Months</th>
                                    {projectTimeHead.map((month, i) => <th key={i}>{month}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Activity</th>
                                    {activity.map((item) => <td>{item}</td>)}
                                </tr>
                                <tr>
                                    <th>Architectural and MEP design</th>
                                    {design.map((item, i) => <td key={i} style={{ background: item }}></td>)}
                                </tr>
                                <tr>
                                    <th>Awards of tenders</th>
                                    {tenders.map((item, i) => <td key={i} style={{ background: item }}></td>)}
                                </tr>
                                <tr>
                                    <th>Civil work</th>
                                    {work.map((item, i) => <td key={i} style={{ background: item }}></td>)}
                                </tr>
                                <tr>
                                    <th>Electrical, Mechanical and Plumbing</th>
                                    {Engineer.map((item, i) => <td key={i} style={{ background: item }}></td>)}
                                </tr>
                                <tr>
                                    <th>Architectural finishing</th>
                                    {finishing.map((item, i) => <td key={i} style={{ background: item }}></td>)}
                                </tr>
                                <tr>
                                    <th>Hospital setup and operational readlines</th>
                                    {hospitalSetup.map((item, i) => <td key={i} style={{ background: item }}></td>)}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section>
                <div className="container py-5">
                    <h4 className="fw-bold pb-4 text-center">PROJECT CAPEX</h4>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr className="bg-warning">
                                    <th colSpan="3">Capital Budget</th>
                                </tr>
                                <tr>
                                    <th scope="col">Total built up area of project</th>
                                    <th scope="col">sq. ft. </th>
                                    <th scope="col">40,000</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col" colSpan="2">{dataHead[0].phase}</th>
                                    <td >{dataHead[0].budget}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <th scope="col">Rate per sq. ft. (in INR) </th>
                                    <th scope="col">Rate per sq. ft. (in INR) </th>
                                </tr>
                                {data.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.project}</td>
                                        <td>{data.ratePerSqFeet}</td>
                                        <td>{data.totalCost}</td>
                                    </tr>
                                ))}
                                <tr className="bg-warning">
                                    <th span="row" colSpan="2">Total</th>
                                    <td>
                                        {dataOne = data.reduce((data, total) => (
                                            data = data + total.totalCost
                                        ), 0)}

                                    </td>
                                </tr>
                                <tr>
                                    <th scope="col" colSpan="2">{dataHead[1].phase}</th>
                                    <td>{dataHead[1].budget}</td>
                                </tr>
                                {data2.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.project}</td>
                                        <td>{data.ratePerSqFeet}</td>
                                        <td>{data.totalCost}</td>
                                    </tr>
                                ))}
                                <tr className="bg-warning">
                                    <th scope="row" colSpan="2">Total </th>
                                    <td>
                                        {dataTwo = data2.reduce((data, total) => (
                                            data = data + total.totalCost
                                        ), 0)}
                                    </td>
                                </tr>
                                <tr className="bg-danger">
                                    <th scope="row" colSpan="2">Grand Total</th>
                                    <td>
                                        {dataOne + dataTwo}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section>
                <div className="container text-white pb-5">
                    <Row>
                        <Column className="col-lg-6 bg-danger d-flex align-self-stretch flex-column py-5 ps-3 mb-lg-0 mb-4">
                            <h4 className="fw-bold">Acute Identified GapsAddressed </h4>
                            <ul>
                                <li className="mb-2">Acute shortage of critical care beds and complex surgical and interventional tertiary care services </li>
                                <li className="mb-2">Estimated revenue loss to state &#62;Rs. 800 Cr/per year </li>
                                <li className="mb-2">Inadequate and sub standard hospital infrastructure</li>
                                <li className="mb-2">Lack of quality measurement systems, medical documentation</li>
                                <li className="mb-2">Lack of well-trained nursing & allied manpower </li>
                                <li className="mb-2">Lack of expertise in hospital management and leadership</li>
                            </ul>
                        </Column>
                        <Column className="col-lg-6 d-flex align-self-stretch flex-column py-5 ps-3 bg-primary mb-lg-0 mb-4">
                            <h4 className="fw-bold pb-0 pb-lg-3">Short, Mid and Long-Term Strategic Plans (Vision 2030)</h4>
                            <ul>
                                <li className="mb-2">Short-term Plan (2 years): Phase 1-Cardiac sciences and critical care service</li>
                                <li className="mb-2">Mid-term Plan (3-5 years): Phase 2 neurosciences, spine and orthopedic services</li>
                                <li className="mb-2">Long-term Plan (5-10 years): Primary care network all over J&K and adding other complex surgical and interventional services based on need analysis</li>
                            </ul>
                        </Column>
                    </Row>
                </div>
            </section>
        </>
    )
}



export default Project;