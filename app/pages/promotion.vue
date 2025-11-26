<template>
  <div class="h-full flex flex-col gap-6 overflow-y-auto">
    <!-- Header -->
    <div class="flex items-center justify-center gap-3">
      <img src="/images/bottom-menu/promotion.png" alt="Promotion" class="w-12 h-12" />
      <h1 class="text-3xl font-bold text-white drop-shadow-lg">โปรโมชั่น</h1>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex-1 flex items-center justify-center">
      <div class="flex flex-col items-center gap-4">
        <div class="w-12 h-12 border-4 border-[#00ffff]/30 border-t-[#00ffff] rounded-full animate-spin"></div>
        <span class="text-white/70">กำลังโหลด...</span>
      </div>
    </div>

    <!-- Promotions Grid -->
    <div v-else class="grid grid-cols-4 gap-6 pb-4">
      <div v-for="promo in promotions" :key="promo.id" 
           class="relative cursor-pointer group hover:scale-[1.02] transition-transform duration-300">
        <!-- Card Container -->
        <div class="relative rounded-[20px] overflow-hidden bg-[#00FFCE]/50 border border-[#707070] shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-2">
          <!-- Promotion Image -->
          <div class="relative aspect-square rounded-[16px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
            <img 
              :src="promo.image" 
              :alt="promo.name"
              class="w-full h-full object-contain bg-gradient-to-b from-[#1a3a5c] to-[#0d2744] transition-transform duration-300 group-hover:scale-105"
              @error="handleImageError"
            />
          </div>

          <!-- Float Shadow -->
          <div class="flex justify-center mt-1 mb-1">
            <div class="w-[70%] h-3 bg-black/30 rounded-[50%] blur-[3px]"></div>
          </div>
          
          <!-- Promotion Info -->
          <div class="px-3 py-2 text-center">
            <h3 class="text-white font-bold text-base line-clamp-1">{{ promo.name }}</h3>
            
            <!-- Detail Button -->
            <button class="mt-3 w-full flex justify-center hover:scale-105 transition-transform">
              <img src="/images/promotion/select-btn.png" alt="รายละเอียด" class="w-auto h-30" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="!loading && promotions.length === 0" class="flex-1 flex items-center justify-center">
      <div class="flex flex-col items-center gap-4">
        <span class="text-4xl">🎁</span>
        <span class="text-white/70">ไม่มีโปรโมชั่นในขณะนี้</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Promotion } from '~/composables/api/useAppInfo'

const { register } = useAppInfo()

const loading = ref(false)

// Get promotions from app info
const promotions = computed(() => register.value?.promotions || [])

// Handle image error
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = '/images/lobby/slot-hit.png' // Fallback image
}
</script>
