// src/components/Homepage.js
import React from 'react';
import { Image } from 'antd';
import '../assets/css/HomePage.css';

class Homepage extends React.Component{
    render(){
        return (
            <div>
                <img
                    id="engineering"
                    src={require("../assets/images/logo1.png")}
                    alt="交通工程学"
                    preview='false'
                />
            </div>
        )
    }
}

export default Homepage;

