<template>
  <main class="w-full h-[80vh] grid place-items-center grid-cols-2">
    <form @submit.prevent="register" class="w-fit grid grid-flow-row">
      <h1 class="text-[2.3rem] font-bold text-main">Zarejestruj się</h1>
      <label>Email</label>
      <input class="border border-background rounded-full px-2 py-1" type="email" placeholder="andrew34x@gmail.com" required v-model="r_email">
      <label>Hasło</label>
      <input class="border border-background rounded-full px-2 py-1" type="password" placeholder="Tajne hasło" required v-model="r_password">
      <button class="text-2xl font-bold mt-4 px-8 py-1 text-white bg-main border border-main hover:scale-105 hover:text-main hover:bg-transparent transition rounded-full">Zarejestruj się!</button>
    </form>
    <form @submit.prevent="login" class="w-fit grid grid-flow-row">
      <h1 class="text-[2.3rem] font-bold text-main">Zaloguj się</h1>
      <label>Email</label>
      <input class="border border-background rounded-full px-2 py-1" type="email" placeholder="andrew34x@gmail.com" required v-model="l_email">
      <label>Hasło</label>
      <input class="border border-background rounded-full px-2 py-1" type="password" placeholder="Tajne hasło" required v-model="l_password">
      <button class="text-2xl font-bold mt-4 px-8 py-1 text-white bg-main border border-main hover:scale-105 hover:text-main hover:bg-transparent transition rounded-full">Zaloguj się!</button>
    </form>
  </main>
</template>

<script>
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth'
import { auth } from '@/firebase/main'
import setData from '@/firebase/methods/post'

export default {
  name: "LoginComponent",
  data() {
    return {
      r_email: '',
      r_password: '',
      r_loading: false,
      l_email: '',
      l_password: '',
      l_loading: false,
    }
  },
  methods: {
    register(){
      if (this.r_loading) return;
      this.r_loading = true;
      createUserWithEmailAndPassword(auth, this.r_email, this.r_password).then(()=>{
        this.$router.push('/panel');
        setData(this.r_email);
      }).catch((error)=>{
        console.log(error);
      });
    },
    login(){
      setPersistence(auth, browserSessionPersistence).then(()=>{
        signInWithEmailAndPassword(auth, this.l_email, this.l_password).then(()=>{
          this.$router.push('/panel');
        }).catch((error)=>{
          console.log(error);
        });
      });
    },
  }
}
</script>

<style scoped>
</style>