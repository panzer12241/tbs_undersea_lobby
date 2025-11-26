<template>
  <div class="h-full flex flex-col gap-4 p-8">
    <h1 class="text-2xl font-bold text-white drop-shadow-lg">เกมโปรด</h1>
    
    <div v-if="favoriteGames.length === 0" class="flex-1 flex flex-col items-center justify-center gap-4">
      <span class="text-6xl">💔</span>
      <span class="text-white/70 text-lg">ยังไม่มีเกมโปรด</span>
      <span class="text-white/50 text-sm">กดปุ่ม ❤️ ที่เกมที่ชอบเพื่อเพิ่มเข้ารายการโปรด</span>
    </div>
    
    <div v-else class="grid grid-cols-5 gap-4">
      <div v-for="game in favoriteGames" :key="game.name" 
           class="relative rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-b from-[#ff6b6b]/20 to-[#c92a2a]/20 border border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
        <div class="absolute top-2 right-2 z-10">
          <button class="text-2xl hover:scale-125 transition-transform">❤️</button>
        </div>
        <div class="p-4 flex flex-col items-center gap-3">
          <div class="w-16 h-16 rounded-xl bg-gradient-to-b from-white/20 to-white/10 flex items-center justify-center">
            <span class="text-3xl">{{ game.icon }}</span>
          </div>
          <span class="text-white font-bold text-sm text-center">{{ game.name }}</span>
          <span class="text-white/50 text-xs">{{ game.provider }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const favoriteGames = [
  { name: 'Fortune Tiger', icon: '🐯', provider: 'PG Soft' },
  { name: 'Sweet Bonanza', icon: '🍭', provider: 'Pragmatic' },
  { name: 'Gates of Olympus', icon: '⚡', provider: 'Pragmatic' },
  { name: 'Mahjong Ways', icon: '🀄', provider: 'PG Soft' },
  { name: 'Wild Bandito', icon: '🤠', provider: 'PG Soft' },
]
</script>
