<template>
  <nav class="z-50 fixed w-full min-h-[8%] grid items-center box-border select-none bg-white shadow-[0_15px_10px_-15px_rgba(0,0,0,0.04)] px-[8%]">
    <ul class="grid grid-cols-[1fr_repeat(7,_auto)] w-full relative items-center text-base no-underline py-[1%]">
      <LinksComponent title="BHIVE.PL"></LinksComponent>
      <li>
        <span @click="onLogin" v-if="loginState" class="block ml-4 px-4 py-1 text-white border border-main bg-main hover:bg-transparent hover:text-main transition rounded-full hover:scale-105 hover:cursor-pointer">Wyloguj się</span>
        <span @click="onLogin" v-else class="block ml-4 px-4 py-1 text-white border border-main bg-main hover:bg-transparent hover:text-main transition rounded-full hover:scale-105 hover:cursor-pointer">Zaloguj się</span>
      </li>
    </ul>
  </nav>
</template>

<script>
import LinksComponent from "@/components/Navigation/LinksComponent"
import { signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from '@/firebase/main'

export default {
  name: "NavigationComponent",
  data(){
    return {
      loginState: false,
    }
  },
  components: {
    LinksComponent,
  },
  methods: {
    verifyState(){
      onAuthStateChanged(auth, (user) => {
        user ? this.loginState = true : this.loginState = false
      });
    },
    onLogin(){
      if (this.$router.path === '/panel') signOut(auth).then(()=>{
        this.$router.push('/login');
        this.loginState = false;
      });
      else this.loginState ? signOut(auth).then(()=>{
        this.$router.push('/login');
        this.loginState = false;
      }) : this.$router.push('/login');
    },
  },
  beforeMount(){
    this.verifyState();
  },
}
</script>

<style scoped>
</style>