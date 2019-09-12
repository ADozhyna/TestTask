import clientLogic from './details/logic'
import clientsLogic from './list/logic'
import clientsFormLogic from './form/logic'

export const logic = [...clientLogic, ...clientsLogic, ...clientsFormLogic]
