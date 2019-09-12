import React, { memo } from 'react'
import { ClientListItem } from './item-view'

export const ClientList = memo(({
	clients,
	onDeleteClient
}) => {
	return (
		<ul>
			{clients.map((client, i) => (
				<ClientListItem
					key={i}
					client={client}
					onDeleteClient={onDeleteClient}
				/>
			))}
		</ul>
	)
	
})
