export default function Social() {
    return (
        <div className="home__social">
            <a
                href="https://www.linkedin.com/in/joel-john-9b9348200/"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
            >
                <i className="uil uil-linkedin-alt"></i>
            </a>

            <a
                href="https://github.com/joeljohn159"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
            >
                <i className="uil uil-github-alt"></i>
            </a>

            <a
                href="mailto:joeljohn159@gmail.com?subject=Hello%20from%20Your%20Portfolio!&body=Hi%20Joel,%0D%0A%0D%0AI%20just%20visited%20your%20portfolio%20and%20wanted%20to%20reach%20out!%0D%0A%0D%0ABest,%0D%0A[Your%20Name]"
                className="home__social-icon"
                aria-label="Email"
            >
                <i className="uil uil-envelope"></i>
            </a>

            <a
                href="https://drive.google.com/file/d/1aSYFUSRfQGDpwlJ8M_WRh9QEOQZBton_/view?usp=sharing"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
            >
                <i className="uil uil-file-alt"></i>
            </a>
        </div>
    );
}