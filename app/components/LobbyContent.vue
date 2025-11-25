<template>
  <div class="h-full flex flex-col gap-5">
    <div class="flex gap-5 h-full">
      <div class="flex-1 bg-gradient-to-b from-[#ffcc00] to-[#ff6600] rounded-[20px] relative overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-2 border-[#ffd700] min-w-[300px]">
        <img src="/images/thumbnails.png" alt="Featured" class="w-full h-full object-cover opacity-80" />
        <div class="absolute bottom-5 left-0 w-full text-center">
          <h2 class="text-4xl font-black text-[#ffd700] drop-shadow-[2px_2px_0_#cc0000] m-0">สล็อตยอดฮิต</h2>
        </div>
      </div>
      
      <div class="flex-[2] grid grid-cols-2 grid-rows-2 gap-[15px]">
        <div class="bg-black/40 rounded-[15px] overflow-hidden relative cursor-pointer transition-transform border border-white/10 hover:scale-[1.02] hover:border-[#00ffff]">
          <div class="w-full h-full flex justify-center items-center text-center p-2.5 bg-gradient-to-br from-[#003366] to-[#006699]">
            <h3 class="text-xl text-white drop-shadow-[2px_2px_4px_black] m-0 z-[2]">ภารกิจพิชิต BONUS</h3>
          </div>
        </div>
        <div class="bg-black/40 rounded-[15px] overflow-hidden relative cursor-pointer transition-transform border border-white/10 hover:scale-[1.02] hover:border-[#00ffff]">
          <div class="w-full h-full flex justify-center items-center text-center p-2.5 bg-gradient-to-br from-[#330000] to-[#660000]">
            <h3 class="text-xl text-white drop-shadow-[2px_2px_4px_black] m-0 z-[2]">เกมใหม่ล่าสุด</h3>
          </div>
        </div>
        <div class="bg-black/40 rounded-[15px] overflow-hidden relative cursor-pointer transition-transform border border-white/10 hover:scale-[1.02] hover:border-[#00ffff]">
          <div class="w-full h-full flex justify-center items-center text-center p-2.5 bg-gradient-to-br from-[#003300] to-[#006600]">
            <h3 class="text-xl text-white drop-shadow-[2px_2px_4px_black] m-0 z-[2]">สมัครใหม่ รับโบนัสฟรี</h3>
          </div>
        </div>
        <div class="bg-black/40 rounded-[15px] overflow-hidden relative cursor-pointer transition-transform border border-white/10 hover:scale-[1.02] hover:border-[#00ffff]">
          <div class="w-full h-full flex justify-center items-center text-center p-2.5 bg-gradient-to-br from-[#330033] to-[#660066]">
            <h3 class="text-xl text-white drop-shadow-[2px_2px_4px_black] m-0 z-[2]">รวมเกมสล็อต ฟรีสปิน!</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
