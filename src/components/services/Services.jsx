import { useState } from 'react'
import './Services.css'

export default function Services() {

const [toggle, setToggle] = useState(0);

const toggleTab = (index)=>{
    console.log(index)
    setToggle(index)
}
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className='section__subtitle'>What I Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services-icon" ></i>
                        <h3 className='services__title'>Product <br/> Designer</h3>
                    </div>

                    <span className='services__button' onClick={()=>toggleTab(1)}>View more <i className="uil uil-arrow-to-right services__button-icon"></i></span>

                    <div className={toggle === 1 ? "services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>

                            <h3 className="services__modal-title">Product Designer</h3>
                            <p className="services__modal-description">
                                Service with 1.3 years of experience. Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web Page Development using React.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create UI design interaction.</p>
                                </li>
                                {/* <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services-icon" ></i>
                        <h3 className='services__title'>UI <br/> Designer</h3>
                    </div>

                    <span className='services__button' onClick={()=>toggleTab(2)}>View more <i className="uil uil-arrow-to-right services__button-icon"></i></span>

                    <div className={toggle === 2 ? "services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>

                            <h3 className="services__modal-title">UI Designer</h3>
                            <p className="services__modal-description">
                                Service with 1.5 years of experience. Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Figma to develop web template.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Responsive Design.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">create LOGOs.</p>
                                </li>
                                {/* <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services-icon" ></i>
                        <h3 className='services__title'>Backend <br/> Designer</h3>
                    </div>

                    <span className='services__button' onClick={()=>toggleTab(3)}>View more <i className="uil uil-arrow-to-right services__button-icon"></i></span>

                    <div className={toggle === 3 ? "services__modal active-modal":"services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>

                            <h3 className="services__modal-title">Backend Designer</h3>
                            <p className="services__modal-description">
                                Service with 1.5 years of experience. Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">Backend services using Node.js & Express.js</i>
                                    <p className="services__modal-info"></p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon">create RESTful APIs</i>
                                    <p className="services__modal-info"></p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> Authentication & Authorization</i>
                                    <p className="services__modal-info">.</p>
                                </li>
                                {/* <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}