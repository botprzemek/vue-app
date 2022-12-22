<template>
  <li class="h-full">
    <img class="h-16 hover:cursor-pointer" src="./Logo.svg" @click="scroll(1)">
  </li>
  <li class="transform-gpu transition list-none ml-4 text-background hover:text-main hover:scale-105" v-for="link in links" :key="link.title">
    <router-link v-bind:to="link.addr">{{ link.title }}</router-link>
  </li>
</template>

<script>
export default {
  name: "LinksComponent",
  methods: {
    scroll(id) {
      window.location.pathname !== '/' ? this.$router.push('/') : document.getElementById(id).scrollIntoView({block: "start", behavior: "smooth"});
    },
  },
  props: {
    title: String,
    addr: String,
  },
  data() {
    return {
      links: [
        {
          title: 'Start',
          addr: './',
        },
        {
          title: 'Panel',
          addr: './panel',
        },
        {
          title: 'O nas',
          addr: './zespol',
        },
        {
          title: 'Sklep',
          addr: './sklep',
        },
        {
          title: 'Discord',
          addr: '/discord',
        },
        {
          title: 'FAQ',
          addr: './faq',
        },
      ]
    }
  }
}
</script>

<style scoped>
</style>