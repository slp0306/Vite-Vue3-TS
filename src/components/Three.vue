<template>
  <canvas ref="threeRef" width="1200" height="900"></canvas>
</template>

<script lang="ts" setup>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AxesHelper,
  GridHelper,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';
// import { ref, onMounted } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const threeRef = ref();
onMounted(() => {
  //获取dom
  const dom: HTMLCanvasElement = threeRef.value;
  if (dom) {
    //场景
    const scene = new Scene();
    //相机
    const camera = new PerspectiveCamera(45, 1200 / 900, 0.1, 10);
    //设置相机坐标
    camera.position.set(2, 2, 4);
    //控制器
    const controls = new OrbitControls(camera, dom);
    //渲染器
    const renderer = new WebGLRenderer({
      canvas: dom,
      alpha: true, //是否背景可以透明
      antialias: true, //抗拒齿
    });
    //设置画布大小
    renderer.setSize(1200, 900);
    //添加场景辅助
    //添加坐标系
    scene.add(new AxesHelper(5));
    //添加网格
    scene.add(new GridHelper(2, 10));

    //接下来 创建几何体
    //添加几何体
    //创建立方体
    //new BoxGeometry(width,height ,depth ,widthSegments,heightSegments   )
    //@param width — — Width of the sides on the X axis.
    //@param height — — Height of the sides on the Y axis.
    //@param depth — — Depth of the sides on the Z axis.
    //@param widthSegments — — Number of segmented faces along the width of the sides.
    //@param heightSegments — — Number of segmented faces along the height of the sides.
    const geometry = new BoxGeometry(0.5, 0.5, 0.5);
    //创建材质
    const material = new MeshBasicMaterial();
    //创建mesh
    const mesh = new Mesh(geometry, material);
    mesh.position.set(0, 1, 0);
    //将mesh添加到场景中
    scene.add(mesh);
    //创建渲染函数
    const render = () => {
      //内置 定时器
      requestAnimationFrame(render);
      //将场景和相机添加到渲染器中执行 一般60次/s
      renderer.render(scene, camera);
    };
    render();
  }
});
</script>

<style lang="scss" scoped></style>
