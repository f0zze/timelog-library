import React from 'react';


export default class Color extends React.Component{
    render() {
        return (
            <div>
                <h1>
                    Color
                </h1>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}