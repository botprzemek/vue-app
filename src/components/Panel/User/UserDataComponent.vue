<template>
  <section v-if="loading">
    <LoadingComponent></LoadingComponent>
  </section>
  <section v-else class="h-[100vh] grid place-items-center">
    <div class="h-fit w-fit flex flex-col justify-center items-start">
      <h1><span class="text-main font-bold">Nazwa:</span> {{ user.username }}</h1>
      <p><span class="text-main font-bold">E-mail:</span> {{ user.email }}</p>
      <p><span class="text-main font-bold">Saldo:</span> </p>
      <ul>
        <li>{{ user.balance.zloty }} <span class="text-main font-bold">PLN</span></li>
        <li>{{ user.balance.gwiazdki }} <span class="text-main font-bold">Gwiazdek</span></li>
      </ul>
    </div>
  </section>
</template>

<script>
import firebaseFetch from "@/firebase/methods/get"
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "@/firebase/main"
import LoadingComponent from '@/components/Loading/LoadingComponent'

export default {
  name: 'UserDataComponent',
  components: {LoadingComponent},
  data() {
    return {
      loading: false,
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
        this.user.username = (user.username === null) ? user.username : 'Brak';
        this.user.email = email.replace('DOT', '.');
        this.user.balance.zloty = user.balance.zloty;
        this.user.balance.gwiazdki = user.balance.gwiazdki;
        this.loading = false;
      });
    }
  },
  created() {
    onAuthStateChanged(auth, user =>this.fetchName(user.email.toLocaleLowerCase().replace('.', 'DOT')));
  },
  beforeMount() {
    this.loading = true;
  }
}

</script>

<style scoped>
</style>