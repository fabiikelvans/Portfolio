const fragmentShader = `
uniform float u_intensity;

varying vec3 vColor;
varying float vDisplacement;


void main() {
  gl_FragColor = vec4(vColor, 1.0);
}
`

export default fragmentShader
