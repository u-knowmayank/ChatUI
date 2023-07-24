const initialState = {
    isExpanded: true,
};

const chatListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_EXPAND':
            return {
                ...state,
                isExpanded: !state.isExpanded,
            };
        default:
            return state;
    }
};

export default chatListReducer;
