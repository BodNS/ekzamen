import ACTION from '../actions/actionTypes';

const initialState = {
    updateEventList: 0,
  };

  export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.UPDATE_EVENTS_LIST: {
            return {
                updateEventList: updateEventList++,
            }
        };
    default:
        return state;
    } 
  }