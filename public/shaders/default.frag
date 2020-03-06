
varying mediump float v_rot;
varying mediump vec2 v_sprite;
varying mediump vec3 v_color;

precision mediump float;
uniform highp float u_time;
uniform sampler2D u_tex;

const vec2 imgSize=vec2(3,2);
void main(){
	float s=sin(v_rot);
	float c=cos(v_rot);
	
	vec2 tex_pos=gl_PointCoord;
	
	tex_pos=2.*tex_pos-1.;
	
	vec2 rotatedPos=vec2(tex_pos.x*c-tex_pos.y*s,tex_pos.y*c+tex_pos.x*s);
	
	rotatedPos=(rotatedPos+1.)/2.;
	
	vec4 color=texture2D(u_tex,(rotatedPos+v_sprite)/imgSize);
	
	color*=vec4(v_color,1.);
	//color*=color.a;
	gl_FragColor=color;
	
}