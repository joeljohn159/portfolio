import { useState } from 'react';
import './Qualification.css'

export default function Qualification(){

    const [toggle, setToggle] = useState(1);

    const toggleTab = (index)=>{
        console.log(index)
        setToggle(index)
    }

    return (
        <section className='qualification section' id='portfolio'>
             <h2 className="section__title">Qualification</h2>
            <span className='section__subtitle'>My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={()=>toggleTab(1)} className={toggle===1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div onClick={()=>toggleTab(2)} className={toggle===2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggle===1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                         <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">MS Computer Science</h3>
                                <span className="qualification__subtitle">University of North Texas</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2024 - 2026
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B.Tech ECE</h3>
                                <span className="qualification__subtitle">Reva University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2018 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Higher secondary education - 12th</h3>
                                <span className="qualification__subtitle">CST Mundgod</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2016 - 2018
                                </div>
                            </div>

                            
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Secondary School - 10th</h3>
                                <span className="qualification__subtitle">CST Mundgod</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>2015 - 2016
                                </div>
                            </div>

                            
                        </div>
                    </div>




                    <div className={toggle===2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">DXC Technology - INDIA</h3>
                                <span className="qualification__subtitle">Analyst II Software Engineer</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>Dec 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}
