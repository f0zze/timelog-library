import React from 'react';
import MenuBar from './MenuBar'

export default class TimelogLibrary extends React.Component {
    render() {
        return (
            <div className="full height">
                <MenuBar/>
                <div className="main ui container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
