<template>
  <div class="h-[calc(100%_-_10px)] my-auto flex flex-col items-center justify-center gap-2 py-6 w-[90px] relative z-20 bg-gradient-to-b from-[#00ffff]/10 to-[#0099ff]/10 border border-white/20 rounded-[50px] backdrop-blur-sm">
    <!-- Up Button -->
    <button class="absolute -top-5 left-1/2 -translate-x-1/2 hover:-translate-y-1 transition-transform z-30">
      <img src="/images/sidebar/up-btn.png" alt="Up" class="w-10 h-10 drop-shadow-md" />
    </button>

    <!-- Menu Items -->
        <!-- Menu Items -->
    <div class="flex-1 flex flex-col items-center justify-start gap-2 overflow-y-auto no-scrollbar py-2">
      
      <!-- Item: Lobby -->
      <div class="flex flex-col items-center cursor-pointer group relative mt-1">
        <div class="absolute top-3 w-[55px] h-[55px] rounded-full bg-lobby z-0"></div>
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/lobby.png" alt="Lobby" class="h-[60px] w-auto object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-lg font-bold px-3 py-[2px] rounded-full -mt-3 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap min-w-[65px] text-center">
          ล็อบบี้
        </div>
      </div>

      <!-- Item: Slot (Camp Game) -->
      <div class="flex flex-col items-center cursor-pointer group relative mt-1">
        <div class="absolute top-3 w-[55px] h-[55px] rounded-full bg-blue z-0"></div>
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/slot.png" alt="Slot" class="h-[60px] w-auto object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-lg font-bold px-3 py-[2px] rounded-full -mt-3 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap min-w-[65px] text-center">
          สล็อต
        </div>
      </div>

      <!-- Item: Casino -->
      <div class="flex flex-col items-center cursor-pointer group relative mt-1">
        <div class="absolute top-3 w-[55px] h-[55px] rounded-full bg-white-custom z-0"></div>
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/casino.png" alt="Casino" class="h-[60px] w-auto object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-lg font-bold px-3 py-[2px] rounded-full -mt-3 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap min-w-[65px] text-center">
          คาสิโน
        </div>
      </div>

      <!-- Item: Fish -->
      <div class="flex flex-col items-center cursor-pointer group relative mt-1">
        <div class="absolute top-3 w-[55px] h-[55px] rounded-full bg-blue z-0"></div>
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/fish.png" alt="Fish" class="h-[60px] w-auto object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-lg font-bold px-3 py-[2px] rounded-full -mt-3 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap min-w-[65px] text-center">
          ยิงปลา
        </div>
      </div>

      <!-- Item: Table -->
      <div class="flex flex-col items-center cursor-pointer group relative mt-1">
        <div class="absolute top-3 w-[55px] h-[55px] rounded-full bg-green z-0"></div>
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/table.png" alt="Table" class="h-[60px] w-auto object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-lg font-bold px-3 py-[2px] rounded-full -mt-3 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap min-w-[65px] text-center">
          เกมโต๊ะ
        </div>
      </div>

      <!-- Item: Arcade -->
      <div class="flex flex-col items-center cursor-pointer group relative mt-1">
        <div class="absolute top-3 w-[55px] h-[55px] rounded-full bg-yellow z-0"></div>
        <div class="relative z-10 transition-transform group-hover:scale-110 duration-300">
             <img src="/images/sidebar/acade.png" alt="Arcade" class="h-[60px] w-auto object-contain drop-shadow-lg" />
        </div>
        <div class="bg-gradient-to-b from-[#ccffff] to-[#99ffff] text-[#005c6e] text-lg font-bold px-3 py-[2px] rounded-full -mt-3 relative z-20 shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-white/60 whitespace-nowrap min-w-[65px] text-center">
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
.item-bg {
  /* Default fallback */
  background: linear-gradient(180deg, #FF5E5E 0%, #D60000 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 2px 4px rgba(255, 255, 255, 0.5);
  border: 2px solid #FF8F8F;
}

.bg-lobby {
  background: linear-gradient(180deg, #E84343 0%, #B01E1E 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 2px 4px rgba(255, 255, 255, 0.5);
  border: 2px solid #FF8F8F;
}

.bg-blue {
  background: linear-gradient(180deg, #00C6FF 0%, #0072FF 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 2px 4px rgba(255, 255, 255, 0.5);
  border: 2px solid #60a5fa;
}

.bg-white-custom {
  background: linear-gradient(180deg, #FFFFFF 0%, #D1D1D1 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 2px 4px rgba(255, 255, 255, 0.5);
  border: 2px solid #FFFFFF;
}

.bg-green {
  background: linear-gradient(180deg, #2E8B57 0%, #006400 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 2px 4px rgba(255, 255, 255, 0.5);
  border: 2px solid #3CB371;
}

.bg-yellow {
  background: linear-gradient(180deg, #FFD700 0%, #DAA520 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 2px 4px rgba(255, 255, 255, 0.5);
  border: 2px solid #FFE4B5;
}
</style>
