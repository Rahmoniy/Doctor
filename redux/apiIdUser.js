const initialState = {
    id: ''
}

// Reducer funksiyasi
function apiIdUser(state = initialState, action) {
    switch (action.type) {
        case 'SET_ID':
            return {
                ...state,
                id: action.payload // action orqali olingan yangi ID
            };
        default:
            return state;
    }
}

export default apiIdUser;
