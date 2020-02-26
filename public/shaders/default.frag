
varying mediump float v_rot;

precision mediump float;
uniform highp float u_time;
uniform sampler2D u_tex;

void main(){
	float s=sin(v_rot);
	float c=cos(v_rot);
	
	vec2 tex_pos=gl_PointCoord;
	
	tex_pos=2.*tex_pos-1.;
	
	vec2 rotatedPos = vec2(tex_pos.x*c-tex_pos.y*s, tex_pos.y*c+tex_pos.x*s);
	
	rotatedPos=(rotatedPos+1.)/2.;
	vec4 color=texture2D(u_tex,rotatedPos);
	
	color*=color.a;
	gl_FragColor=color;
	
}