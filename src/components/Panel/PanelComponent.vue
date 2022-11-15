<template>
  <main class="w-full h-[80vh] grid place-items-center text-background">
    <div class="">
      <h1 class="text-[2.3rem] font-bold text-main">Zalogowano pomyślnie!</h1>
      <p><span class="text-lg font-bold text-main">Nick: </span>{{ user.username }}</p>
      <p><span class="text-lg font-bold text-main">Email: </span>{{ user.email }}</p>
      <img v-bind:alt=user.displayName class="w-10 h-10 rounded" v-bind:src=user.photoURL>
    </div>
  </main>
</template>

<script>
import { auth } from '@/firebase/main'

const user = auth.currentUser;

export default {
  name: "PanelComponent",
  data(){
    return {
      loading: false,
      user: {
        email: null,
        username: null,
        photoURL: null,
      }
    }
  },
  methods: {
    setUserData(user){
      console.log(user);
      this.user.email = user.email;
      this.user.username = user.displayName ? user.displayName : "Brak";
      this.user.photoURL = user.photoURL ? user.photoURL : "https://mc-heads.net/avatar/null/100";
      if (this.user.email === user.email) this.loading = false;
    },
  },
  created() {
    this.loading = true;
    this.setUserData(user);
  },
}
</script>

<style scoped>
</style>