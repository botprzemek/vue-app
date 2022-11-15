<template>
  <main class="h-full w-full mb-[8rem] select-none">
    <section id="1" class="w-full box-border p-[8%] pb-[2%] relative">
      <div class="max-w-full h-full box-border gap-4 grid grid-cols-2 items-center">
        <div>
          <h1 class="text-[4.7rem] text-main font-bold">Dołącz do naszej społeczności!</h1>
          <p class="text-[1.1rem] text-justify text-background">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa eligendi ipsa veritatis! Autem consectetur, culpa eaque et ex fuga incidunt iure, laborum magnam modi officiis placeat recusandae sed vitae!</p>
          <button @click="scroll(2)" class="scroll text-2xl font-bold mt-4 px-8 py-1 text-white bg-main border border-main hover:scale-105 hover:text-main hover:bg-transparent transition rounded-full">Dołącz teraz!</button>
        </div>
        <div class="w-full h-full">
<!--          <img class="object-contain" src="https://www.seekpng.com/png/full/72-727268_clipart-minecraft.png" alt="Postacie z gry Minecraft">-->
        </div>
      </div>
      <div class="z-[1] absolute w-full h-full inset-0">
        <div class="w-full h-full bg-white"></div>
      </div>
    </section>
    <section id="2" class="w-full box-border pb-[3%] pt-[2%] relative">
      <div class="flex flex-col max-w-full h-full box-border gap-4">
        <h1 class="text-center w-full text-[2.3rem] font-bold text-background">Dołącz do <span class="text-main">naszej</span> społeczności</h1>
        <div class="w-full grid justify-center grid-flow-col items-center gap-2 text-2xl">
          <p class="font-bold">IP Serwera:</p>
          <button @click="copy" class="ip relative w-fit rounded-full">
            <span class="relative z-[3] grid items-center grid-flow-col gap-2 bg-main text-background rounded-full py-1 px-6">
              bhive.pl
              <i class="transition fill-white text-white w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 text-white" viewBox="0 0 24 24"><path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z"></path><path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path></svg>
              </i>
            </span>
            <span class="label-copy absolute text-center top-0 h-full grid place-items-center w-full transition opacity-0 transform-gpu">
              <span>Skopiowano</span>
            </span>
          </button>
        </div>
      </div>
      <div class="z-[1] absolute w-full h-full inset-0">
        <div class="w-full h-full bg-white"></div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "MainComponent",
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