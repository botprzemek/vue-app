<template>
  <div class="w-full h-full bg-slate-50">
    <NavigationComponent></NavigationComponent>
    <MainComponent></MainComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import './main.css';
import NavigationComponent from "@/components/NavigationComponent";
import MainComponent from "@/components/MainComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: 'App',
  components: {
    NavigationComponent,
    MainComponent,
    FooterComponent,
  }
}

</script>

<style>
</style>
