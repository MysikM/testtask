import React from 'react';

import bgImg from '../../assets/pexels-alexandr-podvalny-1227513.jpeg';

import './greeting.scss';
import Button from "../button/Button";

const Greeting = () => {
    return (
        <section className='greeting container' style={{backgroundImage: `url(${bgImg})`}}>
                <div className="greeting__wrapper">
                    <h1 className="greeting__title">
                        Test assignment for front-end developer
                    </h1>
                    <p className="greeting__body">
                        What defines a good front-end developer is one that
                        has skilled knowledge of HTML, CSS, JS with a vast
                        understanding of User design thinking as they'll be
                        building web interfaces with accessibility in mind.
                        They should also be excited to learn, as the world of
                        Front-End Development keeps evolving.
                    </p>
                    <Button className="greeting__btn">Sign up</Button>
                </div>
        </section>
    );
};

export default Greeting;