<template>
  <div class="h-32 w-full relative z-10 flex justify-center font-sans">
    <!-- Background Image -->
    <img src="/images/header.png" alt="Header Background" class="absolute top-0 left-0 w-full h-full object-fill" />

    <!-- Content Container -->
        <!-- Content Container -->
    <div class="relative w-full h-full max-w-[1400px] mx-auto">
      
      <!-- Left Section: Balances -->
      <div class="absolute left-4 top-[40%] -translate-y-1/2 flex items-center gap-2">
        <!-- Coin Balance -->
        <div class="relative flex items-center justify-between px-1 py-1 min-w-[130px] h-[36px]">
          <img src="/images/bg-balance.svg" class="absolute inset-0 w-full h-full object-fill" />
          <img src="/images/coin.png" alt="Coin" class="w-9 h-9 z-10 -ml-1 drop-shadow-lg" />
          <span class="relative z-10 text-white font-bold text-sm mx-1 drop-shadow-md">฿8,900.00</span>
          <button class="relative z-10 hover:scale-110 transition-transform">
            <img src="/images/add-bt.png" alt="Add" class="w-5 h-5 mr-1" />
          </button>
        </div>

        <!-- Diamond Balance -->
        <div class="relative flex items-center px-1 py-1 min-w-[90px] h-[36px]">
           <img src="/images/bg-balance.svg" class="absolute inset-0 w-full h-full object-fill" />
          <img src="/images/dimon.png" alt="Diamond" class="w-8 h-8 z-10 -ml-1 drop-shadow-lg" />
          <span class="relative z-10 text-white font-bold text-sm ml-2 drop-shadow-md">99.00</span>
        </div>

        <!-- Point Balance -->
        <div class="relative flex items-center px-1 py-1 min-w-[90px] h-[36px]">
           <img src="/images/bg-balance.svg" class="absolute inset-0 w-full h-full object-fill" />
          <img src="/images/point.png" alt="Point" class="w-8 h-8 z-10 -ml-1 drop-shadow-lg" />
          <span class="relative z-10 text-white font-bold text-sm ml-2 drop-shadow-md">99.00</span>
        </div>
      </div>

      <!-- Center Logo -->
      <div class="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-transform duration-300">
        <img src="/images/logo.png" alt="JOKER79" class="h-[55px] object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
      </div>

      <!-- Right Section: Profile & Buttons -->
      <div class="absolute right-4 top-[40%] -translate-y-1/2 flex items-center gap-4">
        <!-- Profile -->
        <div class="relative flex items-center pl-1 pr-4 py-1 h-[42px] min-w-[160px]">
           <div class="absolute inset-0 bg-gradient-to-r from-[#003b4d] to-[#002a36] rounded-full border border-[#00ffff]/20 shadow-[0_0_10px_#000000/50]"></div>
          <div class="relative z-10 mr-2">
            <img src="/images/profile.png" alt="Profile" class="w-10 h-10 rounded-full border border-[#00ffff] shadow-[0_0_5px_#00ffff]" />
          </div>
          <div class="relative z-10 flex flex-col items-start leading-none justify-center">
            <span class="text-white font-bold text-sm drop-shadow-md">วรชาติ อุดมเดช</span>
            <span class="text-white/60 text-[9px] mt-[1px]">ID: JK0998998888</span>
          </div>
        </div>

        <!-- Power Button -->
        <button class="hover:scale-105 transition-transform">
          <img src="/images/logout-bt.png" alt="Logout" class="w-9 h-9 drop-shadow-md" />
        </button>

        <!-- Search Game -->
        <div class="flex flex-col items-center justify-center relative group cursor-pointer">
          <img src="/images/card.png" alt="Search" class="w-10 h-10 z-10 hover:-translate-y-1 transition-transform mb-[-8px]" />
          <div class="bg-[#005c6e] text-white text-[9px] px-2 py-[1px] rounded-full border border-[#00ffff]/30 shadow-[0_0_5px_#00ffff/50] z-20">
            ค้นหาเกม
          </div>
        </div>

        <!-- Settings -->
        <div class="flex flex-col items-center justify-center relative group cursor-pointer">
          <img src="/images/setting.png" alt="Settings" class="w-10 h-10 z-10 hover:-translate-y-1 transition-transform mb-[-8px]" />
          <div class="bg-[#006e00] text-white text-[9px] px-3 py-[1px] rounded-full border border-[#00ff00]/30 shadow-[0_0_5px_#00ff00/50] z-20">
            ตั้งค่า
          </div>
        </div>
      </div>

    </div>
    
  </div>
</template>
