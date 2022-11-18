import React, { useState, useEffect } from 'react';

function Stopwatch() {
	const [time, setTime] = useState(0);
	const [start, setStart] = useState(false);
	

	useEffect(() => {
		let interval = null;
		if (start) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [start]);

	let minutes = ('0' + Math.floor((time / 60000) % 60)).slice(-2);
	let seconds = ('0' + Math.floor((time / 1000) % 60)).slice(-2);
	let milliseconds = ('0' + ((time / 10) % 1000)).slice(-2);

	return (
		<div>
			<div>
			<div id='Rules'>
					<h1>EBI OT </h1>
					
							<h3>1 ROUND MINIMUM / 3 ROUNDS MAXIMUM </h3>
							<h5>
							OFFENSIVE PLAYER DECIDES: </h5>
							<p>BACK CONTROL - seatbelt grip and two hooks </p>
							OR 
							<p>Spiderweb Armbar - single deep hook, other hand flat on mat </p>
							<p>WINNER IS CHOSEN BY</p>
							<h4>FASTEST SUBMISSION</h4>
							<h6>OR</h6>
							<h4>FASTEST ESCAPE TIME</h4>

					
				</div>
				<div id='Times'>
					<h6>Here will be inputs for names and a recording of the times</h6>
				</div>
				<h6>The player deemed by the referee to have been more aggressive during the match will attempt to submit first</h6>
				<h2>TIMER</h2>
				<span className="time">{minutes}:</span>
				<span className="time">{seconds}:</span>
				<span className="time">{milliseconds}</span>
			</div>
			<div className="btn-container">
				{!start ? (
					<div>
						<button id="start" onClick={() => setStart(true)}>
							Start
						</button>
					</div>
				) : (
					<div>
						<button id="stop" onClick={() => setStart(false)}>
							Stop
						</button>
					</div>
				)}
				<div>
					<button onClick={() => setTime(0)}>Reset</button>
					<br></br>
				</div>
				
				
			</div>
			<div>
					<button onClick={() => setTime(0)}>Save A</button>
				</div>
				<div>
					<button onClick={() => setTime(0)}>Save B</button>
				</div>
		</div>
	);
}

export default Stopwatch;