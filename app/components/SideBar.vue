<template>
  <div class="h-[calc(100%_-_10px)] my-auto flex flex-col items-center justify-center gap-2 py-6 w-[110px] relative z-20 bg-gradient-to-b from-[#00ffff]/10 to-[#0099ff]/10 border border-white/20 rounded-[50px] backdrop-blur-sm">
    <!-- Up Button -->
    <button class="absolute -top-5 left-1/2 -translate-x-1/2 hover:-translate-y-1 transition-transform z-30">
      <img src="/images/sidebar/up-btn.png" alt="Up" class="w-10 h-10 drop-shadow-md" />
    </button>

    <!-- Menu Items -->
    <div class="flex-1 flex flex-col items-center justify-start gap-5 overflow-y-auto no-scrollbar py-2">
      
      <!-- Item: Lobby -->
      <div class="flex flex-col items-center cursor-pointer group relative">
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/lobby.png" alt="Lobby" class="h-[50px] w-auto object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-sm font-bold px-4 py-[2px] rounded-full -mt-2 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap">
          ล็อบบี้
        </div>
      </div>

      <!-- Item: Slot (Camp Game) -->
      <div class="flex flex-col items-center cursor-pointer group relative">
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/slot.png" alt="Slot" class="h-[50px] w-auto object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-sm font-bold px-4 py-[2px] rounded-full -mt-2 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap">
          ค่ายเกม
        </div>
      </div>

      <!-- Item: Casino -->
      <div class="flex flex-col items-center cursor-pointer group relative">
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/casino.png" alt="Casino" class="h-[50px] w-auto object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-sm font-bold px-4 py-[2px] rounded-full -mt-2 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap">
          คาสิโน
        </div>
      </div>

      <!-- Item: Fish -->
      <div class="flex flex-col items-center cursor-pointer group relative">
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/fish.png" alt="Fish" class="h-[50px] w-auto object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-sm font-bold px-4 py-[2px] rounded-full -mt-2 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap">
          ยิงปลา
        </div>
      </div>

      <!-- Item: Table -->
      <div class="flex flex-col items-center cursor-pointer group relative">
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/table.png" alt="Table" class="h-[50px] w-auto object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-sm font-bold px-4 py-[2px] rounded-full -mt-2 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap">
          เกมโต๊ะ
        </div>
      </div>

      <!-- Item: Arcade -->
      <div class="flex flex-col items-center cursor-pointer group relative">
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/acade.png" alt="Arcade" class="h-[50px] w-auto object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-sm font-bold px-4 py-[2px] rounded-full -mt-2 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap">
          อาร์เคต
        </div>
      </div>

    </div>

    <!-- Down Button -->
    <button class="absolute -bottom-5 left-1/2 -translate-x-1/2 hover:translate-y-1 transition-transform z-30">
      <img src="/images/sidebar/down-btn.png" alt="Down" class="w-10 h-10 drop-shadow-md" />
    </button>
  </div>
</template>

<style scoped>
/* Scrollbar hiding handled by global utility */
</style>
