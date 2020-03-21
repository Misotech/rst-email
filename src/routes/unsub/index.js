import { h, Component } from 'preact';
import style from './style';




export default class Profile extends Component {
	state = {
		time: Date.now(),
		count: 10
	};

	

	// update the current time
	updateTime = () => {
		// this.setState({ time: Date.now() });
	};

	increment = () => {
		// this.setState({ count: this.state.count+1 });
	};

	unsub = () => {
		console.log('clicked unsub')
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		// this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		// clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ email },{params, state}) {
		console.log('params:', params)
		console.log('state:', state)
		console.log('email:', atob(email))

		var simple_mail = atob(email)

		return (
			<div class={style.unsub}>
				<h1>Email: {simple_mail}</h1>
				<p>Вы дейстительно хотите отписаться?</p>

				{/* <div>Current time: {new Date(time).toLocaleString()}</div> */}

				<p>
					<button onClick={this.unsub}>Unsubscribe</button>
					{' '}
				</p>
			</div>
		);
	}
}