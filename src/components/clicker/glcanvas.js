import gl from './gl.js';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import GLManager from './gl.js';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	coupons: state.CouponsReducer.coupons
});

const GLCanvas = ({coupons}) => {
	const canvasRef = useRef(null);

	
	const buffer = useMemo(() => new Float32Array(400), []);
	const velocities = useMemo(() => new Float32Array(400), []);
	let gl = null;

	const [counter, setCounter] = useState(0);
	useEffect(() => {
		spawn(2);
	}, [coupons])
	useEffect(() => {
		gl = new GLManager(canvasRef.current);

		gl.loadShaders().then(() => {
			main();
		});
	}, [])
	
	const spawn = (num) => {
		for(let i = 0; i < num; i++) {
			let x = Math.random() - 0.5;
			let y = Math.random() - 0.5;
			
			let mag = Math.sqrt(x * x + y * y);
			x /= mag;
			y /= mag;

			buffer[(counter+num) * 2] = 0;
			buffer[(counter+num)*2 + 1] = 0;

			velocities[(counter+num) * 2] = x/40;
			velocities[(counter+num)*2 + 1] = y/40;
		}
		setCounter((num + counter) % 200);
		console.log(counter);
	}

	function setGeometry(gl) {
		for (let i = 0; i < 400; i += 2) {
		
			buffer[i] += velocities[i] ;
			buffer[i + 1] += velocities[i + 1];
		}

		gl.bufferData(gl.ARRAY_BUFFER, buffer, gl.STATIC_DRAW);
	}
	
	function main() {
		var program = gl.default;
		// look up where the vertex data needs to go.
		var positionLocation = gl.ctx.getAttribLocation(program, 'a_position');

		var timeLocation = gl.ctx.getUniformLocation(program, 'u_time');
		// Create a buffer to put positions in
		var positionBuffer = gl.ctx.createBuffer();

		gl.ctx.enable(gl.ctx.BLEND);

		gl.ctx.bindBuffer(gl.ctx.ARRAY_BUFFER, positionBuffer);

		// Put geometry data into buffer
		setGeometry(gl.ctx);

		// Tell it to use our program (pair of shaders)
		gl.ctx.useProgram(program);

		// Turn on the attribute
		gl.ctx.enableVertexAttribArray(positionLocation);

		// Bind the position buffer.
		gl.ctx.bindBuffer(gl.ctx.ARRAY_BUFFER, positionBuffer);

		// Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
		var size = 2; // 3 components per iteration
		var type = gl.ctx.FLOAT; // the data is 32bit floats
		var normalize = false; // don't normalize the data
		var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
		var offset = 0; // start at the beginning of the buffer
		gl.ctx.vertexAttribPointer(
			positionLocation,
			size,
			type,
			normalize,
			stride,
			offset
		);

		//randomizeVelocities();

		drawScene(0);
		gl.ctx.clearColor(0, 0, 0, 0);

		// Draw the scene.
		function drawScene(timeStamp) {
			gl.ctx.clear(gl.ctx.COLOR_BUFFER_BIT | gl.ctx.DEPTH_BUFFER_BIT);

			gl.resize();

			gl.ctx.uniform1f(timeLocation, timeStamp / 1000);
			setGeometry(gl.ctx);
			gl.ctx.drawArrays(gl.ctx.POINTS, 0, 200);

			requestAnimationFrame(drawScene);
		}
	}

	

	return <canvas style={{ width: '100%', height: '100%' }} ref={canvasRef} />;
};

export default connect(mapStateToProps)(GLCanvas);
