<template>
  <div class="w-screen h-screen relative overflow-hidden flex flex-col">
    <div class="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center" style="background-image: url('/images/bg.png');">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
    </div>
    <TopBar />
    <div class="flex-1 flex overflow-hidden px-2.5 pt-2.5 pb-24 relative z-20">
      <SideBar />
      <div class="flex-1 overflow-y-auto px-5">
        <!-- <NuxtPage /> -->
      </div>
      <div class="w-0"></div> <!-- Spacer if needed -->
    </div>
    <div class="absolute bottom-0 left-0 w-full z-10">
      <BottomBar />
    </div>
  </div>
</template>

<style>
/* Global scrollbar styling can remain here or move to a global css file */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}
::-webkit-scrollbar-thumb {
  background: #00b3b3;
  border-radius: 4px;
}
</style>
