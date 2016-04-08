'use strict';

export const COLOR_CHANGE = 'COLOR_CHANG';

export const changeColor = (color) => {
    return {
        type: COLOR_CHANGE,
        payload: {
            color
        }
    }
};