<script setup lang="ts">

</script>

<template>
  <div>
    <h2>
      <slot name="title">
        标题
      </slot>
    </h2>
    <div>
      <slot name="body">
        body
      </slot>
    </div>
  </div>
</template>
