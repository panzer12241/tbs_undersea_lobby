<template>
  <div class="h-full flex flex-col gap-4 p-8">
    <h1 class="text-2xl font-bold text-white drop-shadow-lg">อาร์เคต</h1>
    <div class="grid grid-cols-4 gap-4">
      <!-- Arcade Game Cards -->
      <div v-for="game in arcadeGames" :key="game.name" 
           class="relative rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-b from-[#9b59b6]/20 to-[#8e44ad]/20 border border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
        <div class="p-5 flex flex-col items-center gap-3">
          <div class="w-20 h-20 rounded-2xl bg-gradient-to-b from-[#e056fd]/30 to-[#9b59b6]/50 flex items-center justify-center border border-[#e056fd]/40 shadow-[0_0_20px_rgba(224,86,253,0.3)] animate-pulse">
            <span class="text-4xl">{{ game.icon }}</span>
          </div>
          <span class="text-white font-bold text-lg text-center">{{ game.name }}</span>
          <span class="text-[#e056fd] text-xs">{{ game.type }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const arcadeGames = [
  { name: 'Plinko', icon: '🔴', type: 'ดรอปบอล' },
  { name: 'Mines', icon: '💣', type: 'กู้ระเบิด' },
  { name: 'Dice', icon: '🎲', type: 'ทายเลข' },
  { name: 'Crash', icon: '🚀', type: 'จรวด' },
  { name: 'Hilo', icon: '🔼', type: 'สูง-ต่ำ' },
  { name: 'Wheel', icon: '🎡', type: 'วงล้อ' },
  { name: 'Keno', icon: '🔢', type: 'ทายตัวเลข' },
  { name: 'Limbo', icon: '📈', type: 'ทายตัวคูณ' },
]
</script>
