export const saveClient = async (id, data) => {
	let clients = localStorage.getItem('clients')
	clients = JSON.parse(clients)
	id = id || clients.length
	clients = clients.filter(client => client.id !== id)
	const newClient = {
		...data,
		id
	}
	clients = [...clients, newClient]
	localStorage.setItem('clients', JSON.stringify(clients))
	return newClient
}

export const deleteClient = async id => {
	let clients = localStorage.getItem('clients')
	clients = JSON.parse(clients)
	clients = clients.filter(client => client.id !== id)
	localStorage.setItem('clients', JSON.stringify(clients))
}
