<template>
  <div class="h-full flex flex-col items-center justify-center gap-2 py-2 w-[110px] relative z-20 bg-gradient-to-b from-[#00ffff]/10 to-[#0099ff]/10 border border-white/20 rounded-[50px] backdrop-blur-sm">
    <!-- Up Button -->
    <button class="hover:-translate-y-1 transition-transform mb-2">
      <img src="/images/sidebar/up-btn.png" alt="Up" class="w-10 h-10 drop-shadow-md" />
    </button>

    <!-- Menu Items -->
    <div class="flex-1 flex flex-col items-center justify-start gap-5 overflow-y-auto no-scrollbar py-2">
      
      <!-- Item: Lobby -->
      <div class="flex flex-col items-center cursor-pointer group relative">
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/lobby.png" alt="Lobby" class="w-[85px] h-[85px] object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-sm font-bold px-4 py-[2px] rounded-full -mt-4 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap">
          ล็อบบี้
        </div>
      </div>

      <!-- Item: Slot (Camp Game) -->
      <div class="flex flex-col items-center cursor-pointer group relative">
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/slot.png" alt="Slot" class="w-[85px] h-[85px] object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-sm font-bold px-4 py-[2px] rounded-full -mt-4 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap">
          ค่ายเกม
        </div>
      </div>

      <!-- Item: Casino -->
      <div class="flex flex-col items-center cursor-pointer group relative">
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/casino.png" alt="Casino" class="w-[85px] h-[85px] object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-sm font-bold px-4 py-[2px] rounded-full -mt-4 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap">
          คาสิโน
        </div>
      </div>

      <!-- Item: Fish -->
      <div class="flex flex-col items-center cursor-pointer group relative">
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/fish.png" alt="Fish" class="w-[85px] h-[85px] object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-sm font-bold px-4 py-[2px] rounded-full -mt-4 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap">
          ยิงปลา
        </div>
      </div>

      <!-- Item: Table -->
      <div class="flex flex-col items-center cursor-pointer group relative">
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/table.png" alt="Table" class="w-[85px] h-[85px] object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-sm font-bold px-4 py-[2px] rounded-full -mt-4 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap">
          เกมโต๊ะ
        </div>
      </div>

      <!-- Item: Arcade -->
      <div class="flex flex-col items-center cursor-pointer group relative">
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/acade.png" alt="Arcade" class="w-[85px] h-[85px] object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-sm font-bold px-4 py-[2px] rounded-full -mt-4 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap">
          อาร์เคต
        </div>
      </div>

    </div>

    <!-- Down Button -->
    <button class="hover:translate-y-1 transition-transform mt-2">
      <img src="/images/sidebar/down-btn.png" alt="Down" class="w-10 h-10 drop-shadow-md" />
    </button>
  </div>
</template>

<style scoped>
/* Scrollbar hiding handled by global utility */
</style>
