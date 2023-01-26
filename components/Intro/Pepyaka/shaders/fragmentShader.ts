const fragmentShader = `
uniform vec2 u_resolution;
uniform float u_time;

uniform vec3 u_sky;
uniform vec3 u_ground;

varying vec2 vUv;
varying vec3 vColor;
varying vec3 vNormal;


void main() {


    // Add Light at the top
    vec3 light = vec3(0.0);
    vec3 skyColor = u_sky;
    vec3 groundColor = u_ground;

    vec3 lightDirection = normalize(vec3(0.0, -1.0, -1.0));

    light += dot(lightDirection, vNormal);

    light = mix(skyColor, groundColor, dot(lightDirection, vNormal));

    gl_FragColor = vec4(vColor, 1.0);
    gl_FragColor = vec4(light * vColor, 1.0);
}

`

export default fragmentShader
