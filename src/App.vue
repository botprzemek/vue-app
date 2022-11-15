<template>
  <NavigationComponent></NavigationComponent>
<!--  <LoadingComponent></LoadingComponent>-->
  <router-view />
  <FooterComponent></FooterComponent>
</template>

<script>
import '@/main.css';
import NavigationComponent from "@/components/Navigation/NavigationComponent";
import FooterComponent from "@/components/Footer/FooterComponent";
//import LoadingComponent from "@/components/Loading/LoadingComponent";

export default {
  name: 'App',
  components: {
    NavigationComponent,
    FooterComponent,
    //LoadingComponent,
  }
}
</script>

<style>
</style>
