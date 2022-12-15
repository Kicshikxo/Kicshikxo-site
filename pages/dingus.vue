<template>
    <div ref="dingus" class="bg-blue-100 w-screen h-screen cursor-move" />
</template>

<script setup lang="ts">
import * as Three from 'three'

import Stats from 'three/examples/jsm/libs/stats.module.js'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const dingus = ref()

let stats: Stats
let camera: Three.PerspectiveCamera
let scene: Three.Scene
let renderer: Three.WebGLRenderer
let controls: OrbitControls

onMounted(() => {
    const root: HTMLElement = dingus.value
    new ResizeObserver((event) => {
        const { clientWidth: width, clientHeight: height } = event[0].target
        renderer.setSize(width, height, false)
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
    ).observe(root)

    stats = Stats()
    root.appendChild(stats.dom)

    camera = new Three.PerspectiveCamera(70, root.clientWidth / root.clientHeight, 0.1, 100)
    camera.position.set(2, 1.5, 4)

    scene = new Three.Scene()

    new GLTFLoader()
        .setPath('models/gltf/')
        .load('Dingus.glb', (gltf) => {
            scene.add(gltf.scene)
        })

    renderer = new Three.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(root.clientWidth, root.clientHeight)
    renderer.outputEncoding = Three.sRGBEncoding
    renderer.domElement.classList.add('w-full', 'h-full')
    root.appendChild(renderer.domElement)

    const environment = new RoomEnvironment()
    const pmremGenerator = new Three.PMREMGenerator(renderer)
    scene.environment = pmremGenerator.fromScene(environment).texture

    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.minDistance = 1
    controls.maxDistance = 10
    controls.target.set(0, 1, 0)
    controls.update()

    animate()
})

function animate() {
    requestAnimationFrame(animate)
    controls.update()
    stats.update()
    renderer.render(scene, camera)
}

useHead({
    title: 'Interactive Dingus',
    meta: [
        {
            hid: "description",
            name: "description",
            content: "Interactive Dingus model",
        },
    ],
})
</script>