<template>
  <main class="h-[80vh] mb-[8rem] w-full select-none grid place-items-center">
    <section id="1" class="w-fit box-border p-[8%] pb-[2%] relative text-center">
      <h1 class="text-7xl text-main font-bold">Ups! Błąd 404.</h1>
      <p class="w-full text-xl text-background">Strona, której szukasz, nie istnieje!</p>
    </section>
  </main>
</template>

<script>
import fetch from '@/methods/test_get'

export default {
  name: "MainComponent",
  methods: {
    fetchData() {
      fetch((data)=>{
        console.log(data);
      });
    },
  },
  beforeMount() {
    this.fetchData();
  }
}
</script>

<style scoped>
</style>