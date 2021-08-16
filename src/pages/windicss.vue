<script setup lang="ts">
import WindicssExampleBlock from '~/components/windicss-example-block/index.vue'

</script>

<template>
  <div>
    <h1>排版</h1>
    <WindicssExampleBlock>
      <template #title>
        Font Family
      </template>
      <template #body>
        <p class="font-sans">
          The quick brown fox jumps over the lazy dog
        </p>
        <p class="font-serif">
          The quick brown fox jumps over the lazy dog
        </p>
        <p class="font-mono">
          The quick brown fox jumps over the lazy dog
        </p>
      </template>
    </WindicssExampleBlock>
    <WindicssExampleBlock>
      <template #title>
        字体大小
      </template>
      <template #body>
        <p>
          font-size的单位为rem，rem根据html根元素的字体大小成倍数关系，现代浏览器的HTML根元素如未设置默认为16px，即1rem=16px
        </p>
        <p class="text-base">
          The quick brown fox jumps over the lazy dog
        </p>
        <p class="text-xs">
          The quick brown fox jumps over the lazy dog
        </p>
        <p class="text-sm">
          The quick brown fox jumps over the lazy dog
        </p>
      </template>
    </WindicssExampleBlock>
  </div>
</template>
