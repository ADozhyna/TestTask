import React, { Component } from 'react'
import { Field, Form, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { saveClient } from './actions'

export class ClientForm extends Component {
	render() {
		const { dispatch } = this.props
		return (
			<Form>
				<Field
					name="firstName"
					component="input"
					type="text"
					placeholder="firstname"
				/>
				<Field
					name="lastName"
					component="input"
					type="text"
					placeholder="lastname"
				/>
				<Field
					name="birthday"
					component="input"
					type="date"
					placeholder="date of birth"
				/>

				<Field
					name="address"
					component="input"
					type="text"
					placeholder="address"
				/>
				<Field
					name="phone"
					component="input"
					type="tel"
					placeholder="phone number"
				/>
				<Field
					name="email"
					component="input"
					type="email"
					placeholder="email"
				/>

				<button
					type="button"
					label="submit"
					onClick={() => {
						dispatch(saveClient())
						return false
					}}
				>
					Submit
				</button>
			</Form>
		)
	}
}

export default connect()(
	reduxForm({
		form: 'client'
	})(ClientForm)
)
