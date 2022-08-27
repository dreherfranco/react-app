import { CREATE, UPDATE, DELETE, READ, NO_DATA } from "../types";
import { db } from "../api/db";

const initialState = db.santos;

export default function crudReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE:
            return ;
        case UPDATE:
            return ;
        case DELETE:
            return ;
        case READ:
            return ;
        case NO_DATA:
            return initialState;
        default:
            return state;
    }
}