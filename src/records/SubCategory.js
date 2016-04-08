'use strict';

import { Record ,List} from 'immutable';

const values = {
    "name": 'String'
};

export default class SubCategory extends Record(values) {

    constructor(name) {
        super(
            {
                name
            }
        );
    }

    getName() {
        return this.get("name");
    }
}
