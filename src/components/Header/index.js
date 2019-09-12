import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
	render() {
		return (
			<header>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="./clients">Clients list</Link>
						</li>
						<li>
							<Link to="./client-form">Add new client</Link>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}
