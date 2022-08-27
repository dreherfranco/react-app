import { CREATE, UPDATE, DELETE, READ, NO_DATA } from "../types";

export const createAction= (data) => ({type: CREATE, payload: data });
export const updateAction = (data) => ({type: UPDATE, payload: data});
export const deleteAction = (data) => ({type: DELETE, payload: data.id});
export const readAction = (data) => ({type: READ, payload: data});
export const noAction = () => ({type: NO_DATA})