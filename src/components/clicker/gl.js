class GLManager {
	constructor(canvas) {
		this.vertexBuffer = [];
		this.buffers = [];
		this.canvas = canvas;
		this.ctx = canvas.getContext('webgl');
		this.resize();
		this.ctx.clearColor(0.1, 0.1, 0.1, 1);
		this.ctx.clear(this.ctx.COLOR_BUFFER_BIT);
	}
	loadShaders() {
		function load(path) {
			return fetch(path).then(response => {
				return response.text();
			});
		}

		let dV = load('shaders/default.vert');
		let dF = load('shaders/default.frag');
		const self = this;
		return Promise.all([dV, dF]).then(v => {
			self.default = self.buildProgram(v[0], v[1]);
			self.ctx.useProgram(self.default);
		});
	}
	resize() {
		//make the canvas size the same size it is in pixels
		this.canvas.width = Math.floor(
			this.canvas.clientWidth * window.devicePixelRatio
		);
		this.canvas.height = Math.floor(
			this.canvas.clientHeight * window.devicePixelRatio
		);
		//gl.canvas.width -= gl.canvas.width % 2 == 0 ? 0 : 1;
		//gl.canvas.height -= gl.canvas.height % 2 == 0 ? 0 : 1;
		this.ctx.viewport(0, 0, this.canvas.width, this.canvas.height);
	}
	buildShader(type, source) {
		let shader = this.ctx.createShader(type);

		this.ctx.shaderSource(shader, source);
		this.ctx.compileShader(shader);
		var success = this.ctx.getShaderParameter(shader, this.ctx.COMPILE_STATUS);
		if (success) {
			return shader;
		}

		console.log(this.ctx.getShaderInfoLog(shader));
		this.ctx.deleteShader(shader);
	}
	buildProgram(vertexShader, fragmentShader) {
		vertexShader = this.buildShader(this.ctx.VERTEX_SHADER, vertexShader);
		fragmentShader = this.buildShader(this.ctx.FRAGMENT_SHADER, fragmentShader);
		var program = this.ctx.createProgram();
		this.ctx.attachShader(program, vertexShader);
		this.ctx.attachShader(program, fragmentShader);
		this.ctx.linkProgram(program);
		var success = this.ctx.getProgramParameter(program, this.ctx.LINK_STATUS);
		if (success) {
			return program;
		}

		console.log(this.ctx.getProgramInfoLog(program));
		this.ctx.deleteProgram(program);
	}
	getAttribLocation(name) {
		this.ctx.getAttribLocation(this.default, name);
	}
}

export default GLManager;
