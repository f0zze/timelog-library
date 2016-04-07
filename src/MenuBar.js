'use strict';
import React from 'react';
import categories from './data/categoryies';

export default class MenuBar extends React.Component {
    render() {
        return (
            <div className="ui vertical menu">
                {this.createCategory()}
            </div>
        )
    }

    createSubCategory(subcategories) {
        return subcategories.map(sc=> {
            return <a className="item">{sc.name}</a>
        });
    }

    createCategory() {
        return categories.map(category=> {
            return (
                <div className="item">
                    <div className="header">{category.name}</div>
                    <div className="menu">
                        {this.createSubCategory(category.subcategories)}
                    </div>
                </div>
            )
        });
    }
}