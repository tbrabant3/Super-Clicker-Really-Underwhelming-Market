import gl from './gl.js';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import GLManager from './gl.js';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	coupons: state.CouponsReducer.coupons
});

const BUFFER_SIZE = 900;
const GL_OBJECT_SIZE = 9;

const GLCanvas = ({ coupons }) => {
	const canvasRef = useRef(null);

	const attrBuffer = useMemo(
		() => new Float32Array(BUFFER_SIZE * GL_OBJECT_SIZE),
		[]
	);
	let gl = null;

	const [lastVal, setLastVal] = useState(coupons);
	const [bufferIndex, setBufferIndex] = useState(0);
	const [time, setTime] = useState(0);

	useEffect(() => {
		const diff = coupons - lastVal;
		if (diff > 0) spawn(diff, time);
		setLastVal(coupons);
	}, [coupons]);
	useEffect(() => {
		gl = new GLManager(canvasRef.current);

		gl.loadShaders().then(() => {
			main();
		});
	}, []);
	const COUPON_SPEED = 0.9;
	const spawn = num => {
		for (let i = 0; i < num; i++) {
			const angle = Math.random() * Math.PI * 2;
			const rotation = Math.random() * Math.PI * 2;
			const deviation = Math.random() * 0.5;

			const index = (bufferIndex + i) % BUFFER_SIZE;

			const spriteX = Math.floor(Math.random() * 3);
			const spriteY = Math.floor(Math.random() * 2);

			const r = Math.random();
			const g = Math.random();
			const b = Math.random();

			attrBuffer[index * GL_OBJECT_SIZE] =
				Math.sin(angle) * COUPON_SPEED + deviation;
			attrBuffer[index * GL_OBJECT_SIZE + 1] =
				Math.cos(angle) * COUPON_SPEED + deviation;
			attrBuffer[index * GL_OBJECT_SIZE + 2] = spriteX;
			attrBuffer[index * GL_OBJECT_SIZE + 3] = spriteY;
			attrBuffer[index * GL_OBJECT_SIZE + 4] = rotation;
			attrBuffer[index * GL_OBJECT_SIZE + 5] = time;
			attrBuffer[index * GL_OBJECT_SIZE + 6] = r;
			attrBuffer[index * GL_OBJECT_SIZE + 7] = g;
			attrBuffer[index * GL_OBJECT_SIZE + 7] = b;
		}

		setBufferIndex((bufferIndex + num) % BUFFER_SIZE);
	};

	function setGeometry(gl) {
		gl.bufferData(gl.ARRAY_BUFFER, attrBuffer, gl.STATIC_DRAW);
	}

	function main() {
		var program = gl.default;
		// look up where the vertex data needs to go.
		var velocityLocation = gl.ctx.getAttribLocation(program, 'a_velocity');
		var spriteLocation = gl.ctx.getAttribLocation(program, 'a_sprite');
		var rotLocation = gl.ctx.getAttribLocation(program, 'a_rot');
		var startTimeLocation = gl.ctx.getAttribLocation(program, 'a_start_time');
		var colorLocation = gl.ctx.getAttribLocation(program, 'a_color');

		var timeLocation = gl.ctx.getUniformLocation(program, 'u_time');
		const texLocation = gl.ctx.getUniformLocation(program, 'u_tex');
		// Create a buffer to put positions in
		var attrBuffer = gl.ctx.createBuffer();

		gl.ctx.enable(gl.ctx.BLEND);
		gl.ctx.blendFunc(gl.ctx.SRC_ALPHA, gl.ctx.ONE_MINUS_SRC_ALPHA);

		gl.ctx.bindBuffer(gl.ctx.ARRAY_BUFFER, attrBuffer);

		// Put geometry data into buffer
		setGeometry(gl.ctx);

		// Tell it to use our program (pair of shaders)
		gl.ctx.useProgram(program);

		const texture = loadTexture(gl.ctx, '/couponspritesheet.png');

		gl.ctx.activeTexture(gl.ctx.TEXTURE0);
		gl.ctx.bindTexture(gl.ctx.TEXTURE_2D, texture);
		gl.ctx.uniform1i(texLocation, 0);

		gl.ctx.enableVertexAttribArray(velocityLocation);
		gl.ctx.enableVertexAttribArray(spriteLocation);
		gl.ctx.enableVertexAttribArray(rotLocation);
		gl.ctx.enableVertexAttribArray(startTimeLocation);
		gl.ctx.enableVertexAttribArray(colorLocation);
		// Bind the position buffer.
		gl.ctx.bindBuffer(gl.ctx.ARRAY_BUFFER, attrBuffer);

		var type = gl.ctx.FLOAT; // the data is 32bit floats
		var normalize = false; // don't normalize the data
		var stride = GL_OBJECT_SIZE * 4;

		gl.ctx.vertexAttribPointer(velocityLocation, 2, type, normalize, stride, 0);
		gl.ctx.vertexAttribPointer(spriteLocation, 2, type, normalize, stride, 8);
		// Tell the attribute how to get data out of rot
		gl.ctx.vertexAttribPointer(rotLocation, 1, type, normalize, stride, 16);

		gl.ctx.vertexAttribPointer(
			startTimeLocation,
			1,
			type,
			normalize,
			stride,
			20
		);

		gl.ctx.vertexAttribPointer(colorLocation, 3, type, normalize, stride, 24);

		//randomizeVelocities();

		drawScene(0);
		gl.ctx.clearColor(0, 0, 0, 0);

		// Draw the scene.
		function drawScene(timeStamp) {
			gl.ctx.clear(gl.ctx.COLOR_BUFFER_BIT | gl.ctx.DEPTH_BUFFER_BIT);

			gl.resize();

			gl.ctx.uniform1f(timeLocation, timeStamp / 1000);
			setTime(timeStamp / 1000);

			setGeometry(gl.ctx);
			gl.ctx.drawArrays(gl.ctx.POINTS, 0, BUFFER_SIZE);

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
