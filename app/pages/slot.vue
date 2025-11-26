<template>
  <div class="h-full flex flex-col gap-4 p-8">
    <h1 class="text-2xl font-bold text-white drop-shadow-lg">ค่ายเกม</h1>
    <div class="grid grid-cols-4 gap-4">
      <!-- Game Provider Cards -->
      <div v-for="provider in providers" :key="provider.name" 
           class="relative rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-b from-[#00ffff]/20 to-[#0099ff]/20 border border-white/20 backdrop-blur-sm p-4 hover:scale-105 transition-transform duration-300">
        <div class="flex flex-col items-center gap-3">
          <div class="w-20 h-20 rounded-full bg-gradient-to-b from-[#01bcb6]/40 to-[#005c6e]/60 flex items-center justify-center border border-[#00ffff]/50 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
            <span class="text-3xl">{{ provider.icon }}</span>
          </div>
          <span class="text-white font-bold text-lg">{{ provider.name }}</span>
          <span class="text-white/60 text-sm">{{ provider.games }} เกม</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const providers = [
  { name: 'PG Soft', icon: '🎰', games: 120 },
  { name: 'Joker Gaming', icon: '🃏', games: 85 },
  { name: 'Pragmatic Play', icon: '💎', games: 200 },
  { name: 'Spadegaming', icon: '♠️', games: 95 },
  { name: 'JILI', icon: '🎲', games: 75 },
  { name: 'CQ9', icon: '🎮', games: 110 },
  { name: 'Habanero', icon: '🌶️', games: 65 },
  { name: 'Red Tiger', icon: '🐯', games: 80 },
]
</script>
