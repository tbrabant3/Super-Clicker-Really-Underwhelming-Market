import gl from './gl.js';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import GLManager from './gl.js';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	coupons: state.CouponsReducer.coupons
});

const GLCanvas = ({ coupons }) => {
	const canvasRef = useRef(null);

	const attrBuffer = useMemo(() => new Float32Array(600), []);
	const velocities = useMemo(() => new Float32Array(400), []);
	let gl = null;

	const [counter, setCounter] = useState(0);
	useEffect(() => {
		spawn(2);
	}, [coupons]);
	useEffect(() => {
		gl = new GLManager(canvasRef.current);

		gl.loadShaders().then(() => {
			main();
		});
	}, []);

	const spawn = num => {
		for (let i = 0; i < num; i++) {
			let x = Math.random() - 0.5;
			let y = Math.random() - 0.5;

			let mag = Math.sqrt(x * x + y * y);
			x /= mag;
			y /= mag;

			attrBuffer[(counter + i) * 3] = 0;
			attrBuffer[(counter + i) * 3 + 1] = 0;
			attrBuffer[(counter + i) * 3 + 2] = Math.random();

			velocities[(counter + i) * 2] = x / 40;
			velocities[(counter + i) * 2 + 1] = y / 40;
		}
		setCounter((num + counter) % 200);
		console.log(counter);
	};

	function setGeometry(gl) {
		for (let i = 0; i < 600; i += 3) {
			attrBuffer[i] += velocities[i];
			attrBuffer[i + 1] += velocities[i + 1];
		}

		gl.bufferData(gl.ARRAY_BUFFER, attrBuffer, gl.STATIC_DRAW);
	}

	function main() {
		var program = gl.default;
		// look up where the vertex data needs to go.
		var positionLocation = gl.ctx.getAttribLocation(program, 'a_position');
		var rotLocation = gl.ctx.getAttribLocation(program, 'a_rot');

		var timeLocation = gl.ctx.getUniformLocation(program, 'u_time');
		const texLocation = gl.ctx.getUniformLocation(program, 'u_tex');
		// Create a buffer to put positions in
		var attrBuffer = gl.ctx.createBuffer();

		gl.ctx.enable(gl.ctx.BLEND);

		gl.ctx.bindBuffer(gl.ctx.ARRAY_BUFFER, attrBuffer);

		// Put geometry data into buffer
		setGeometry(gl.ctx);

		// Tell it to use our program (pair of shaders)
		gl.ctx.useProgram(program);

		const texture = loadTexture(gl.ctx, '/coupon.png');

		gl.ctx.activeTexture(gl.ctx.TEXTURE0);
		gl.ctx.bindTexture(gl.ctx.TEXTURE_2D, texture);
		gl.ctx.uniform1i(texLocation, 0);

		gl.ctx.enableVertexAttribArray(positionLocation);
		gl.ctx.enableVertexAttribArray(rotLocation);
		// Bind the position buffer.
		gl.ctx.bindBuffer(gl.ctx.ARRAY_BUFFER, attrBuffer);

		var size = 2; // 2 components per iteration
		var type = gl.ctx.FLOAT; // the data is 32bit floats
		var normalize = false; // don't normalize the data
		var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position

		gl.ctx.vertexAttribPointer(positionLocation, size, type, normalize, 12, 0);

		// Tell the attribute how to get data out of rot
		gl.ctx.vertexAttribPointer(rotLocation, 1, type, normalize, 12, 8);

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
	//https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
	function loadTexture(gl, url) {
		const texture = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, texture);

		// Because images have to be download over the internet
		// they might take a moment until they are ready.
		// Until then put a single pixel in the texture so we can
		// use it immediately. When the image has finished downloading
		// we'll update the texture with the contents of the image.
		const level = 0;
		const internalFormat = gl.RGBA;
		const width = 1;
		const height = 1;
		const border = 0;
		const srcFormat = gl.RGBA;
		const srcType = gl.UNSIGNED_BYTE;
		const pixel = new Uint8Array([0, 0, 255, 255]); // opaque blue
		gl.texImage2D(
			gl.TEXTURE_2D,
			level,
			internalFormat,
			width,
			height,
			border,
			srcFormat,
			srcType,
			pixel
		);

		const image = new Image();
		image.onload = function() {
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texImage2D(
				gl.TEXTURE_2D,
				level,
				internalFormat,
				srcFormat,
				srcType,
				image
			);

			// WebGL1 has different requirements for power of 2 images
			// vs non power of 2 images so check if the image is a
			// power of 2 in both dimensions.
			if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
				// Yes, it's a power of 2. Generate mips.
				gl.generateMipmap(gl.TEXTURE_2D);
			} else {
				// No, it's not a power of 2. Turn off mips and set
				// wrapping to clamp to edge
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			}
		};
		image.src = url;

		return texture;
	}

	function isPowerOf2(value) {
		return (value & (value - 1)) == 0;
	}

	return <canvas style={{ width: '100%', height: '100%' }} ref={canvasRef} />;
};

export default connect(mapStateToProps)(GLCanvas);
