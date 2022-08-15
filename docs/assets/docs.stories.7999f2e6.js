import"./jsx-runtime.2babc65c.js";import{c as e,A as u}from"./Props.a8fb6261.js";import"./iframe.4bbfe56c.js";import"./string.3588d1f0.js";import"./es.map.constructor.f08ace3f.js";import"./es.number.to-fixed.f7fe5804.js";function i(){return i=Object.assign?Object.assign.bind():function(l){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(l[t]=n[t])}return l},i.apply(this,arguments)}const d={},m="wrapper";function o({components:l,...a}){return e(m,i({},d,a,{components:l,mdxType:"MDXLayout"}),e("h1",{align:"center"},"DraggableResizableVue3"),e("p",null," ",e("a",{parentName:"p",href:"https://www.npmjs.com/package/draggable-resizable-vue3"},e("img",{parentName:"a",src:"https://img.shields.io/npm/v/draggable-resizable-vue3.svg?style=flat-square",alt:"Latest Version on NPM"})),`
`,e("a",{parentName:"p",href:"LICENSE.md"},e("img",{parentName:"a",src:"https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square",alt:"Software License"})),`
`,e("a",{parentName:"p",href:"https://www.npmjs.com/package/draggable-resizable-vue3"},e("img",{parentName:"a",src:"https://img.shields.io/npm/dt/draggable-resizable-vue3.svg?style=flat-square",alt:"npm"}))," "),e("p",null," Vue 3 component for draggable and resizable elements. "),e("h4",null,e("a",{parentName:"h4",href:"https://codesandbox.io/s/github/zavalen/draggable-resizable-vue3?file=/src/App.vue"},"Live playground (codesandbox).")),e("p",null," Originally this package is a fork of ",e("a",{parentName:"p",href:"https://github.com/mauricius/draggable-resizable-vue"},'"draggable-resizable-vue"')," that has been rewritten to Vue 3 Composition API . But it has new features."),e("hr",null),e("h2",null,"Table of Contents"),e("ul",null,e("li",{parentName:"ul"},e("a",{parentName:"li",href:"#features"},"Features")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"#install"},"Install")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"#usage"},"Usage"),e("ul",{parentName:"li"},e("li",{parentName:"ul"},e("a",{parentName:"li",href:"#props"},"Props")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"#events"},"Events")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"#styling"},"Styling")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"#slots"},"Slots")))),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"#contributing"},"Contributing")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"#license"},"License"))),e("hr",null),e("h3",null,"Features"),e("ul",null,e("li",{parentName:"ul"},"No dependencies"),e("li",{parentName:"ul"},"Use draggable, resizable or both"),e("li",{parentName:"ul"},"Define handles for resizing"),e("li",{parentName:"ul"},"Restrict size and movement to parent element"),e("li",{parentName:"ul"},"Snap element to custom grid"),e("li",{parentName:"ul"},"Restrict drag to vertical or horizontal axis"),e("li",{parentName:"ul"},"Maintain aspect ratio"),e("li",{parentName:"ul"},"Touch enabled"),e("li",{parentName:"ul"},"Use your own classes"),e("li",{parentName:"ul"},"Provide your own markup for handles")),e("p",null,"New features of this fork: "),e("ul",null,e("li",{parentName:"ul"},"Vue 3 (Composition API)."),e("li",{parentName:"ul"},"Using ",e("inlineCode",{parentName:"li"},"v-model")," for ",e("inlineCode",{parentName:"li"},"x"),", ",e("inlineCode",{parentName:"li"},"y"),", ",e("inlineCode",{parentName:"li"},"h"),", ",e("inlineCode",{parentName:"li"},"w")," and ",e("inlineCode",{parentName:"li"},"active"),"."),e("li",{parentName:"ul"},"Toggle active when hovering ",e("inlineCode",{parentName:"li"},"active-on-hover"),"."),e("li",{parentName:"ul"},"Using css selector for ",e("inlineCode",{parentName:"li"},"parent")," prop. "),e("li",{parentName:"ul"},"Showing parent grid using ",e("inlineCode",{parentName:"li"},"show-grid")," and ",e("inlineCode",{parentName:"li"},"grid-color"),"."),e("li",{parentName:"ul"},"Borders to resize using ",e("inlineCode",{parentName:"li"},'handlesType="borders"')),e("li",{parentName:"ul"},"A new approach for the styling using ",e("a",{parentName:"li",href:"#slots"},"slots")," or ",e("a",{parentName:"li",href:"#styling"},"custom styles")," (",e("inlineCode",{parentName:"li"},'handlesType="custom"'),"). Added prefix ",e("inlineCode",{parentName:"li"},"drv-")," for default class names to make them less common.")),e("hr",null),e("h2",null,"Install"),e("pre",null,e("code",{parentName:"pre",className:"language-bash"},`$ npm install --save draggable-resizable-vue3
`)),e("p",null,"Register the component globally:"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`// main.js
import { createApp } from 'vue'
import App from './App.vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const app = createApp(App)

app.component('DraggableResizableVue', DraggableResizableVue)

app.mount('#app')

`)),e("p",null,"or locally (composition API):"),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`// YourComponent.vue
<script setup>
import DraggableResizableVue from 'draggable-resizable-vue3'

<\/script>
`)),e("hr",null),e("h2",null,"Usage"),e("p",null,"No props usage:"),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<template>
    <draggable-resizable-vue>
       Draggable and resizable element
    </draggable-resizable-vue>
