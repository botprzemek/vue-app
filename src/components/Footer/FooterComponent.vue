<template>
  <footer class="grid place-items-center absolute bottom-0 w-full bg-background text-white pt-4 select-none box-border overflow-hidden">
    <p class="text-main text-3xl font-bold">BHIVE.PL</p>
    <ul class="flex justify-center items-center mt-1">
      <LinksComponent></LinksComponent>
    </ul>
    <div class="bottom-0 hovered z-70 absolute transition transform-gpu bg-main w-[26%] h-10 translate-y-20"></div>
    <p class="mt-2 mb-3 z-80 relative hover:cursor-pointer" @mouseover="show(true)" @mouseout="show(false)">Wykonanie 2022 <a href="https://www.botprzemek.pl/">botprzemek.pl</a></p>
  </footer>
</template>

<script>
import LinksComponent from "@/components/Footer/LinksComponent";

export default {
  name: "FooterComponent",
  components: {
    LinksComponent,
  },
  methods: {
    show(bool){
      if (bool) {
        document.querySelector('.hovered').classList.remove('translate-y-20');
      }
      else document.querySelector('.hovered').classList.add('translate-y-20');
    },
  },
}
</script>

<style scoped>

</style>