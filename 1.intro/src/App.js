import logo from './logo.svg';
import './style.css';

let firstName = 'Stefan Marković';
let pcolor = 'yellow';

const time = new Date().getHours();

function App() {
	return (
		<div className={time >= 21 || time <= 7 ? 'night' : 'day'}>
			<img src={logo} alt="logo" />
			<p style={{ color: pcolor, backgroundColor: 'red' }}>
				Zdravo! Moje ime je {firstName}!
			</p>
			<p> Sada je {time} sati!</p>
		</div>
	);
}

export default App;
