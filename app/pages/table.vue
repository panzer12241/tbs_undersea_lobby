<template>
  <div class="h-full flex flex-col gap-4 p-8">
    <h1 class="text-2xl font-bold text-white drop-shadow-lg">เกมโต๊ะ</h1>
    <div class="grid grid-cols-4 gap-4">
      <!-- Table Game Cards -->
      <div v-for="game in tableGames" :key="game.name" 
           class="relative rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-b from-[#228b22]/20 to-[#006400]/20 border border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
        <div class="p-5 flex flex-col items-center gap-3">
          <div class="w-20 h-20 rounded-xl bg-gradient-to-b from-[#32cd32]/30 to-[#228b22]/50 flex items-center justify-center border border-[#00ff00]/30 shadow-[0_0_15px_rgba(0,255,0,0.2)]">
            <span class="text-4xl">{{ game.icon }}</span>
          </div>
          <span class="text-white font-bold text-lg text-center">{{ game.name }}</span>
          <div class="flex gap-1">
            <span v-for="i in game.rating" :key="i" class="text-yellow-400">⭐</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tableGames = [
  { name: 'ป๊อกเด้ง', icon: '🎴', rating: 5 },
  { name: 'ไพ่แคง', icon: '🃏', rating: 4 },
  { name: 'ดัมมี่', icon: '🀄', rating: 5 },
  { name: 'ไพ่เสือมังกร', icon: '🐅', rating: 4 },
  { name: 'น้ำเต้าปูปลา', icon: '🦀', rating: 5 },
  { name: 'ไฮโลไทย', icon: '🎲', rating: 5 },
  { name: 'ไพ่สามกอง', icon: '🎰', rating: 4 },
  { name: 'กำถั่ว', icon: '🫘', rating: 3 },
]
</script>
