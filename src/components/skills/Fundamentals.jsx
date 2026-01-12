import './Skills.css';

export default function Fundamentals() {
    return (
        <div className="skills__content">
            <h3 className="skills__title">CS Fundamentals</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Data Structures</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Algorithms</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">System Design</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Operating Systems</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Networking</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Database Design</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}