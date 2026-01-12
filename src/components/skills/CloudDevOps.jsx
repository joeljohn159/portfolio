import './Skills.css';

export default function CloudDevOps() {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Cloud & DevOps</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">AWS</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Azure</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">CI/CD</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Datadog</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Splunk</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}