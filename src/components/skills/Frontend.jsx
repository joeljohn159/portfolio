import './Skills.css';


export default function Frontend(){
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">React.js</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">React Query</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        {/* <i className='bx bx-badge-check'></i> */}

                        <div>
                            <h3 className="skills__name"> &nbsp;  </h3>
                            <span className="skills__level"> &nbsp;  </span>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}