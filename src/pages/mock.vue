<script setup lang="ts">
import { ref } from 'vue'
import { getMenuList } from '~/api/sys/menu'

const menuData = ref([])

// menuData.value = await getMenuList()

getMenuList().then((resp) => {
  console.log(resp)
  menuData.value = resp.data
}).catch((err) => {
  console.log(err)
})

</script>

<template>
  <div>
    <h2>mock</h2>
    <div>
      {{ menuData }}
    </div>
  </div>
</template>
