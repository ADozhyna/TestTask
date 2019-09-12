import { createAction } from 'redux-actions'

export const requestClient = createAction('REQUEST_CLIENT')

export const receiveClient = createAction('RECEIVE_CLIENT')

export const deleteClient = createAction('DELETE_CLIENT')
