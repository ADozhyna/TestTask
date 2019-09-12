export const fetchClients = async () => {
	let clients = localStorage.getItem('clients')
	clients = JSON.parse(clients)
	return clients || []
}
