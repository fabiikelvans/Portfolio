const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

uniform vec3 u_colorA;
uniform vec3 u_colorB;

varying vec2 vUv;
varying float vDisplacement;

varying vec3 vColor;


void main() {
  float distort = 2.0 * vDisplacement * u_intensity;
  
  vec3 color = mix(u_colorA, u_colorB, distort);

  // vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0);
  
  gl_FragColor = vec4(color ,1.0);
}

`

export default fragmentShader
