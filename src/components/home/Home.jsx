import {useEffect, useState} from 'react';
import './Home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';


export default function Home(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />

                    <div className={`home__img ${isVisible ? "visible" : "hidden"}`}></div>

                    <Data />
                </div>
                {/* <ScrollDown /> */}
            </div>
        </section>
    );
}
