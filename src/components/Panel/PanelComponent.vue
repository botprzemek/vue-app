<template>
  <main class="w-full h-[80vh] grid place-items-center text-background">
    <UserData></UserData>
  </main>
</template>

<script>
import UserData from "@/components/Panel/User/UserDataComponent";

export default {
  name: "PanelComponent",
  components: {
    UserData,
  }
}
</script>

<style scoped>
</style>