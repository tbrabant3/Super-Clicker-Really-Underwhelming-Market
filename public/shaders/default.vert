attribute vec2 a_position;
attribute float a_rot;

uniform highp float u_time;
varying mediump float v_rot;

void main(){
	
	gl_Position=vec4(a_position,1.,1.);
	
	gl_PointSize=50.;
	
	v_rot=a_rot;
}