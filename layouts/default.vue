<template>
  <div class="app">
    <the-header/>
    <nuxt/>
    <transition name="test">
      <p>test</p>
    </transition>
  </div>
</template>

<script>
export default {
  components: {
    TheHeader: () => import('../components/TheHeader')
  }
}
</script>
