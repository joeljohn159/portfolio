import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Joel</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://www.linkedin.com/in/joel-john-9b9348200/"
                        className="footer__social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                    >
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    <a
                        href="https://github.com/joeljohn159"
                        className="footer__social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                    >
                        <i className="bx bxl-github"></i>
                    </a>

                    <a
                        href="mailto:joeljohn159@gmail.com?subject=Hello%20from%20Your%20Portfolio!&body=Hi%20Joel,%0D%0A%0D%0AI%20just%20visited%20your%20portfolio%20and%20wanted%20to%20reach%20out!%0D%0A%0D%0ABest,%0D%0A[Your%20Name]"
                        className="footer__social-link"
                        aria-label="Email"
                    >
                        <i className="bx bx-envelope"></i>
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1aSYFUSRfQGDpwlJ8M_WRh9QEOQZBton_/view?usp=sharing"
                        className="footer__social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Resume"
                    >
                        <i className="bx bx-file"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; 2026 Joel John. All rights reserved</span>
            </div>
        </footer>
    )
}