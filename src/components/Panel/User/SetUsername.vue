<template>
  <aside class="absolute w-screen h-screen inset-0 z-20">
    <div class="grid w-full h-full place-items-center">
      <form class="bg-white pt-3 py-5 px-6 shadow-[0_15px_100px_-15px_rgba(0,0,0,0.2)] rounded-xl flex flex-col items-center justify-center">
        <h1 class="text-main text-center font-bold text-4xl p-2 m-0.5">Wprowadź swój nick</h1>
        <input class="border border-background rounded-full px-2 py-1 w-[95%]" type="text" pattern="[a-z_0-9-]{3,24}" maxlength="24" minlength="3" placeholder="xXjanek_slayerXx123PL" required>
        <button @click.prevent="changeUsername()" class="w-fit text-2xl font-bold mt-4 px-8 py-1 text-white bg-main border border-main hover:scale-105 hover:text-main hover:bg-transparent transition rounded-full">Zatwierdź</button>
      </form>
    </div>
  </aside>
  <div class="bg-backdrop absolute inset-0 w-screen h-screen bg-[rgba(255,255,255,0.6)] backdrop-blur-sm z-10"></div>
</template>

<script>
import { setUsername } from '@/firebase/methods/post'

export default {
  name: "SetUsername",
  props: {
    email: String,
  },
  methods: {
    changeUsername(){
      setUsername(this.email, document.querySelector('input').value);
      this.$router.go();
    },
  },
}
</script>

<style scoped>

</style>