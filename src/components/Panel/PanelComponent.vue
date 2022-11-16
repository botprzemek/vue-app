<template>
  <main class="w-full h-[100vh] relative grid place-items-center text-background">
    <UserData></UserData>
  </main>
</template>

<script>
import UserData from "@/components/Panel/User/UserDataComponent";

export default {
  name: "PanelComponent",
  data(){
    return {
      usernameIsSet: false,
    }
  },
  components: {
    UserData,
  }
}
</script>

<style scoped>
</style>