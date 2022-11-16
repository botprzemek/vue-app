<template>
  <main class="h-[80vh] mb-[8rem] w-full select-none grid place-items-center">
    <section id="1" class="w-fit box-border p-[8%] pb-[2%] relative text-center">
      <h1 class="text-7xl text-main font-bold">Ups! Błąd 404.</h1>
      <p class="w-full text-xl text-background">Strona, której szukasz, nie istnieje!</p>
    </section>
  </main>
</template>

<script>
export default {
  name: "MainComponent",
  methods: {
    wait(id) {
      document.getElementById(id).scrollIntoView({block: "center"});
    },
  },
}
</script>

<style scoped>
</style>