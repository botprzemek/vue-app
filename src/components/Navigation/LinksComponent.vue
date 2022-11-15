<template>
  <li>
    <span @click="scroll(1)" class="text-2xl font-bold text-main font-bold hover:cursor-pointer">{{ title }}</span>
  </li>
  <li class="list-none ml-4 text-background" v-for="link in links" :key="link.title">
    <router-link v-bind:to="link.addr">{{ link.title }}</router-link>
  </li>
</template>

<script>
export default {
  name: "LinksComponent",
  methods: {
    scroll(id) {
      window.location.pathname !== '/' ? this.$router.push('/') :document.getElementById(id).scrollIntoView({block: "start"});
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