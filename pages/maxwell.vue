<template>
    <div ref="maxwell" class="flex flex-column justify-content-center bg-blue-100 w-screen h-screen cursor-move">
        <div class="absolute flex flex-column gap-2 p-2">
            <nuxt-img
                v-for="(skybox, index) in skyboxes"
                :src="skybox.thumb"
                width="32"
                height="32"
                class="border-2 border-circle cursor-pointer"
                :class="selectedSkyboxIndex === index ? 'border-white' : 'border-transparent'"
                @click="changeSkybox(index)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import * as Three from 'three'

import Stats from 'three/examples/jsm/libs/stats.module.js'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const maxwell = ref<HTMLElement>()

let stats: Stats
let camera: Three.PerspectiveCamera
let scene: Three.Scene
let renderer: Three.WebGLRenderer
let controls: OrbitControls

type Skybox = {
    thumb: string
    right: string
    left: string
    top: string
    bottom: string
    front: string
    back: string
}

const skyboxes: Skybox[] = [
    {
        thumb: 'models/skyboxes/red/thumb.jpg',
        right: 'models/skyboxes/red/right.png',
        left: 'models/skyboxes/red/left.png',
        top: 'models/skyboxes/red/top.png',
        bottom: 'models/skyboxes/red/bottom.png',
        front: 'models/skyboxes/red/front.png',
        back: 'models/skyboxes/red/back.png'
    },
    {
        thumb: 'models/skyboxes/blue/thumb.jpg',
        right: 'models/skyboxes/blue/right.png',
        left: 'models/skyboxes/blue/left.png',
        top: 'models/skyboxes/blue/top.png',
        bottom: 'models/skyboxes/blue/bottom.png',
        front: 'models/skyboxes/blue/front.png',
        back: 'models/skyboxes/blue/back.png'
    },
    {
        thumb: 'models/skyboxes/green/thumb.jpg',
        right: 'models/skyboxes/green/right.png',
        left: 'models/skyboxes/green/left.png',
        top: 'models/skyboxes/green/top.png',
        bottom: 'models/skyboxes/green/bottom.png',
        front: 'models/skyboxes/green/front.png',
        back: 'models/skyboxes/green/back.png'
    }
]

const skyboxTextures: { index: number; texture: Three.CubeTexture }[] = []

const selectedSkyboxIndex = ref<number>(1)

onMounted(() => {
    const root = maxwell.value!
    new ResizeObserver((event) => {
        const { clientWidth: width, clientHeight: height } = event[0].target
        renderer.setSize(width, height, false)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
    }).observe(root)

    stats = Stats()
    root.appendChild(stats.dom)

    camera = new Three.PerspectiveCamera(70, root.clientWidth / root.clientHeight, 0.1, 100)
    camera.position.set(2, 1.5, 4)

    scene = new Three.Scene()

    new GLTFLoader().setPath('models/gltf/').load('Maxwell.glb', (gltf) => {
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

    setSkybox(selectedSkyboxIndex.value)

    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.minDistance = 1
    controls.maxDistance = 10
    controls.target.set(0, 1, 0)
    controls.update()

    animate()
})

function changeSkybox(index: number) {
    selectedSkyboxIndex.value = index
    setSkybox(index)
}

function setSkybox(index: number) {
    let skyboxTexture = skyboxTextures.find((skybox) => skybox.index === index)?.texture

    if (!skyboxTexture) {
        const skybox = skyboxes[index]
        skyboxTexture = new Three.CubeTextureLoader().load([
            skybox.right,
            skybox.left,
            skybox.top,
            skybox.bottom,
            skybox.front,
            skybox.back
        ])

        skyboxTextures.push({ index, texture: skyboxTexture })
    }

    scene.background = skyboxTexture
}

function animate() {
    requestAnimationFrame(animate)
    controls.update()
    stats.update()
    renderer.render(scene, camera)
}

useHead({
    title: 'Interactive Maxwell',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Interactive Maxwell model'
        }
    ]
})
</script>
