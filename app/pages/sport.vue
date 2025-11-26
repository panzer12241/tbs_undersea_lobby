<template>
  <div class="h-full flex flex-col gap-4 p-8">
    <h1 class="text-2xl font-bold text-white drop-shadow-lg">กีฬา</h1>
    <div class="grid grid-cols-3 gap-6">
      <!-- Sport Cards -->
      <div v-for="sport in sports" :key="sport.name" 
           class="relative rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-b from-[#22c55e]/20 to-[#16a34a]/20 border border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
        <div class="p-6 flex flex-col items-center gap-4">
          <div class="w-24 h-24 rounded-full bg-gradient-to-b from-[#22c55e]/40 to-[#16a34a]/60 flex items-center justify-center border-2 border-[#22c55e]/50 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
            <span class="text-5xl">{{ sport.icon }}</span>
          </div>
          <span class="text-white font-bold text-xl">{{ sport.name }}</span>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span class="text-green-400 text-sm">{{ sport.live }} แมตช์สด</span>
          </div>
          <div class="flex gap-2 flex-wrap justify-center">
            <span v-for="league in sport.leagues" :key="league" 
                  class="bg-white/10 text-white text-xs px-2 py-1 rounded-full">
              {{ league }}
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Live Matches -->
    <div class="mt-4">
      <h2 class="text-xl font-bold text-white mb-4">🔴 แมตช์สดตอนนี้</h2>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="match in liveMatches" :key="match.id"
             class="bg-gradient-to-r from-[#1e3a5f]/80 to-[#2d5a87]/80 rounded-xl p-4 border border-white/20">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="text-2xl">{{ match.homeIcon }}</span>
              <span class="text-white font-bold">{{ match.home }}</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-[#00ffff] font-bold text-xl">{{ match.score }}</span>
              <span class="text-white/50 text-xs">{{ match.time }}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-white font-bold">{{ match.away }}</span>
              <span class="text-2xl">{{ match.awayIcon }}</span>
            </div>
          </div>
          <div class="flex justify-center gap-4 mt-3">
            <button class="bg-gradient-to-r from-[#ffd700] to-[#ffaa00] text-black text-xs font-bold px-4 py-1 rounded-full hover:scale-105 transition-transform">
              เดิมพัน
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sports = [
  { name: 'ฟุตบอล', icon: '⚽', live: 45, leagues: ['พรีเมียร์ลีก', 'ลาลีกา', 'บุนเดสลีกา'] },
  { name: 'บาสเกตบอล', icon: '🏀', live: 12, leagues: ['NBA', 'EuroLeague'] },
  { name: 'เทนนิส', icon: '🎾', live: 8, leagues: ['ATP', 'WTA'] },
  { name: 'มวย', icon: '🥊', live: 3, leagues: ['มวยไทย', 'มวยสากล'] },
  { name: 'อีสปอร์ต', icon: '🎮', live: 15, leagues: ['LOL', 'DOTA2', 'CS2'] },
  { name: 'แบดมินตัน', icon: '🏸', live: 5, leagues: ['BWF', 'Super Series'] },
]

const liveMatches = [
  { id: 1, home: 'แมนยู', homeIcon: '🔴', away: 'ลิเวอร์พูล', awayIcon: '🔴', score: '2 - 1', time: '67\'' },
  { id: 2, home: 'บาร์เซโลนา', homeIcon: '🔵', away: 'เรอัล มาดริด', awayIcon: '⚪', score: '1 - 1', time: '45+2\'' },
  { id: 3, home: 'Lakers', homeIcon: '💜', away: 'Warriors', awayIcon: '💛', score: '98 - 102', time: 'Q4 8:23' },
  { id: 4, home: 'T1', homeIcon: '🎮', away: 'Gen.G', awayIcon: '🎮', score: '1 - 0', time: 'Game 2' },
]
</script>
