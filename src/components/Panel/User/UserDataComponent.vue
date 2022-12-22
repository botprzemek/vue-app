<template>
  <section v-if="loading">
    <LoadingComponent></LoadingComponent>
  </section>
  <section v-else class="data h-[100vh] w-full grid place-items-center">
    <div class="mx-8 p-6 w-[84%] bg-background-1 flex items-center rounded-xl">
      <h1 class="pl-3 text-4xl text-background font-bold">Witaj <span class="text-main font-bold">{{ user.username }}!</span></h1>
    </div>
    <SetUsername v-if="!this.setUsername" :email="email"></SetUsername>
  </section>
</template>

<script>
  import firebaseFetch from "@/firebase/methods/get"
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "@/firebase/main"
import LoadingComponent from '@/components/Loading/LoadingComponent'
import SetUsername from "@/components/Panel/User/SetUsername";

export default {
  name: 'UserDataComponent',
  components: {
    LoadingComponent,
    SetUsername,
  },
  data() {
    return {
      loading: false,
      setUsername: false,
      email: null,
      user: {
        username: null,
        email: null,
        balance: {
          zloty: null,
          gwiazdki: null,
        }
      },
    }
  },
  methods: {
    fetchName(email) {
      firebaseFetch(email, (user)=>{
        this.user.username = (user.username !== null) ? user.username : null;
        this.user.email = email.replace('DOT', '.');
        this.user.balance.zloty = user.balance.zloty;
        this.user.balance.gwiazdki = user.balance.gwiazdki;
        this.email = email;
        this.loading = false;
        if (this.user.username) this.setUsername = true;
        console.table(this.user);
      });
    },
  },
  beforeCreate() {
    onAuthStateChanged(auth, user =>{
      console.log(user);
      this.fetchName(user.email.toLocaleLowerCase().replace('.', 'DOT'));
    });
  },
  beforeMount(){ this.loading = true }
}

</script>

<style scoped>
</style>