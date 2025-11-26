<template>
  <div class="h-full flex flex-col gap-4 p-8">
    <h1 class="text-2xl font-bold text-white drop-shadow-lg">ฝากเงิน</h1>
    <div class="grid grid-cols-2 gap-6">
      <!-- Left: Payment Methods -->
      <div class="bg-gradient-to-b from-[#00ffff]/10 to-[#0099ff]/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6">
        <h2 class="text-lg font-bold text-white mb-4">เลือกช่องทางฝากเงิน</h2>
        <div class="grid grid-cols-2 gap-3">
          <div v-for="method in paymentMethods" :key="method.name" 
               class="p-4 rounded-xl bg-white/10 border border-white/20 cursor-pointer hover:bg-white/20 hover:scale-105 transition-all duration-300 flex flex-col items-center gap-2">
            <span class="text-3xl">{{ method.icon }}</span>
            <span class="text-white font-bold text-sm">{{ method.name }}</span>
            <span class="text-green-400 text-xs">{{ method.time }}</span>
          </div>
        </div>
      </div>
      
      <!-- Right: Amount Selection -->
      <div class="bg-gradient-to-b from-[#00ffff]/10 to-[#0099ff]/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6">
        <h2 class="text-lg font-bold text-white mb-4">เลือกจำนวนเงิน</h2>
        <div class="grid grid-cols-3 gap-3 mb-6">
          <button v-for="amount in amounts" :key="amount" 
                  class="p-3 rounded-xl bg-gradient-to-b from-[#ffd700]/30 to-[#ff6b00]/30 border border-[#ffd700]/50 text-white font-bold hover:scale-105 transition-transform">
            ฿{{ amount.toLocaleString() }}
          </button>
        </div>
        <div class="flex flex-col gap-3">
          <input type="number" placeholder="หรือระบุจำนวนเงิน" 
                 class="w-full p-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-[#00ffff]" />
          <button class="w-full p-4 rounded-xl bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,136,0.4)]">
            ฝากเงิน
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const paymentMethods = [
  { name: 'TrueMoney Wallet', icon: '🟠', time: 'ทันที' },
  { name: 'PromptPay', icon: '🔵', time: 'ทันที' },
  { name: 'ธนาคาร', icon: '🏦', time: '1-3 นาที' },
  { name: 'QR Code', icon: '📱', time: 'ทันที' },
]

const amounts = [100, 300, 500, 1000, 3000, 5000]
</script>
