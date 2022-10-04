import React from 'react';
import "./trainers.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from "react-icons/ai";
import {trainers} from "../../data";
import Trainer from '../../components/Trainer';

const Trainers = () => {
    return (
        <>
            <Header title="Our Trainers" image={HeaderImage} >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa sequi ex reiciendis asperiores hic cupiditate recusandae reprehenderit non consequuntur, commodi unde voluptates delectus eveniet possimus quo nobis animi odit!
                </p>
            </Header>
            <section className="trainers">
                <div className="container trainers__container">
                    {
                        trainers.map(({image, id, name, job, socials}) => (
                            <Trainer key={id} image={image} name={name} job={job} socials={[
                                {icon: <AiFillInstagram/>, link: socials[0]},
                                {icon: <FaLinkedin/>, link: socials[1]},
                                {icon: <AiOutlineTwitter/>, link: socials[2]},
                                {icon: <FaFacebook/>, link: socials[3]},
                            ]} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Trainers