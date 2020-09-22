import {ADD_CURSO, ADD_ALL_CURSOS} from '../constant';

const initialState = {
    cursos: []
};

function reducer(state = initialState, action) {
    if (action.type === ADD_CURSO) {
        state.cursos.push(action.payload);
    }else if (action.type === ADD_ALL_CURSOS)
        state.cursos = action.payload;
    else  
        return state;
};

export default reducer;