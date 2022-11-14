<template>
  <main class="w-full h-[80vh] grid place-items-center text-background">
    <h1 class="text-[2.3rem] font-bold text-main">Zalogowano pomyślnie!</h1>
    <p>{{ essa }}</p>
  </main>
</template>

<script>
export default {
  name: "PanelComponent",
  data(){
    return {
      essa: 'bruh',
    }
  },
  beforeMount() {
    console.log('Działa w chuj');
  }
}
</script>

<style scoped>
</style>