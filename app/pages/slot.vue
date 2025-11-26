<template>
  <div class="h-full flex flex-col gap-4 overflow-y-auto">
    <!-- Header with Title and Search -->
    <div class="flex items-center justify-between sticky top-0 bg-transparent z-10 pb-2">
      <h1 class="text-2xl font-bold text-white drop-shadow-lg">ค่ายเกม</h1>
      <div class="relative">
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="ค้นหาค่ายเกม..." 
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

    <!-- Game Providers Grid -->
    <div v-else class="grid grid-cols-5 gap-4 pb-4">
      <div v-for="provider in filteredProviders" :key="provider.provider_id" 
           class="relative cursor-pointer group hover:scale-[1.02] transition-transform duration-300">
        <!-- Card Container -->
        <div class="relative rounded-[20px] overflow-hidden bg-[#00FFCE]/50 border border-[#707070] shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-1">
          <!-- Provider Image -->
          <div class="relative aspect-square rounded-[16px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.3)]">
            <img 
              :src="provider.img" 
              :alt="provider.name"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              @error="handleImageError"
            />
            
            <!-- Favorite Button -->
            <button class="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <img src="/images/lobby/favorite-uncheck.png" alt="Favorite" class="w-full h-full object-contain" />
            </button>
          </div>

            <!-- Float Shadow -->
          <div class="flex justify-center mt-1 mb-1">
            <div class="w-[70%] h-3 bg-black/30 rounded-[50%] blur-[3px]"></div>
          </div>
          
      
          <!-- Provider Info - Bottom Section -->
          <div class="px-4 py-2">
            <span class="text-white/80 text-sm">{{ provider.category }}</span>
            <h3 class="text-white font-bold text-xl uppercase tracking-wide">{{ provider.name }}</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="!loading && filteredProviders.length === 0" class="flex-1 flex items-center justify-center">
      <div class="flex flex-col items-center gap-4">
        <span class="text-4xl">🔍</span>
        <span class="text-white/70">ไม่พบค่ายเกมที่ค้นหา</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SlotProvider } from '~/composables/api/useSlotApi'

const config = useRuntimeConfig()
const baseUrl = config.public.apiBaseUrl

const providers = ref<SlotProvider[]>([])
const loading = ref(true)
const searchQuery = ref('')

// Fetch providers on mount
const { data, pending, error } = await useFetch<SlotProvider[]>(`${baseUrl}/api/v1/lobby/slot`)

watchEffect(() => {
  loading.value = pending.value
  if (data.value) {
    providers.value = data.value
  }
  if (error.value) {
    console.error('Error fetching providers:', error.value)
  }
})

// Filter providers based on search query
const filteredProviders = computed(() => {
  if (!searchQuery.value) return providers.value
  
  const query = searchQuery.value.toLowerCase()
  return providers.value.filter(provider => 
    provider.name.toLowerCase().includes(query) ||
    provider.code.toLowerCase().includes(query) ||
    provider.category.toLowerCase().includes(query)
  )
})

// Check if provider is new (created within last 30 days)
const isNew = (createdAt: string): boolean => {
  const created = new Date(createdAt)
  const now = new Date()
  const diffDays = Math.floor((now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24))
  return diffDays <= 30
}

// Handle image error
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = '/images/lobby/slot-hit.png' // Fallback image
}
</script>
