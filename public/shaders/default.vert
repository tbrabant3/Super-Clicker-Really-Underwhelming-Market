attribute vec2 a_velocity;
attribute vec2 a_sprite;
attribute float a_rot;
attribute float a_start_time;

uniform highp float u_time;
varying mediump float v_rot;
varying mediump vec2 v_sprite;

void main(){
	float a=u_time-a_start_time;
	
	gl_Position=vec4((a*a)*a_velocity,1.,1.);
	
	gl_PointSize=50.;
	
	v_rot=a_rot;
	v_sprite=a_sprite;
}