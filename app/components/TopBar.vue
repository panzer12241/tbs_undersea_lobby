<template>
  <div class="h-32 w-full relative z-10 flex justify-center font-sans">
    <!-- Background Image -->
    <img src="/images/header.png" alt="Header Background" class="absolute top-0 left-0 w-full h-full object-fill z-10" />

    <!-- Content Container -->
    <div class="grid grid-cols-[1fr_0.8fr_1fr] w-full h-full max-w-[1400px] mx-auto px-4 relative z-20">
      
      <!-- Left Section: Balances -->
      <div class="grid grid-cols-3 gap-3 h-full pb-4 w-full items-center">
        <!-- Coin Balance -->
        <div class="relative flex items-center px-1 py-1 w-full h-[36px]">
          <div class="absolute inset-0 w-full h-full rounded-full bg-[#01bcb6]/20 border border-white/30 shadow-[0_0_6px_#ffffff] mix-blend-overlay">
            <div class="absolute inset-0 rounded-full shadow-[inset_0_4px_8px_rgba(255,255,255,0.3)]"></div>
          </div>
          <img src="/images/coin.png" alt="Coin" class="w-9 h-9 z-10 -ml-1 drop-shadow-lg" />
          <span class="relative z-10 text-white font-bold text-sm ml-2 drop-shadow-md">฿8,900.00</span>
          <button class="relative z-10 hover:scale-110 transition-transform ml-auto -mr-1">
            <img src="/images/add-bt.png" alt="Add" class="w-[40px] h-[40px]" />
          </button>
        </div>

        <!-- Diamond Balance -->
        <div class="relative flex items-center px-1 py-1 w-full h-[36px]">
           <div class="absolute inset-0 w-full h-full rounded-full bg-[#01bcb6]/20 border border-white/30 shadow-[0_0_6px_#ffffff] mix-blend-overlay">
            <div class="absolute inset-0 rounded-full shadow-[inset_0_4px_8px_rgba(255,255,255,0.3)]"></div>
          </div>
          <img src="/images/dimon.png" alt="Diamond" class="w-8 h-8 z-10 -ml-1 drop-shadow-lg" />
          <span class="relative z-10 text-white font-bold text-sm ml-2 drop-shadow-md">99.00</span>
        </div>

        <!-- Point Balance -->
        <div class="relative flex items-center px-1 py-1 w-full h-[36px]">
           <div class="absolute inset-0 w-full h-full rounded-full bg-[#01bcb6]/20 border border-white/30 shadow-[0_0_6px_#ffffff] mix-blend-overlay">
            <div class="absolute inset-0 rounded-full shadow-[inset_0_4px_8px_rgba(255,255,255,0.3)]"></div>
          </div>
          <img src="/images/point.png" alt="Point" class="w-8 h-8 z-10 -ml-1 drop-shadow-lg" />
          <span class="relative z-10 text-white font-bold text-sm ml-2 drop-shadow-md">99.00</span>
        </div>

      </div>

      <!-- Center Logo -->
      <div class="flex items-center justify-center h-full pb-4">
        <div class="hover:scale-105 transition-transform duration-300">
          <img :src="prefix?.image_logo || '/images/logo.png'" :alt="prefix?.web_name || 'Logo'" class="h-[55px] object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
        </div>
      </div>

      <!-- Right Section: Profile & Buttons -->
      <div class="grid grid-cols-[2fr_1fr] gap-4 h-full pb-4 w-full items-center">
        <!-- Group 1: Profile & Power (when logged in) -->
        <div v-if="isLoggedIn" class="relative flex items-center px-1 py-1 h-[46px] w-full">
           <div class="absolute inset-0 w-full h-full rounded-full bg-[#01bcb6]/20 border border-white/30 shadow-[0_0_6px_#ffffff] mix-blend-overlay">
            <div class="absolute inset-0 rounded-full shadow-[inset_0_4px_8px_rgba(255,255,255,0.3)]"></div>
          </div>
          <div class="relative z-10 mr-3">
            <img src="/images/profile.png" alt="Profile" class="w-11 h-11 rounded-full border border-[#00ffff] shadow-[0_0_5px_#00ffff]" />
          </div>
          <div class="relative z-10 flex flex-col items-start leading-none justify-center">
            <span class="text-white font-bold text-base drop-shadow-md">{{ userName }}</span>
            <span class="text-white/60 text-[10px] mt-[1px]">ID: {{ userGameUsername }}</span>
          </div>
          <!-- Power Button -->
          <button @click="handleLogout" class="relative z-10 hover:scale-105 transition-transform ml-auto -mr-2">
            <img src="/images/logout-bt.png" alt="Logout" class="w-[52px] h-[52px] drop-shadow-md" />
          </button>
        </div>

        <!-- Group 1: Login & Register Buttons (when not logged in) -->
        <div v-else class="flex items-center gap-3 w-full">
          <!-- Login Button -->
          <button @click="openLoginModal" class="relative flex-1 h-[42px] rounded-full bg-gradient-to-r from-[#00d4aa] to-[#00b894] border border-white/40 shadow-[0_0_10px_rgba(0,255,206,0.4)] hover:scale-105 transition-transform flex items-center justify-center">
            <span class="text-white font-bold text-sm drop-shadow-md">เข้าสู่ระบบ</span>
          </button>
          <!-- Register Button -->
          <button @click="openRegisterModal" class="relative flex-1 h-[42px] rounded-full bg-gradient-to-r from-[#ffd700] to-[#ffb300] border border-white/40 shadow-[0_0_10px_rgba(255,215,0,0.4)] hover:scale-105 transition-transform flex items-center justify-center">
            <span class="text-white font-bold text-sm drop-shadow-md">สมัครสมาชิก</span>
          </button>
        </div>

        <!-- Group 2: Search & Settings -->
        <div class="flex items-center justify-end gap-2 w-full">
          <!-- Search Game -->
          <div class="flex flex-col items-center justify-center relative group cursor-pointer">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#01bcb6]/40 border border-white/30 shadow-[0_0_10px_#00ffff] z-0"></div>
            <img src="/images/card.png" alt="Search" class="w-11 h-11 z-10 hover:-translate-y-1 transition-transform mb-[-8px]" />
            <div class="bg-[#005c6e] text-white text-[10px] px-2 py-[1px] rounded-full border border-[#00ffff]/30 shadow-[0_0_5px_#00ffff/50] z-20">
              ค้นหาเกม
            </div>
          </div>

          <!-- Settings -->
          <div class="flex flex-col items-center justify-center relative group cursor-pointer">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#01bcb6]/40 border border-white/30 shadow-[0_0_10px_#00ffff] z-0"></div>
            <img src="/images/setting.png" alt="Settings" class="w-11 h-11 z-10 hover:-translate-y-1 transition-transform mb-[-8px]" />
            <div class="bg-[#006e00] text-white text-[10px] px-3 py-[1px] rounded-full border border-[#00ff00]/30 shadow-[0_0_5px_#00ff00/50] z-20">
              ตั้งค่า
            </div>
          </div>
        </div>
      </div>

    </div>
    
    <!-- Marquee Bar -->
    <div class="absolute top-[calc(100%-18px)] left-0 w-full h-[40px] bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.1)_50%,transparent_100%)] z-0 overflow-hidden flex items-center border-t border-[#00ffff]/30">
      <div class="whitespace-nowrap animate-marquee text-white text-xs font-bold drop-shadow-[0_0_2px_rgba(0,0,0,0.8)] flex items-center gap-4">
        <span>📕 ลงทะเบียนวันนี้! เงินฟรี สล็อตออนไลน์ฟรีเครดิต ไม่ต้องฝาก</span>
        <span>📕 ลงทะเบียนวันนี้! เงินฟรี สล็อตออนไลน์ฟรีเครดิต ไม่ต้องฝาก</span>
        <span>📕 ลงทะเบียนวันนี้! เงินฟรี สล็อตออนไลน์ฟรีเครดิต ไม่ต้องฝาก</span>
        <span>📕 ลงทะเบียนวันนี้! เงินฟรี สล็อตออนไลน์ฟรีเครดิต ไม่ต้องฝาก</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { prefix } = useAppInfo()
const { openLoginModal, openRegisterModal } = useAuthModal()
const { isLoggedIn, userName, userGameUsername, logout, initAuth, token } = useAuth()
const toast = useToast()

// Initialize auth on client side
onMounted(() => {
  initAuth()
})

// Handle logout
const handleLogout = async () => {
  try {
    // Call logout API
    await fetch('https://api.maxnano.app/api/v1/auth/logout', {
      method: 'GET',
      headers: {
        'token': token.value || ''
      }
    })
  } catch (error) {
    console.error('Logout API error:', error)
  }
  
  // Clear local auth data
  logout()
  toast.success('ออกจากระบบสำเร็จ')
}
</script>

<style scoped>
.animate-marquee {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
