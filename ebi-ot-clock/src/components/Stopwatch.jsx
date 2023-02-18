import React, { useState, useEffect } from 'react';

function Stopwatch() {
	const [time, setTime] = useState(0);
	const [start, setStart] = useState(false);
	const [redEntries, setRedEntries] = useState([]);
	const [blueEntries, setBlueEntries] = useState([]);
	const [iteration, setIteration] = useState(1);

	const getTimeStr = (millis) => {
		let minutes = ('0' + Math.floor((millis / 60000) % 60)).slice(-2);
		let seconds = ('0' + Math.floor((millis / 1000) % 60)).slice(-2);
		let milliseconds = ('0' + ((millis / 10) % 1000)).slice(-2);
		return `${minutes}:${seconds}:${milliseconds}`;
	}

	const onEndIteration = (wasSub) => {
		const iterationSuffix = wasSub ? " -SUB" : " -ESC";
		const timeStr = getTimeStr(time);
		if (iteration % 2 === 0) {
			setBlueEntries(blueEntries.concat(timeStr + iterationSuffix))
		} else {
			setRedEntries(redEntries.concat(timeStr + iterationSuffix))
		}
		setIteration(iteration + 1)
		setTime(0);
	}

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
		<div id='Container'>
			<div id='Rules'>
				<div className="page-title-div">					
					<h1 id='page-title'>EBI OVERTIME</h1>
					<h1 id='outline-page-title'>EBI OVERTIME</h1>
				</div>
				<div className='instructions'>
					<h3 id='mobile-h3'> EACH PLAYER <br/> <span id='player-rounds-span'>1 ROUND MINIMUM <br/> 3 ROUNDS MAXIMUM </span></h3>
					<h3 id='desktop-h3'> EACH PLAYER - 1 ROUND MINIMUM / 3 ROUNDS MAXIMUM </h3>
					<p>The referee will award the choice of offense or defense to the player they determine to have been closest to achieving a submission during regulation. <br/>
					<br/>
					The player who attacks first will be considered the Red Player, and the player that defends first will be considered the Blue Player.</p>		
				</div>			
			</div>

			<div id='Watch-container'>
				<div id='Watch'>
					<div>
						<h2>TIMER</h2>
						<div>
							<span className="time">{minutes}:</span>
							<span className="time">{seconds}:</span>
							<span className="time">{milliseconds}</span>
						</div>
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
							<button id="reset" onClick={() => setTime(0)}>Reset</button>
							<br></br>
						</div>
					</div>

					<div>
						<button id="sub" onClick={onEndIteration.bind(this, true)}> Submission </button><br></br>
						{/* button records displayed time plus " -SUB" */}
						<button id="esc" onClick={onEndIteration.bind(this, false)}> Escape </button>
						{/* button records displayed time plus " -ESC" */}
					</div>
				</div>
			</div>

				
			<div id='Times'>
				<h4>Enter athlete names here. Times will display below.</h4>
				<div class="row">
  				<div class="column">
						{/* <h4>Enter athlete name - Times will display below</h4> */}
						<input id='red-input' type="text" maxlength="15" placeholder="Red Athlete"></input>
						{/* <h4>Times will display below</h4> */}
						{redEntries.map(entry => (<p className='time-entry'>{entry}</p>))}
 					</div>

  				<div class="column">
    				{/* <h4>Enter athlete name - Times will display below</h4> */}
						<input id='blue-input' type="text" maxlength="15" placeholder="Blue Athlete"></input>
						{/* <h4>Times will display below</h4> */}
						{blueEntries.map(entry => (<p className='time-entry'>{entry}</p>))}
  				</div>
				</div>
			</div>
		</div>
	);
}

export default Stopwatch;
