import React from 'react';

export default class Tabs extends React.Component {
    getTabs() {
        console.log('asd');
        return this.props.tabs.map(tab=> {
            return (<a key={tab.name}>{tab.name}</a>);
        })
    }


    render() {
        return (
            <div className="ui top attached tabular menu">
                {this.getTabs()}
                <span>To</span>
                {this.props.children}
            </div>
        );
    }
}