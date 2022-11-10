<template>
  <li>
    <a @click="scroll(1)" class="hover:cursor-pointer">
      <span class="text-2xl font-bold text-yellow-400 font-bold">{{ title }}</span>
    </a>
  </li>
  <li class="list-none ml-4 text-neutral-900" v-for="link in links" :key="link.title">
    <a v-bind:href="link.addr">{{ link.title }}</a>
  </li>
</template>

<script>

export default {
  name: "LinksComponent",
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({block: "start"});
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
          title: 'O nas',
          addr: './zespol',
        },
        {
          title: 'Sklep',
          addr: './sklep',
        },
        {
          title: 'Discord',
          addr: 'https://dc.bhive.pl/',
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