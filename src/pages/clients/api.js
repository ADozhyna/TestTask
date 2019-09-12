import * as clientApi from './details/api'
import * as clientsApi from './list/api'

export const api = {
    ...clientApi,
    ...clientsApi
}