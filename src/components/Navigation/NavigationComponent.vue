<template>
  <nav class="z-50 fixed w-full h-[8%] grid items-center box-border select-none bg-white shadow-[0_15px_10px_-15px_rgba(0,0,0,0.04)] px-[8%]">
    <ul class="grid grid-cols-[1fr_repeat(6,_auto)] w-full relative items-center text-base no-underline">
      <LinksComponent title="BHIVE.PL"></LinksComponent>
      <li>
        <a href="./login">
          <span class="block ml-4 px-4 py-1 text-white border border-yellow-400 bg-yellow-400 hover:bg-transparent hover:text-yellow-400 transition rounded-full hover:scale-105">Login</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import LinksComponent from "@/components/Navigation/LinksComponent";

export default {
  name: "NavigationComponent",
  components: {LinksComponent},
}
</script>

<style scoped>
</style>