// src/components/Homepage.js
import React from 'react';
import '../assets/css/HomePage.css';

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <div className='title'>
                    <img
                        id='logo'
                        src={require("../assets/images/logo1.png")}
                        alt="VIIVI"
                    />
                </div>
                <div className='line'></div>
                <div className='tool-entrance'>
                    <div className='tool' id='engineering'>
                        <a href={require("./engineering.js")}>
                            <img
                                src={require("../assets/images/tool.png")}
                                alt="交通工程学"
                                className='tool-pic'
                            />
                            <span>交通工程学</span>
                        </a>
                    </div>
                    <div className='tool' id='control'>
                        <a href={require("./control.js")}>
                            <img
                                src={require("../assets/images/tool.png")}
                                alt="交通管理与控制"
                                className='tool-pic'
                            />
                            <span>交通管理与控制</span>
                        </a>
                    </div>
                    <div className='tool' id='operation'>
                        <a href={require("./operation.js")}>
                            <img
                                src={require("../assets/images/tool.png")}
                                alt="运筹学"
                                className='tool-pic'
                            />
                            <span>运筹学</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

function showTools() {
    
}

export default Homepage;

