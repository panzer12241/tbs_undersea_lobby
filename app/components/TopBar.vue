<template>
  <div class="h-20 flex justify-between items-center px-5 relative z-10 bg-gradient-to-b from-[rgba(0,77,77,0.9)] to-transparent">
    <!-- Left: Balance -->
    <div class="flex gap-4">
      <div class="flex items-center bg-black/30 rounded-2xl px-2.5 py-1.5 border border-[#00b3b3] text-white font-bold">
        <div class="w-6 h-6 bg-[gold] rounded-full mr-2"></div>
        <span>฿8,900.00</span>
        <button class="bg-[#00b300] border-none text-white rounded-full w-5 h-5 ml-2 cursor-pointer flex items-center justify-center">+</button>
      </div>
      <div class="flex items-center bg-black/30 rounded-2xl px-2.5 py-1.5 border border-[#00b3b3] text-white font-bold">
        <div class="w-6 h-6 bg-[cyan] rotate-45 mr-2"></div>
        <span>99.00</span>
      </div>
      <div class="flex items-center bg-black/30 rounded-2xl px-2.5 py-1.5 border border-[#00b3b3] text-white font-bold">
        <div class="w-6 h-6 bg-[lime] rotate-45 mr-2"></div>
        <span>99.00</span>
      </div>
    </div>

    <!-- Center: Logo -->
    <div class="absolute left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#00ffff] to-[#008080] px-5 py-1.5 rounded-b-2xl shadow-[0_0_10px_#00ffff]">
      <div class="text-2xl font-black italic text-white drop-shadow-[2px_2px_0_black]">JOKER79</div>
    </div>

    <!-- Right: User Info -->
    <div class="flex items-center gap-5">
      <div class="flex items-center gap-2.5 bg-[rgba(0,77,77,0.6)] px-4 py-1.5 rounded-full border border-[#00b3b3]">
        <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix" alt="User" class="w-10 h-10 rounded-full border-2 border-[#00ffff]" />
        <div class="flex flex-col">
          <span class="text-sm font-bold text-[#00ffff]">วรชาติ อุดมเดช</span>
          <span class="text-[10px] text-[#aaa]">ID: JK0998998888</span>
        </div>
      </div>
      <div class="flex gap-2.5">
        <button class="w-10 h-10 rounded-full bg-black/30 border border-[#00b3b3] text-white cursor-pointer text-lg flex justify-center items-center transition-all hover:bg-[#00b3b3] hover:shadow-[0_0_10px_#00ffff] bg-[#ff3333] border-[#ff0000]">⏻</button>
        <button class="w-10 h-10 rounded-full bg-black/30 border border-[#00b3b3] text-white cursor-pointer text-lg flex justify-center items-center transition-all hover:bg-[#00b3b3] hover:shadow-[0_0_10px_#00ffff]">🔍</button>
        <button class="w-10 h-10 rounded-full bg-black/30 border border-[#00b3b3] text-white cursor-pointer text-lg flex justify-center items-center transition-all hover:bg-[#00b3b3] hover:shadow-[0_0_10px_#00ffff]">⚙️</button>
      </div>
    </div>
  </div>
</template>
