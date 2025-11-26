<template>
  <div class="h-full flex flex-col gap-4 p-8">
    <h1 class="text-2xl font-bold text-white drop-shadow-lg">ถอนเงิน</h1>
    <div class="grid grid-cols-2 gap-6">
      <!-- Left: Bank Account -->
      <div class="bg-gradient-to-b from-[#00ffff]/10 to-[#0099ff]/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6">
        <h2 class="text-lg font-bold text-white mb-4">บัญชีธนาคารของคุณ</h2>
        <div class="p-4 rounded-xl bg-gradient-to-r from-[#1e3a5f] to-[#2d5a87] border border-white/20">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full bg-[#1e4d2b] flex items-center justify-center border-2 border-[#00ff00]/50">
              <span class="text-2xl">🏦</span>
            </div>
            <div class="flex flex-col">
              <span class="text-white font-bold text-lg">กสิกรไทย</span>
              <span class="text-white/70">xxx-x-x1234-x</span>
              <span class="text-white/50 text-sm">วรชาติ อุดมเดช</span>
            </div>
          </div>
        </div>
        
        <div class="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
          <div class="flex justify-between items-center mb-2">
            <span class="text-white/70">ยอดเงินคงเหลือ</span>
            <span class="text-[#00ffff] font-bold text-xl">฿8,900.00</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-white/70">ถอนได้สูงสุด</span>
            <span class="text-green-400 font-bold">฿8,900.00</span>
          </div>
        </div>
      </div>
      
      <!-- Right: Amount Selection -->
      <div class="bg-gradient-to-b from-[#00ffff]/10 to-[#0099ff]/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6">
        <h2 class="text-lg font-bold text-white mb-4">เลือกจำนวนเงินถอน</h2>
        <div class="grid grid-cols-3 gap-3 mb-6">
          <button v-for="amount in amounts" :key="amount" 
                  class="p-3 rounded-xl bg-gradient-to-b from-[#ff6b6b]/30 to-[#c92a2a]/30 border border-[#ff6b6b]/50 text-white font-bold hover:scale-105 transition-transform">
            ฿{{ amount.toLocaleString() }}
          </button>
        </div>
        <div class="flex flex-col gap-3">
          <input type="number" placeholder="หรือระบุจำนวนเงิน" 
                 class="w-full p-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-[#00ffff]" />
          <button class="w-full p-4 rounded-xl bg-gradient-to-r from-[#ff6b6b] to-[#c92a2a] text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,107,107,0.4)]">
            ถอนเงิน
          </button>
          <p class="text-white/50 text-xs text-center">* ถอนขั้นต่ำ 100 บาท | ถอนสูงสุด 50,000 บาท/ครั้ง</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const amounts = [100, 500, 1000, 3000, 5000, 8900]
</script>