</template>

<script setup>
import DraggableResizableVue from 'draggable-resizable-vue3'

<\/script>
`)),e("p",null,"Usage with position and sizes props:"),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
    :min-width="100"
    :min-height="100"
    :max-width="300"
    :max-height="300"
  >
    Draggable and resizable element
  </draggable-resizable-vue>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const element = ref({
  x: 20,
  y: 20,
  with: 200,
  height: 200,
  isActive: true,
})
<\/script>

`)),e("p",null,"Usage with grid and z-index:"),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<template>
        <draggable-resizable-vue
          v-model:x="element.x"
          v-model:y="element.y"
          v-model:h="element.height"
          v-model:w="element.width"
          v-model:active="element.isActive"
          :z="element.zIndex"
          :grid=[20,20]
          :show-grid:true
        >
          Draggable and resizable element
        </draggable-resizable-vue>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const element = ref({
   x: 20,
   y: 20,
   zIndex: 10,
   width: 200,
   height: 200,
   isActive: true,
})
<\/script>
`)),e("hr",null),e("h3",null,"Props"),e("h4",null,"draggable"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Boolean"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"true")),e("p",null,"Defines it the component should be draggable or not."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :draggable="false">
`)),e("h4",null,"resizable"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Boolean"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"true")),e("p",null,"Defines it the component should be resizable or not."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :resizable="false">
`)),e("h4",null,"x"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Number"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"0")),e("p",null,"Define the initial x position of the element."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue v-model:x="x">

<script setup>
import { ref } from 'vue'

const x = ref(200)
`)),e("h4",null,"y"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Number"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"0")),e("p",null,"Define the initial y position of the element."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :y="0">
`)),e("h4",null,"z"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Number|String"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"auto")),e("p",null,"Define the zIndex of the element."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :z="999">
`)),e("h4",null,"w"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Number|String"),`
Required: `,e("inlineCode",{parentName:"p"},"false")),e("p",null,"Define the initial width of the element. It also supports ",e("inlineCode",{parentName:"p"},"auto"),", but when you start resizing the value will fallback to a number."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue v-model:w="width">

<script setup>
import { ref } from 'vue'

const width = ref(200)
`)),e("h4",null,"h"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Number|String"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"200")),e("p",null,"Define the initial height of the element. It also supports ",e("inlineCode",{parentName:"p"},"auto"),", but when you start resizing the value will fallback to a number."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue v-model:h="height">

<script setup>
import { ref } from 'vue'

const height = ref(200)
`)),e("h4",null,"minWidth"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Number"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"50")),e("p",null,"Define the minimal width of the element."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :min-width="50">
`)),e("h4",null,"minHeight"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Number"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"50")),e("p",null,"Define the minimal height of the element."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :min-height="50">
`)),e("h4",null,"maxWidth"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Number"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"null")),e("p",null,"Define the maximum width of the element."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :max-width="400">
`)),e("h4",null,"maxHeight"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Number"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"null")),e("p",null,"Define the maximum height of the element."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :max-height="50">
`)),e("h4",null,"active"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Boolean"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"false")),e("p",null,"Determines if the component should be active or not. The prop reacts to changes and also can be used with the ",e("inlineCode",{parentName:"p"},"sync")," ",e("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components.html#sync-Modifier"},"modifier")," to keep the state in sync with the parent. You can use along with the ",e("inlineCode",{parentName:"p"},"preventDeactivation")," prop in order to fully control the active behavior from outside the component."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue v-model:active="isActive">

<script setup>
import { ref } from 'vue'

const isActive = ref(false)
...
`)),e("h4",null,"activeOnHover"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Boolean"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"false")),e("p",null,"Toggle ",e("inlineCode",{parentName:"p"},"active")," while hovering."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :active-on-hover="true">
`)),e("h4",null,"preventDeactivation"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Boolean"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"false")),e("p",null,"Determines if the component should be deactivated when the user clicks/taps outside it."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :prevent-deactivation="true">
`)),e("h4",null,"handles"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Array"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']")),e("p",null,"Define the array of handles to restrict the element resizing:"),e("ul",null,e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"tl")," - Top left"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"tm")," - Top middle"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"tr")," - Top right"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"mr")," - Middle right"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"br")," - Bottom right"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"bm")," - Bottom middle"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"bl")," - Bottom left"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"ml")," - Middle left")),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :handles="['tm','bm','ml','mr']">
`)),e("h4",null,"handlesType"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"String"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"handles")),e("p",null,`The prop can be
`,e("inlineCode",{parentName:"p"},"handles"),", ",e("inlineCode",{parentName:"p"},"borders")," or ",e("inlineCode",{parentName:"p"},"custom"),". "),e("ul",null,e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"handles")," - handles are squares around the element. "),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"borders")," - resizable borders and corners of the element. If ",e("inlineCode",{parentName:"li"},"custom")),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"custom")," - no styles for handles. For using your own styles or classes."),e("li",{parentName:"ul"}),e("li",{parentName:"ul"},"New approach for styling component.")),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue handles-type="borders">
`)),e("h4",null,"handlesSize"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Number"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"10")),e("p",null,"If ",e("inlineCode",{parentName:"p"},"handlesType='handles'")," defines the squares sizes. if If ",e("inlineCode",{parentName:"p"},"handlesType='border'")," defines the borders sizes",e("inlineCode",{parentName:"p"},"borders")," or ",e("inlineCode",{parentName:"p"},"custom"),". "),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue handles-size="14">
`)),e("h4",null,"axis"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"String"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"both")),e("p",null,"Define the axis on which the element is draggable. Available values are ",e("inlineCode",{parentName:"p"},"x"),", ",e("inlineCode",{parentName:"p"},"y")," or ",e("inlineCode",{parentName:"p"},"both"),"."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue axis="x">
`)),e("h4",null,"grid"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Array"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"[1,1]")),e("p",null,"Define the grid on which the element is snapped."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :grid="[20,20]">
`)),e("h4",null,"showGrid"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Boolean|String"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"false")),e("p",null,"Works only if ",e("inlineCode",{parentName:"p"},':parent="true"')," or ",e("inlineCode",{parentName:"p"},'parent=".selector"'),". Adds grid to the parent element. Can be ",e("inlineCode",{parentName:"p"},"true"),", ",e("inlineCode",{parentName:"p"},"false"),", ",e("inlineCode",{parentName:"p"},"'x'"),", ",e("inlineCode",{parentName:"p"},"'y'"),", ",e("inlineCode",{parentName:"p"},"'both'"),". "),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :showGrid="true">
`)),e("h4",null,"gridColor"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"String"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"rgba(0, 0, 0, 0.1)")),e("p",null,"Color of the grid when ",e("inlineCode",{parentName:"p"},':showGrid="true"'),"."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :showGrid="true">
`)),e("h4",null,"parent"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Boolean|String"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"false")),e("p",null,"If it's ",e("inlineCode",{parentName:"p"},"true")," restricts the movement and the dimensions of the component to the parent. Also you can provide a selector of any parent element."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue parent=".parent">
`)),e("h4",null,"dragHandle"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"String"),`
Required: `,e("inlineCode",{parentName:"p"},"false")),e("p",null,"Defines the selector that should be used to drag the component."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue drag-handle=".drag">
`)),e("h4",null,"dragCancel"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"String"),`
Required: `,e("inlineCode",{parentName:"p"},"false")),e("p",null,"Defines a selector that should be used to prevent drag initialization."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue drag-cancel=".drag">
`)),e("h4",null,"lockAspectRatio"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Boolean"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"false")),e("p",null,"The ",e("inlineCode",{parentName:"p"},"lockAspectRatio")," property is used to lock aspect ratio. This property doesn't play well with ",e("inlineCode",{parentName:"p"},"grid"),", so make sure to use only one at a time."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :lock-aspect-ratio="true">
`)),e("h4",null,"scale"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Number|Array"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"1")),e("p",null,"The ",e("inlineCode",{parentName:"p"},"scale")," prop controls the scale property when the CSS 3 ",e("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale"},"scale transformation")," is applied to one of the parent elements. If not provided the default value is 1."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :scale="0.5">

<draggable-resizable-vue :scale="[0.5, 0.4]">
`)),e("h4",null,"disableUserSelect"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Boolean"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"true")),e("p",null,"By default, the component adds the style declaration ",e("inlineCode",{parentName:"p"},"'user-select:none'")," to itself to prevent text selection during drag. You can disable this behaviour by setting this prop to ",e("inlineCode",{parentName:"p"},"false"),"."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :disable-user-select="false">
`)),e("h4",null,"enableNativeDrag"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Boolean"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"false")),e("p",null,"By default, the browser's native drag and drop funcionality (usually used for images and some other elements) is disabled, as it may conflict with the one provided by the component. If you need, for whatever reason, to have this functionality back you can set this prop to ",e("inlineCode",{parentName:"p"},"true"),"."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :enable-native-drag="true">
`)),e("h4",null,"className"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"String"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"drv")),e("p",null,"Used to set the custom ",e("inlineCode",{parentName:"p"},"class")," of a draggable-resizable component."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue class-name="my-class">
`)),e("h4",null,"classNameDraggable"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"String"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"drv-draggable")),e("p",null,"Used to set the custom ",e("inlineCode",{parentName:"p"},"class")," of a draggable-resizable component when ",e("inlineCode",{parentName:"p"},"draggable")," is enable."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue class-name-draggable="my-draggable-class">
`)),e("h4",null,"classNameResizable"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"String"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"drv-resizable")),e("p",null,"Used to set the custom ",e("inlineCode",{parentName:"p"},"class")," of a draggable-resizable component when ",e("inlineCode",{parentName:"p"},"resizable")," is enable."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue class-name-resizable="my-resizable-class">
`)),e("h4",null,"classNameDragging"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"String"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"drv-dragging")),e("p",null,"Used to set the custom ",e("inlineCode",{parentName:"p"},"class")," of a draggable-resizable component when is dragging."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue class-name-dragging="my-dragging-class">
`)),e("h4",null,"classNameResizing"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"String"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"drv-resizing")),e("p",null,"Used to set the custom ",e("inlineCode",{parentName:"p"},"class")," of a draggable-resizable component when is resizing."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue class-name-resizing="my-resizing-class">
`)),e("h4",null,"classNameActive"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"String"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"drv-active")),e("p",null,"Used to set the custom ",e("inlineCode",{parentName:"p"},"class")," of a draggable-resizable component when is active."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue class-name-active="my-active-class">
`)),e("h4",null,"classNameHandle"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"String"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"drv-handle")),e("p",null,"Used to set the custom common ",e("inlineCode",{parentName:"p"},"class")," of each handle element. This way you can style each handle individually using the selector ",e("inlineCode",{parentName:"p"},"<your class>-<handle code>"),", where ",e("inlineCode",{parentName:"p"},"handle code")," identifies one of the handles provided by the ",e("inlineCode",{parentName:"p"},"handle")," prop."),e("p",null,"So for example, this component:"),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue class-name-handle="my-handle-class"></draggable-resizable-vue>
`)),e("p",null,"renders the following:"),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<div ...>
  <div class="my-handle-class my-handle-class-tl ..."></div>
  <div class="my-handle-class my-handle-class-tm ..."></div>
  <div class="my-handle-class my-handle-class-tr ..."></div>
  [...]
</div>
`)),e("h4",null,"onDragStart"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Function"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"null")),e("p",null,"Called when dragging starts (element is clicked or touched). If ",e("inlineCode",{parentName:"p"},"false")," is returned by any handler, the action will cancel. You can use this function to prevent bubbling of events."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :onDragStart="onDragStartCallback">
`)),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`function onDragStartCallback(ev){
   ...
   // return false; \u2014 for cancel
}
`)),e("h4",null,"onDrag"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Function"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"null")),e("p",null,"Called before the element is dragged. The function receives the next values of ",e("inlineCode",{parentName:"p"},"x")," and ",e("inlineCode",{parentName:"p"},"y"),". If ",e("inlineCode",{parentName:"p"},"false")," is returned by any handler, the action will cancel."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :onDrag="onDragCallback">
`)),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`function onDragStartCallback(x, y){
   ...
   // return false; \u2014 for cancel
}
`)),e("h4",null,"onResizeStart"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Function"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"null")),e("p",null,"Called when resizing starts (handle is clicked or touched). If ",e("inlineCode",{parentName:"p"},"false")," is returned by any handler, the action will cancel."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :onResizeStart="onResizeStartCallback">
`)),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`
function onResizeStartCallback(handle, ev){
   ...
   // return false; \u2014 for cancel
}
`)),e("h4",null,"onResize"),e("p",null,"Type: ",e("inlineCode",{parentName:"p"},"Function"),`
Required: `,e("inlineCode",{parentName:"p"},"false"),`
Default: `,e("inlineCode",{parentName:"p"},"null")),e("p",null,"Called before the element is resized. The function receives the handle and the next values of ",e("inlineCode",{parentName:"p"},"x"),", ",e("inlineCode",{parentName:"p"},"y"),", ",e("inlineCode",{parentName:"p"},"width")," and ",e("inlineCode",{parentName:"p"},"height"),". If ",e("inlineCode",{parentName:"p"},"false")," is returned by any handler, the action will cancel."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue :onResize="onResizeCallback">
`)),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`
function onResizeStartCallback(handle, x, y, width, height){
   ...
   // return false; \u2014 for cancel
}
`)),e("hr",null),e("h3",null,"Events"),e("h4",null,"activated"),e("p",null,"Parameters: ",e("inlineCode",{parentName:"p"},"-")),e("p",null,"Called whenever the component gets clicked, in order to show handles."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue @activated="onActivated">
`)),e("h4",null,"deactivated"),e("p",null,"Parameters: ",e("inlineCode",{parentName:"p"},"-")),e("p",null,"Called whenever the user clicks anywhere outside the component, in order to deactivate it."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue @deactivated="onDeactivated">
`)),e("h4",null,"resizing"),e("p",null,"Parameters:"),e("ul",null,e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"left")," the X position of the element"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"top")," the Y position of the element"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"width")," the width of the element"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"height")," the height of the element")),e("p",null,"Called whenever the component gets resized."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue @resizing="onResizing">
`)),e("h4",null,"resizestop"),e("p",null,"Parameters:"),e("ul",null,e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"left")," the X position of the element"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"top")," the Y position of the element"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"width")," the width of the element"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"height")," the height of the element")),e("p",null,"Called whenever the component stops getting resized."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue @resizestop="onResizstop">
`)),e("h4",null,"dragging"),e("p",null,"Parameters:"),e("ul",null,e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"left")," the X position of the element"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"top")," the Y position of the element")),e("p",null,"Called whenever the component gets dragged."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue @dragging="onDragging">
`)),e("h4",null,"dragstop"),e("p",null,"Parameters:"),e("ul",null,e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"left")," the X position of the element"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"top")," the Y position of the element")),e("p",null,"Called whenever the component stops getting dragged."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue @dragstop="onDragstop">
`)),e("hr",null),e("h3",null,"Styling"),e("p",null,"You can style the component using appropriate class names passed as props to the component. Moreover you can disable the default styles for the handles, using ",e("inlineCode",{parentName:"p"},'handles-type="custom"'),", but you should take care to define position and size for them. The default classes for handles are ",e("inlineCode",{parentName:"p"},"handle")," and ",e("inlineCode",{parentName:"p"},"handle-tl"),", ",e("inlineCode",{parentName:"p"},"handle-br")," and so on."),e("p",null,"Here is the templates you can use for custom styles: "),e("ul",null,e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://github.com/zavalen/draggable-resizable-vue3/blob/master/src/components/draggable-resizable-vue3/css/DraggableResizableVue3Handles.css"},e("inlineCode",{parentName:"a"},'handles-type="handles"')," - link"),"."),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://github.com/zavalen/draggable-resizable-vue3/blob/master/src/components/draggable-resizable-vue3/css/DraggableResizableVue3Borders.css"},e("inlineCode",{parentName:"a"},'handles-type="borders"')," - link"),".")),e("hr",null),e("h2",null,"Slots"),e("p",null,"The component also provides ",e("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-slots.vue#Named-Slots"},"named slots")," for each handle, so you can use your markup inside each one."),e("p",null,"Customizing all handles."),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`<draggable-resizable-vue>
   <template #handle>
   ...
   </template>
</draggable-resizable-vue>
`)),e("p",null,"Or customize specific handle:"),e("ul",null,e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"handle-tl")," - Top left"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"handle-tm")," - Top middle"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"handle-tr")," - Top right"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"handle-mr")," - Middle right"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"handle-br")," - Bottom right"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"handle-bm")," - Bottom middle"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"handle-bl")," - Bottom left"),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"handle-ml")," - Middle left")),e("pre",null,e("code",{parentName:"pre",className:"language-vue"},`
<draggable-resizable-vue>
   <template #handle-bl>
   ...
   </template>
</draggable-resizable-vue>
`)),e("hr",null),e("h2",null,"Contributing"),e("p",null,"Any contribution to the code or any part of the documentation and any idea and/or suggestion are very welcome."),e("pre",null,e("code",{parentName:"pre",className:"language-bash"},`# serve with hot reload at localhost:5173
npm run dev

# distribution build
npm run build

# build the storybook docs into gh-pages
npm run gh-pages:build

# run storybook at localhost:6006
npm run storybook
`)),e("hr",null),e("h2",null,"License"),e("p",null,"The MIT License (MIT). Please see ",e("a",{parentName:"p",href:"LICENSE"},"License File")," for more information."))}o.isMDXComponent=!0;function p(){return p=Object.assign?Object.assign.bind():function(l){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(l[t]=n[t])}return l},p.apply(this,arguments)}const g=l=>function(n){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",n)},h=g("Meta"),c={},N="wrapper";function s({components:l,...a}){return e(N,p({},c,a,{components:l,mdxType:"MDXLayout"}),e(h,{title:"Readme",mdxType:"Meta"}),e(o,{mdxType:"Readme"}))}s.isMDXComponent=!0;const b=()=>{throw new Error("Docs-only story")};b.parameters={docsOnly:!0};const r={title:"Readme",includeStories:["__page"]},f={};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:()=>e(u,{mdxStoryNameToKey:f,mdxComponentAnnotations:r},e(s,null))};const T=["__page"];export{T as __namedExportsOrder,b as __page,r as default};
//# sourceMappingURL=docs.stories.7999f2e6.js.map
