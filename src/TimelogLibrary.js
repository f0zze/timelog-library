'use strict';

import React from 'react';
import MenuBar from './MenuBar'
import Button from './Button'

export default class TimelogLibrary extends React.Component {
    render() {
        return (
            <div className="ui grid">
                <div className="two column row">
                    <div className="four wide column">
                        <MenuBar/>
                    </div>
                    <div className="eight wide column">
                        <h1>Timelog</h1>
                    </div>
                </div>
            </div>
        )
    }
}
