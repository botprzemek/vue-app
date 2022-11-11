<template>
  <NavigationComponent></NavigationComponent>
  <router-view />
  <FooterComponent></FooterComponent>
</template>

<script>
import '@/main.css';
import NavigationComponent from "@/components/Navigation/NavigationComponent";
import FooterComponent from "@/components/Footer/FooterComponent";

export default {
  name: 'App',
  components: {
    NavigationComponent,
    FooterComponent,
  }
}
</script>

<style>
</style>
