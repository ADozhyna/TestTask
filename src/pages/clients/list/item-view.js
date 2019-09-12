import React from 'react'

export const ClientListItem = props => {
	return (
		<li>
			{props.client.lastName}
			<button onClick={() => props.onDeleteClient(props.client)}>
				delete
			</button>
		</li>
	)
}
