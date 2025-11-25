<template>
  <div class="h-20 bg-gradient-to-t from-[rgba(0,77,77,0.9)] to-transparent flex justify-between items-end px-10 pb-2.5 relative z-10">
    <div class="flex gap-[30px]">
      <div class="flex flex-col items-center gap-[5px] cursor-pointer transition-transform hover:-translate-y-[5px]">
        <div class="w-10 h-10 bg-gradient-to-br from-[#ffd700] to-[#ffaa00] rounded-[10px] flex justify-center items-center text-xl shadow-[0_4px_6px_rgba(0,0,0,0.3)]">🎁</div>
        <span class="text-xs font-bold drop-shadow-[1px_1px_2px_black]">โปรโมชั่น</span>
      </div>
      <div class="flex flex-col items-center gap-[5px] cursor-pointer transition-transform hover:-translate-y-[5px]">
        <div class="w-10 h-10 bg-gradient-to-br from-[#00b3b3] to-[#008080] rounded-[10px] flex justify-center items-center text-xl shadow-[0_4px_6px_rgba(0,0,0,0.3)]">💰</div>
        <span class="text-xs font-bold drop-shadow-[1px_1px_2px_black]">ฝาก</span>
      </div>
      <div class="flex flex-col items-center gap-[5px] cursor-pointer transition-transform hover:-translate-y-[5px]">
        <div class="w-10 h-10 bg-gradient-to-br from-[#ff3333] to-[#cc0000] rounded-[10px] flex justify-center items-center text-xl shadow-[0_4px_6px_rgba(0,0,0,0.3)]">💸</div>
        <span class="text-xs font-bold drop-shadow-[1px_1px_2px_black]">ถอน</span>
      </div>
    </div>

    <div class="absolute left-1/2 bottom-2.5 -translate-x-1/2">
      <div class="w-[90px] h-[90px] bg-[radial-gradient(circle,#00ffff,#008080)] rounded-full flex justify-center items-center border-4 border-white/20 shadow-[0_0_20px_#00ffff] cursor-pointer">
        <div class="font-black italic text-sm text-[#001a33]">JOKER79</div>
      </div>
    </div>

    <div class="flex gap-[30px]">
      <div class="flex flex-col items-center gap-[5px] cursor-pointer transition-transform hover:-translate-y-[5px]">
        <div class="w-10 h-10 bg-gradient-to-br from-[#ffd700] to-[#ffaa00] rounded-[10px] flex justify-center items-center text-xl shadow-[0_4px_6px_rgba(0,0,0,0.3)]">⭐</div>
        <span class="text-xs font-bold drop-shadow-[1px_1px_2px_black]">เกมโปรด</span>
      </div>
      <div class="flex flex-col items-center gap-[5px] cursor-pointer transition-transform hover:-translate-y-[5px]">
        <div class="w-10 h-10 bg-gradient-to-br from-[#ffd700] to-[#ffaa00] rounded-[10px] flex justify-center items-center text-xl shadow-[0_4px_6px_rgba(0,0,0,0.3)]">🏆</div>
        <span class="text-xs font-bold drop-shadow-[1px_1px_2px_black]">กิจกรรม</span>
      </div>
      <div class="flex flex-col items-center gap-[5px] cursor-pointer transition-transform hover:-translate-y-[5px]">
        <div class="w-10 h-10 bg-gradient-to-br from-[#00b300] to-[#008000] rounded-[10px] flex justify-center items-center text-xl shadow-[0_4px_6px_rgba(0,0,0,0.3)]">💬</div>
        <span class="text-xs font-bold drop-shadow-[1px_1px_2px_black]">ติดต่อ</span>
      </div>
    </div>
  </div>
</template>
