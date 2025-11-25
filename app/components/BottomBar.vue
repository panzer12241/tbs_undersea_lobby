<template>
  <div class="w-full relative z-10">
    <div class="relative w-full">
      <img src="/images/bottom-menu/bt-bg.png" alt="Bottom Bar Background" class="w-full h-auto block" />
      <div class="absolute inset-0 grid grid-cols-[1fr_auto_1fr] items-end px-32 pb-2">
        
        <!-- Left Menu -->
        <div class="flex justify-center items-end gap-10 w-full h-full pb-2">
            <!-- Item 1: Promotion -->
            <div class="relative flex flex-col items-center justify-end gap-1 cursor-pointer group h-full">
                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#00FFCE] blur-[10px] rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src="/images/bottom-menu/promotion.png" class="relative z-10 h-14 w-auto object-contain group-hover:-translate-y-2 transition-transform duration-300" />
                <span class="relative z-10 text-white text-lg font-bold drop-shadow-md whitespace-nowrap">โปรโมชั่น</span>
            </div>
            <!-- Item 2: Deposit -->
            <div class="relative flex flex-col items-center justify-end gap-1 cursor-pointer group h-full">
                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#00FFCE] blur-[10px] rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src="/images/bottom-menu/deposit.png" class="relative z-10 h-14 w-auto object-contain group-hover:-translate-y-2 transition-transform duration-300" />
                <span class="text-white text-lg font-bold drop-shadow-md whitespace-nowrap">ฝาก</span>
            </div>
            <!-- Item 3: Withdraw -->
            <div class="relative flex flex-col items-center justify-end gap-1 cursor-pointer group h-full">
                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#00FFCE] blur-[10px] rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src="/images/bottom-menu/dimon.png" class="relative z-10 h-14 w-auto object-contain group-hover:-translate-y-2 transition-transform duration-300" />
                <span class="text-white text-lg font-bold drop-shadow-md whitespace-nowrap">ถอน</span>
            </div>
        </div>

        <!-- Center Button -->
        <div class="relative w-[140px] h-full flex justify-center items-end z-20">
            <div class="absolute bottom-0 mb-[-10px] cursor-pointer hover:scale-105 transition-transform duration-300">
                <img src="/images/bottom-menu/center-btn.png" class="h-[160px] max-w-none object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </div>
        </div>

        <!-- Right Menu -->
        <div class="flex justify-center items-end gap-10 w-full h-full pb-2">
            <!-- Item 4: Favorite -->
            <div class="relative flex flex-col items-center justify-end gap-1 cursor-pointer group h-full">
                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#00FFCE] blur-[10px] rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src="/images/bottom-menu/favorite.png" class="relative z-10 h-14 w-auto object-contain group-hover:-translate-y-2 transition-transform duration-300" />
                <span class="text-white text-lg font-bold drop-shadow-md whitespace-nowrap">เกมโปรด</span>
            </div>
            <!-- Item 5: Activity -->
            <div class="relative flex flex-col items-center justify-end gap-1 cursor-pointer group h-full">
                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#00FFCE] blur-[10px] rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src="/images/bottom-menu/event.png" class="relative z-10 h-14 w-auto object-contain group-hover:-translate-y-2 transition-transform duration-300" />
                <span class="text-white text-lg font-bold drop-shadow-md whitespace-nowrap">กิจกรรม</span>
            </div>
            <!-- Item 6: Contact -->
            <div class="relative flex flex-col items-center justify-end gap-1 cursor-pointer group h-full">
                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#00FFCE] blur-[10px] rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src="/images/bottom-menu/contact.png" class="relative z-10 h-14 w-auto object-contain group-hover:-translate-y-2 transition-transform duration-300" />
                <span class="text-white text-lg font-bold drop-shadow-md whitespace-nowrap">ติดต่อ</span>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>
