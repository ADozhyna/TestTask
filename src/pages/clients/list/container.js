import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux' //хуки
import { ClientList } from './view' //подписка на вью
import { getClients } from './selectors' //данные от сервера
import { deleteClient } from '../details/actions' // экшн1
import { requestClients } from './actions' //экшн2

const useCleints = () => {
	const clients = useSelector(getClients) //извлекает данные из хранилища
	const dispatch = useDispatch()
	debugger
	useEffect(() => {
		debugger
		dispatch(requestClients())
	}, [])

	const onDeleteClient = useCallback(
		client => dispatch(deleteClient(client)),
		[dispatch]
	)

	return {
		clients,
		onDeleteClient
	}
}

export const Clients = () => {
	debugger
	const { clients, onDeleteClient } = useCleints()

	return <ClientList clients={clients} onDeleteClient={onDeleteClient} />
}
