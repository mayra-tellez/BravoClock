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
					<h1>EBI OVERTIME </h1>
					
							<h3> EACH PLAYER - 1 ROUND MINIMUM / 3 ROUNDS MAXIMUM </h3>
								<p>The referee will award the choice of offense or defense to the player they determine to have been closest to achieving a submission during regulation. The player who attacks first will be considered the Red Player, and the player that defends first will be considered the Blue Player. </p>					
				</div>
				
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
					<button> Submission </button><br></br>
					{/* button records displayed time plus " -SUB" */}
					<button> Escape </button>
					{/* button records displayed time plus " -ESC" */}
				</div>
				
				<div id='Times'>
				<div class="row">
  				<div class="column">
					
    					<h2>Red Times</h2>
    					<p>0:00</p>
 				 </div>
  <div class="column">
    <h2>Blue Times</h2>
    <p>0:00</p>
  </div>
</div>
				</div>
		</div>
	);
}

export default Stopwatch;
