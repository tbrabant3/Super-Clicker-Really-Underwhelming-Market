import gl from './gl.js';
import React, { useEffect, useRef } from 'react';
import GLManager from './gl.js';

// Fill the buffer

const GLCanvas = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const gl = new GLManager(canvas);
		console.log(canvas);
		const buffer = new Float32Array(400);
		const velocities = new Float32Array(400);
		gl.loadShaders().then(() => {
			main();
		});
		function randomizeVelocities() {
			for (let i = 0; i < 400; i += 2) {
				let v = Math.random();
				let x = Math.random() - 0.5;
				let y = Math.random();

				let mag = Math.sqrt(x * x + y * y);
				x /= mag;
				y /= mag;
				velocities[i] = (x / 50) * v;
				velocities[i + 1] = (y / 50) * v;
			}
		}
		function setGeometry(gl) {
			for (let i = 0; i < 400; i += 2) {
				buffer[i] += velocities[i];
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

			randomizeVelocities();

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
	}, []);

	return <canvas style={{ width: '100%', height: '100%' }} ref={canvasRef} />;
};

export default GLCanvas;
