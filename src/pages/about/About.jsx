import React from 'react';
import "./about.css";
import Header from '../../components/Header';
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
    return (
        <>
            <Header title="About Us" image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Doloribus animi inventore vel totam vitae dolorem saepe 
                similique voluptatem nobis sapiente?
            </Header>

            <section className="about__story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={StoryImage} alt="Our Story Pic" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        <p>
                            Lorem ipsum dolor sit Reprehenderit esse quam obcaecati, non maiores similique recusandae ipsam corporis inventore in at sapiente expedita dicta repellendus accusantium laborum, architecto vero illo.
                        </p>
                        <p>
                            Lorem ipsum dolor sit Necessitatibus alias ratione cum deserunt tempore quaerat maiores tempora aspernatur officia dolor.
                        </p>
                        <p>
                            adipisicing elit. Excepturi, magni. Similique maxime deleniti quia et. Voluptatem dolorum nam amet cumque quo, laborum ex libero molestias rem tempora! Ducimus, consequuntur asperiores.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about__vision">
                <div className="container about__vision-container">
                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus alias ratione cum deserunt tempore quaerat maiores tempora aspernatur officia dolor. Accusantium minima nemo quod doloremque odio repellat suscipit earum ratione.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, magni. Similique maxime deleniti quia et. Voluptatem dolorum nam amet cumque quo, laborum ex libero molestias rem tempora! Ducimus, consequuntur asperiores.
                        </p>
                    </div>
                    <div className="about__section-image">
                        <img src={VisionImage} alt="Our Story Pic" />
                    </div>
                </div>
            </section>

            <section className="about__mission">
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={MissionImage} alt="Our Mission Pic" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>
                            Reprehenderit esse quam obcaecati, non maiores similique recusandae ipsam corporis inventore in at sapiente expedita dicta repellendus accusantium laborum, architecto vero illo.
                        </p>
                        <p>
                            tempora aspernatur officia dolor. Accusantium minima nemo quod doloremque odio repellat suscipit earum ratione.
                        </p>
                        <p>
                            Voluptatem dolorum nam amet cumque quo, laborum ex libero molestias rem tempora! Ducimus, consequuntur asperiores.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About