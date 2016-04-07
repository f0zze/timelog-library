'use strict';

import React from 'react';
import MenuBar from './MenuBar'

export default class TimelogLibrary extends React.Component {
    render() {
        return (
            <div className="ui grid">
                <div className="two column row">
                    <div className="column">
                        <MenuBar/>
                    </div>
                    <div className="column">
                          <h1>Timelog</h1>
                    </div>
                </div>
            </div>
        )
    }
}
