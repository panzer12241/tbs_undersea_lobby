<template>
  <div class="h-full flex flex-col gap-4 p-8">
    <h1 class="text-2xl font-bold text-white drop-shadow-lg">เกมยิงปลา</h1>
    <div class="grid grid-cols-3 gap-4">
      <!-- Fish Game Cards -->
      <div v-for="game in fishGames" :key="game.name" 
           class="relative rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-b from-[#00b4d8]/20 to-[#0077b6]/20 border border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
        <div class="p-6 flex flex-col items-center gap-4">
          <div class="w-28 h-28 rounded-full bg-gradient-to-b from-[#00ffff]/30 to-[#0099cc]/50 flex items-center justify-center border-2 border-[#00ffff]/40 shadow-[0_0_25px_rgba(0,255,255,0.3)]">
            <span class="text-5xl">{{ game.icon }}</span>
          </div>
          <span class="text-white font-bold text-xl">{{ game.name }}</span>
          <span class="text-[#00ffff] text-sm">{{ game.provider }}</span>
          <div class="bg-gradient-to-r from-[#ffd700] to-[#ffaa00] text-black text-xs font-bold px-3 py-1 rounded-full">
            {{ game.bonus }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const fishGames = [
  { name: 'Ocean King', icon: '🐙', provider: 'JILI', bonus: 'x1000 Max' },
  { name: 'Fish Hunter', icon: '🦈', provider: 'Spadegaming', bonus: 'x500 Max' },
  { name: 'Fishing God', icon: '🐋', provider: 'CQ9', bonus: 'x888 Max' },
  { name: 'Dragon Fortune', icon: '🐉', provider: 'PG Soft', bonus: 'x1500 Max' },
  { name: 'Golden Toad', icon: '🐸', provider: 'Joker', bonus: 'x777 Max' },
  { name: 'Mermaid Riches', icon: '🧜‍♀️', provider: 'PG Soft', bonus: 'x2000 Max' },
]
</script>
