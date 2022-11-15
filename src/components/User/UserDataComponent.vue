<template>
  <div v-if="loaded" class="h-[70vh] grid place-items-center">
    <h1>{{ user.username }}</h1>
    <p>{{ user.email }}</p>
    <p>Balance: </p>
    <ul>
      <li>{{ user.balance.zloty }}</li>
      <li>{{ user.balance.gwiazdki }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, get, child } from 'firebase/database'
import { database } from "@/firebase/main"

const databaseRef = ref(database);

export default {
  name: "UserDataComponent",
  data(){
    return {
      loaded: false,
      user: {
        username: null,
        email: null,
        balance: {
          zloty: 0,
          gwiazdki: 0,
        }
      },
    }
  },
  methods: {
    async setter(user){
      console.log(user);
      this.username = await user.username;
      this.email = await user.email;
      //this.balance.zloty = await user.balance.zloty;
      //this.balance.gwiazdki = await user.balance.gwiazdki;
      this.loaded = true;
    }
  },
  async created(){
    await get(child(databaseRef, `/users/${this.$route.params.id}`))
        .then((snapshot) => {
          if (snapshot.exists()) this.setter(snapshot.val());
          else console.log("No data available");
        })
        .catch((error) => console.error(error))
  }
}
</script>

<style scoped>

</style>