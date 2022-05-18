import React from 'react';
import "./Navigation.css";
import { BsGithub } from 'react-icons/bs';
import { SiIndeed } from 'react-icons/si';
import { FiTwitter } from 'react-icons/fi';
import { RiSearch2Line } from 'react-icons/ri';

export default function Navigation() {
    return (
        <div className="navigation">
                <div className="topLeft">
                    <BsGithub className="topIcons" />
                    <SiIndeed className="topIcons" />
                    <FiTwitter className="topIcons" />
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">HOME</li> 
                        <li className="topListItem">ABOUT</li> 
                        <li className="topListItem">WRITE</li> 
                        <li className="topListItem">CONTACT</li> 
                    </ul>
                </div>
                <div className="topRight">
                    <img className="topImg" src="https://www.jomalone.co.uk/media/export/cms/spp/tasing_notes/mobile/Jasmine_Sambac_Mobile.png" alt="Jasmine"></img>
                    <RiSearch2Line className="topSearchIcon" />
                </div>
        </div>
    )
};