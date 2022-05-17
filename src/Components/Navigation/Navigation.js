import React from 'react';
import "./Navigation.css";
import { BsGithub } from 'react-icons/bs';
import { SiIndeed } from 'react-icons/si';
import { FiTwitter } from 'react-icons/fi';

export default function Navigation() {
    return (
        <div className="navigation">
                <div className="topLeft">
                    <BsGithub size="30px" />
                    <SiIndeed size="30px" />
                    <FiTwitter size="30px" />
                </div>
                <div className="topCenter">

                </div>
                <div className="topRight">
                    <p>About</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
        </div>
    )
};