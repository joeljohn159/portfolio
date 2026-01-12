import { useState } from 'react'
import './Services.css'

export default function Services() {
    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index)
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className='section__subtitle'>What I Offer</span>

            <div className="services__container container grid">
                {/* Full-Stack Development */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-brackets-curly services__icon"></i>
                        <h3 className='services__title'>Full-Stack <br /> Development</h3>
                    </div>
                    <span className='services__button' onClick={() => toggleTab(1)}>
                        View more <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggle === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Full-Stack Development</h3>
                            <p className="services__modal-description">
                                2+ years of experience building scalable web applications with modern technologies.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Build responsive web applications using React.js and Next.js</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop backend services with Node.js, Express.js, and REST APIs</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Database design and optimization (MongoDB, MySQL, DynamoDB)</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Authentication, authorization, and security implementation</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Backend & API Development */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-server services__icon"></i>
                        <h3 className='services__title'>Backend & <br /> API Development</h3>
                    </div>
                    <span className='services__button' onClick={() => toggleTab(2)}>
                        View more <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggle === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Backend & API Development</h3>
                            <p className="services__modal-description">
                                Expert in building high-performance backend systems and scalable APIs.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">RESTful API design and implementation</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Real-time features with WebSockets and Redis</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Performance optimization and caching strategies</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Microservices architecture and system integration</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Cloud & DevOps */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-cloud-upload services__icon"></i>
                        <h3 className='services__title'>Cloud & <br /> DevOps</h3>
                    </div>
                    <span className='services__button' onClick={() => toggleTab(3)}>
                        View more <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggle === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Cloud & DevOps</h3>
                            <p className="services__modal-description">
                                AWS-certified with experience in cloud infrastructure and deployment automation.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">AWS cloud architecture (EC2, S3, Lambda, DynamoDB)</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">CI/CD pipeline setup and optimization</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Docker containerization and deployment</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Monitoring with Datadog and Splunk</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}