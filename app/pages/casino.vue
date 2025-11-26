<template>
  <div class="h-full flex flex-col gap-4 p-8">
    <h1 class="text-2xl font-bold text-white drop-shadow-lg">คาสิโนสด</h1>
    <div class="grid grid-cols-3 gap-4">
      <!-- Casino Game Cards -->
      <div v-for="game in casinoGames" :key="game.name" 
           class="relative rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-b from-[#ff6b6b]/20 to-[#c92a2a]/20 border border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
        <div class="p-6 flex flex-col items-center gap-4">
          <div class="w-24 h-24 rounded-full bg-gradient-to-b from-[#ffd700]/40 to-[#b8860b]/60 flex items-center justify-center border-2 border-[#ffd700]/50 shadow-[0_0_20px_rgba(255,215,0,0.4)]">
            <span class="text-4xl">{{ game.icon }}</span>
          </div>
          <span class="text-white font-bold text-xl">{{ game.name }}</span>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span class="text-green-400 text-sm">{{ game.live }} โต๊ะเปิด</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const casinoGames = [
  { name: 'บาคาร่า', icon: '🎴', live: 25 },
  { name: 'รูเล็ต', icon: '🎡', live: 10 },
  { name: 'แบล็คแจ็ค', icon: '🃏', live: 8 },
  { name: 'ไฮโล', icon: '🎲', live: 15 },
  { name: 'เสือมังกร', icon: '🐲', live: 12 },
  { name: 'ซิกโบ', icon: '🎯', live: 6 },
]
</script>
