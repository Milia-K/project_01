import React from "react";
import {
    Link
} from "react-router-dom";


export default function Navigation() {
    return (
            <div>
                <div className="nav">
                    <nav>
                        <ul>
                            <li className='li'>
                                <Link to="/home">Home</Link>
                            </li>
                            <li className='li'>
                                <Link to="/game">Game</Link>
                            </li>
                            <li className='li'>
                                <Link to="/myWords">My words</Link> 
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
    );
}
