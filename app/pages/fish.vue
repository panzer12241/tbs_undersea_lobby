<template>
  <div class="h-full flex flex-col gap-4 overflow-y-auto">
    <!-- Header with Title and Search -->
    <div class="flex items-center justify-between sticky top-0 bg-transparent z-10 pb-2">
      <h1 class="text-2xl font-bold text-white drop-shadow-lg">เกมยิงปลา</h1>
      <div class="relative">
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="ค้นหาเกม..." 
          class="w-[200px] px-4 py-2 rounded-full bg-[#e0f7f7] text-[#005c6e] placeholder-[#005c6e]/60 border-2 border-[#00ffff]/50 focus:outline-none focus:border-[#00ffff] text-sm"
        />
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex-1 flex items-center justify-center">
      <div class="flex flex-col items-center gap-4">
        <div class="w-12 h-12 border-4 border-[#00ffff]/30 border-t-[#00ffff] rounded-full animate-spin"></div>
        <span class="text-white/70">กำลังโหลด...</span>
      </div>
    </div>

    <!-- Fish Games Grid -->
    <div v-else class="grid grid-cols-5 gap-4 pb-4">
      <div v-for="game in filteredGames" :key="game.game_id" 
           class="relative cursor-pointer group hover:scale-[1.02] transition-transform duration-300">
        <!-- Card Container -->
        <div class="relative rounded-[20px] overflow-hidden bg-[#00FFCE]/50 border border-[#707070] shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-1">
          <!-- Game Image -->
          <div class="relative aspect-square rounded-[16px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.3)]">
            <img 
              :src="game.img" 
              :alt="game.name"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              @error="handleImageError"
            />
            
            <!-- Favorite Button -->
            <button class="absolute bottom-4 right-2 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <img src="/images/lobby/favorite-uncheck.png" alt="Favorite" class="w-full h-full object-contain" />
            </button>
          </div>

          <!-- Float Shadow -->
          <div class="flex justify-center mt-1 mb-1">
            <div class="w-[70%] h-3 bg-black/30 rounded-[50%] blur-[3px]"></div>
          </div>
          
          <!-- Game Info - Bottom Section -->
          <div class="px-4 py-2">
            <span class="text-white/80 text-lg">{{ game.zone }}</span>
            <h3 class="text-white font-bold text-xl uppercase tracking-wide">{{ game.name }}</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="!loading && filteredGames.length === 0" class="flex-1 flex items-center justify-center">
      <div class="flex flex-col items-center gap-4">
        <span class="text-4xl">🔍</span>
        <span class="text-white/70">ไม่พบเกมที่ค้นหา</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FishGame {
  game_id: number
  provider_id: number
  img: string
  code: string
  name: string
  provider: string
  zone: string
  click: number
  created_at: string
}

const config = useRuntimeConfig()
const baseUrl = config.public.apiBaseUrl

const games = ref<FishGame[]>([])
const loading = ref(true)
const searchQuery = ref('')

// Fetch games on mount
const { data, pending, error } = await useFetch<FishGame[]>(`${baseUrl}/api/v1/lobby/fish`)

watchEffect(() => {
  loading.value = pending.value
  if (data.value) {
    games.value = data.value
  }
  if (error.value) {
    console.error('Error fetching fish games:', error.value)
  }
})

// Filter games based on search query
const filteredGames = computed(() => {
  if (!searchQuery.value) return games.value
  
  const query = searchQuery.value.toLowerCase()
  return games.value.filter(game => 
    game.name.toLowerCase().includes(query)
  )
})

// Handle image error
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = '/images/lobby/slot-hit.png' // Fallback image
}
</script>
