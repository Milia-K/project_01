import React, { Component } from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import CardContainer from "../Card/CardContainer";
import List from '../Card/List'
import MyWordsList from './MyWordsList';


export class Content extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/home" element={<List />} />
                    <Route path="/game" element={<CardContainer />} />
                    <Route path="/myWords" element={<MyWordsList/>} />
                </Routes>
            </div>
        )
    }
}

export default Content