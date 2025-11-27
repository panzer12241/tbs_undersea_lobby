<template>
  <div class="h-full flex flex-col gap-6 overflow-y-auto">
    <!-- Header -->
    <div class="flex items-center justify-center">
      <img src="/images/promotion/x.svg" alt="โปรโมชั่น" class="h-16 w-auto" />
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
            <button @click="openModal(promo)" class="mt-3 w-full flex justify-center hover:scale-105 transition-transform">
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

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="closeModal"></div>
        
        <!-- Modal Content -->
        <div class="relative z-10 w-full max-w-2xl mx-4 bg-[#048A90] rounded-[20px] shadow-[0_0_30px_rgba(0,255,255,0.3)] overflow-hidden max-h-[90vh] overflow-y-auto">
          <!-- Close Button -->
          <button @click="closeModal" class="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#ff6b6b] hover:bg-[#ff5252] transition-colors z-20 shadow-lg">
            <span class="text-white text-2xl font-bold">&times;</span>
          </button>
          
          <!-- Header with Name -->
          <div class="relative flex items-center justify-center py-4 px-6">
            <!-- Background Image -->
            <img src="/images/promotion/bg-modal-title.png" alt="" class="absolute inset-0 w-full h-full object-cover" />
            <!-- Name text -->
            <h2 class="relative z-10 text-white font-bold text-2xl text-center">{{ selectedPromo?.name }}</h2>
          </div>
          
          <!-- Modal Body -->
          <div class="p-6">
            <div class="flex gap-6">
              <!-- Promotion Image -->
              <div class="w-1/3 flex-shrink-0">
                <div class="relative aspect-square rounded-[16px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                  <img 
                    :src="selectedPromo?.image" 
                    :alt="selectedPromo?.name"
                    class="w-full h-full object-contain bg-gradient-to-b from-[#1a3a5c] to-[#0d2744]"
                  />
                </div>
              </div>
              
              <!-- Promotion Details -->
              <div class="flex-1 flex flex-col gap-4">
                <!-- Slot Detail -->
                <div v-if="selectedPromo?.zone_slot">
                  <h3 class="text-white font-bold text-xl mb-2">สล็อต</h3>
                  <p class="text-white/90 text-lg leading-relaxed">{{ selectedPromo?.detail_slot }}</p>
                </div>
                
                <!-- Casino Detail -->
                <div v-if="selectedPromo?.zone_casino">
                  <h3 class="text-white font-bold text-xl mb-2">คาสิโน</h3>
                  <p class="text-white/90 text-lg leading-relaxed">{{ selectedPromo?.detail_casino }}</p>
                </div>
                
                <!-- Lotto Detail -->
                <div v-if="selectedPromo?.zone_lotto">
                  <h3 class="text-white font-bold text-xl mb-2">หวย</h3>
                  <p class="text-white/90 text-lg leading-relaxed">{{ selectedPromo?.detail_lotto }}</p>
                </div>
                
                <!-- Sport Detail -->
                <div v-if="selectedPromo?.zone_sport">
                  <h3 class="text-white font-bold text-xl mb-2">กีฬา</h3>
                  <p class="text-white/90 text-lg leading-relaxed">{{ selectedPromo?.detail_sport }}</p>
                </div>
              </div>
            </div>
            
            <!-- Action Button -->
            <div class="flex justify-center mt-6">
              <button class="hover:scale-105 transition-transform">
                <img src="/images/promotion/ปุ่มกดรับโบนัส.png" alt="กดรับโบนัส" class="h-12 w-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import type { Promotion } from '~/composables/api/useAppInfo'

const { register } = useAppInfo()

const loading = ref(false)
const showModal = ref(false)
const selectedPromo = ref<Promotion | null>(null)

// Get promotions from app info
const promotions = computed(() => register.value?.promotions || [])

// Open modal with selected promotion
const openModal = (promo: Promotion) => {
  selectedPromo.value = promo
  showModal.value = true
}

// Close modal
const closeModal = () => {
  showModal.value = false
  selectedPromo.value = null
}

// Handle image error
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.src = '/images/lobby/slot-hit.png' // Fallback image
}
</script>
