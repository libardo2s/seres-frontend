import {ADD_CURSO, ADD_ALL_CURSOS} from '../constant';

export function addCurso(payload) {
    return { type: ADD_CURSO, payload }
};

export function addCurso(payload) {
    return { type: ADD_ALL_CURSOS, payload }
};