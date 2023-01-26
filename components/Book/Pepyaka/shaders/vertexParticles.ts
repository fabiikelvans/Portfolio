const vertexShader = `
uniform float uTime;
uniform float uRadius;

varying vec2 vUv;
varying vec3 vColor;
uniform vec3 uColor;


void main() {
  float distanceFactor = pow(uRadius - distance(position, vec3(0.0)), 2.0);
  float size = distanceFactor * 2.5 + 3.0;
  
  vec3 p = position;
  
  p.y += 0.1*(sin(p.y*20.0 + uTime)*0.5 + 0.5);
  p.z += 0.05*(sin(p.y*20.0 + uTime)*0.5 + 0.5);
  // p.x += 0.05*(sin(p.x*20.0 + uTime)*0.5 + 0.5);

  vec4 modelPosition = modelMatrix * vec4(p, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

    vUv = uv;
     vColor = uColor;

  gl_Position = projectedPosition;
  

  gl_PointSize = size;
  // Size attenuation;
  gl_PointSize *= (1.0 / - viewPosition.z);
}

`

export default vertexShader
