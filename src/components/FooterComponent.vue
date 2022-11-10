<template>
  <footer class="grid place-items-center">
    <div class="grid grid-cols-2 justify-end">
      <ul>
        <LinksComponent></LinksComponent>
      </ul>
      <ul>
        <LinksComponent></LinksComponent>
      </ul>
    </div>
  </footer>
</template>

<script>
import LinksComponent from "@/components/Navigation/LinksComponent";

export default {
  name: "FooterComponent",
  components: {
    LinksComponent,
  }
}
</script>

<style scoped>

</style>