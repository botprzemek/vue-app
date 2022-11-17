<template>
  <main class="h-full w-full mb-[8rem] select-none">
    <section id="1" class="w-full box-border p-[8%] pb-[2%] relative">
      <div class="relative z-10 max-w-full h-full box-border gap-4 grid grid-cols-2 items-center">
        <div>
          <h1 class="text-7xl text-main font-bold mb-4">Dołącz do naszej społeczności!</h1>
          <p class="text-[1.1rem] text-justify text-background">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa eligendi ipsa veritatis! Autem consectetur, culpa eaque et ex fuga incidunt iure, laborum magnam modi officiis placeat recusandae sed vitae!</p>
          <button @click="scroll(2)" class="scroll text-2xl font-bold mt-4 px-8 py-1 text-white bg-main border-2 border-main hover:scale-105 hover:text-main hover:bg-transparent transition rounded-full">Dołącz teraz!</button>
        </div>
        <div class="w-full h-full">
<!--          <img class="object-contain" src="https://www.seekpng.com/png/full/72-727268_clipart-minecraft.png" alt="Postacie z gry Minecraft">-->
        </div>
      </div>
      <div class="z-[0] absolute w-full h-full inset-0">
        <div class="z-[0] w-full h-full bg-white"></div>
      </div>
    </section>
    <section id="2" class="w-full box-border pb-[3%] pt-[2%] relative">
      <div class="relative z-10 flex flex-col max-w-full h-full box-border gap-4">
        <h2 class="text-center w-full text-[2.3rem] font-bold text-background">Dołącz do <span class="text-main">naszej</span> społeczności</h2>
        <div class="w-full grid justify-center grid-flow-col items-center gap-2 text-2xl">
          <p class="font-bold">IP Serwera:</p>
          <button @click="copy" class="ip relative w-fit rounded-full">
            <span class="relative z-[3] grid items-center grid-flow-col gap-2 bg-main text-background rounded-full py-1 px-6">
              bhive.pl
              <i class="fill-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 text-white" viewBox="0 0 24 24"><path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z"></path><path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path></svg>
              </i>
            </span>
            <span class="label-copy absolute text-center top-0 h-full grid place-items-center w-full transition opacity-0 transform-gpu">
              <span>Skopiowano</span>
            </span>
          </button>
        </div>
      </div>
      <div class="z-[0] absolute w-full h-full inset-0">
        <div class="z-[0] w-full h-full bg-white"></div>
      </div>
    </section>
    <section id="1" class="w-full box-border px-[8%] py-[2%] relative">
      <div class="relative z-10 max-w-full h-full box-border gap-8 grid grid-cols-2 place-items-center">
        <div class="transition duration-500 w-full rounded-xl p-6 bg-main hover:scale-105">
          <h3 class="text-white text-3xl font-bold text-center">Survival</h3>
          <i class="fill-background flex justify-center w-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[30%]" viewBox="0 0 24 24"><path d="m20.43 5.76-8-3.56a1 1 0 0 0-.82 0l-8 3.56a1 1 0 0 0-.59.9c0 2.37.44 10.8 8.51 15.11a1 1 0 0 0 1 0c8-4.3 8.58-12.71 8.57-15.1a1 1 0 0 0-.67-.91zm-4.43 7h-3v3h-2v-3H8v-2h3v-3h2v3h3z"></path></svg>
          </i>
        </div>
        <div class="transition duration-500 w-full rounded-xl p-6 bg-main hover:scale-105">
          <h3 class="text-white text-3xl font-bold text-center">OneBlock</h3>
          <i class="fill-background flex justify-center w-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[30%]" viewBox="0 0 24 24"><path d="m21.406 6.086-9-4a1.001 1.001 0 0 0-.813 0l-9 4c-.02.009-.034.024-.054.035-.028.014-.058.023-.084.04-.022.015-.039.034-.06.05a.87.87 0 0 0-.19.194c-.02.028-.041.053-.059.081a1.119 1.119 0 0 0-.076.165c-.009.027-.023.052-.031.079A1.013 1.013 0 0 0 2 7v10c0 .396.232.753.594.914l9 4c.13.058.268.086.406.086a.997.997 0 0 0 .402-.096l.004.01 9-4A.999.999 0 0 0 22 17V7a.999.999 0 0 0-.594-.914zM12 4.095 18.538 7 12 9.905l-1.308-.581L5.463 7 12 4.095zm1 15.366V11.65l7-3.111v7.812l-7 3.11z"></path></svg>
          </i>
        </div>
      </div>
      <div class="z-[0] absolute w-full h-full inset-0">
        <div class="z-[0] w-full h-full bg-white"></div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "MainComponent",
  data(){
    return {}
  },
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({block: "center"});
    },
    copy() {
      const clip = document.createElement("textarea"),
            button = document.body.querySelector('.ip'),
            label = document.body.querySelector('.label-copy');

      label.classList.toggle('translate-y-[110%]');
      label.classList.remove('opacity-0');
      label.classList.add('opacity-1');
      clip.value='bhive.pl';
      button.appendChild(clip);
      clip.focus();
      clip.select();

      try{
        document.execCommand('copy');
      } catch(err){
        console.error('Unable to copy to clipboard', err);
      }

      setTimeout(()=>{
        label.classList.toggle('translate-y-[110%]');
        label.classList.remove('opacity-1');
        label.classList.add('opacity-0');
      }, 1000);
      button.removeChild(clip);
    }
  }
}
</script>

<style scoped>
</style>