import * as React from 'react';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = { msg: '', secretMsg: ''};
	}

	encryptMsg = (msg) => {
		return msg.split("").reverse().join("").split(" ").reverse().join(" ");
	}

	handleChange = (event) => {
		const msg = event.target.value;
		this.setState({
			msg,
			secretMsg: this.encryptMsg(msg)
		});
	}

	render() {
		return (
			<form>
				<div class="box form-field">
					<label> INPUT </label>
					<textarea
						rows="8"
						placeholder="Have a nice day, too! ;)"
						value={this.state.msg}
						onChange={this.handleChange}
					/>
				</div>
				<div class="box">
					<strong> OUTPUT </strong>
					<pre>
						{this.state.secretMsg}
					</pre>
				</div>
			</form>
		);
	}
}
