attribute vec2 a_position;

uniform highp float u_time;
varying lowp vec4 vColor;

void main(){
	
	gl_Position=vec4(a_position,1.,1.);
	
	gl_PointSize=20.;
	
	vColor=vec4(1,1,1,1);
}