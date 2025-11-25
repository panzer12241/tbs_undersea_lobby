<template>
  <div class="w-[90px] flex flex-col gap-4 py-5 bg-[rgba(0,20,40,0.4)] border-r border-white/10 rounded-r-2xl items-center">
    <div class="flex flex-col items-center justify-center w-[70px] h-[70px] rounded-full bg-white/10 cursor-pointer transition-all border-2 border-transparent hover:bg-white/20 active-nav">
      <div class="text-2xl mb-0.5">🔥</div>
      <span class="text-[10px] text-white font-bold drop-shadow-[1px_1px_2px_black]">ล็อบบี้</span>
    </div>
    <div class="flex flex-col items-center justify-center w-[70px] h-[70px] rounded-full bg-white/10 cursor-pointer transition-all border-2 border-transparent hover:bg-white/20">
      <div class="text-2xl mb-0.5">🎮</div>
      <span class="text-[10px] text-white font-bold drop-shadow-[1px_1px_2px_black]">ค่ายเกม</span>
    </div>
    <div class="flex flex-col items-center justify-center w-[70px] h-[70px] rounded-full bg-white/10 cursor-pointer transition-all border-2 border-transparent hover:bg-white/20">
      <div class="text-2xl mb-0.5">🎰</div>
      <span class="text-[10px] text-white font-bold drop-shadow-[1px_1px_2px_black]">คาสิโน</span>
    </div>
    <div class="flex flex-col items-center justify-center w-[70px] h-[70px] rounded-full bg-white/10 cursor-pointer transition-all border-2 border-transparent hover:bg-white/20">
      <div class="text-2xl mb-0.5">🐟</div>
      <span class="text-[10px] text-white font-bold drop-shadow-[1px_1px_2px_black]">ยิงปลา</span>
    </div>
    <div class="flex flex-col items-center justify-center w-[70px] h-[70px] rounded-full bg-white/10 cursor-pointer transition-all border-2 border-transparent hover:bg-white/20">
      <div class="text-2xl mb-0.5">🃏</div>
      <span class="text-[10px] text-white font-bold drop-shadow-[1px_1px_2px_black]">เกมโต๊ะ</span>
    </div>
    <div class="flex flex-col items-center justify-center w-[70px] h-[70px] rounded-full bg-white/10 cursor-pointer transition-all border-2 border-transparent hover:bg-white/20">
      <div class="text-2xl mb-0.5">🕹️</div>
      <span class="text-[10px] text-white font-bold drop-shadow-[1px_1px_2px_black]">อาร์เคด</span>
    </div>
    <div class="mt-auto text-[#00ffff] cursor-pointer text-xs">▼</div>
  </div>
</template>

<style scoped>
.active-nav {
  background: linear-gradient(135deg, #ff3333, #ff6600);
  border-color: #ffd700;
  box-shadow: 0 0 15px #ff3333;
  transform: scale(1.1);
}
</style>
