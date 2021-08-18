<template>
  <div>
    <div class="header">
      header
    </div>
    <div class="main-wrap">
      <div class="side-bar">
        sider-bar
      </div>
      <div class="main">
        <router-view>
          <template #default="{Component, route}">
            <transition name="fade-transform" mode="out-in">
              <keep-alive v-if="isCache">
                <component :is="Component" :key="route.fullPath" />
              </keep-alive>
              <component :is="Component" v-else :key="route.fullPath" />
            </transition>
          </template>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isCache = ref(false)
</script>
