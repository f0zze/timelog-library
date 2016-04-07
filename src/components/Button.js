import React from 'react';


export default class Button{

    render() {
        return (
            <button>
                {this.props.children}
            </button>
        )
    }
}


