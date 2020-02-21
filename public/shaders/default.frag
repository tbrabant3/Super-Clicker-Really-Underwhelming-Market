
varying lowp vec4 vColor;

precision mediump float;
uniform highp float u_time;

void main(){
	
	vec4 color=vColor;
	
	color*=color.a;
	gl_FragColor=color;
	
}