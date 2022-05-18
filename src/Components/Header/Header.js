import React from 'react';
import './Header.css';
import header from "./header.jpg";

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>https
            <img className="headerImg" src={header} alt="" />
        </div>
    );
} 