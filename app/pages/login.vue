<template>
  <div class="h-full flex items-center justify-center p-4">
    <!-- Login Card -->
    <div class="w-full max-w-md bg-[#048A90]/80 backdrop-blur-sm rounded-[20px] shadow-[0_0_30px_rgba(0,255,255,0.3)] overflow-hidden">
      <!-- Title -->
      <div class="relative flex items-center justify-center py-4 px-6">
        <img src="/images/login/bg-modal-title.png" alt="" class="absolute inset-0 w-full h-full object-cover" />
        <h1 class="relative z-10 text-white font-bold text-2xl text-center">เข้าสู่ระบบสมาชิก</h1>
      </div>
      
      <!-- Form -->
      <div class="p-6">
        <form @submit.prevent="handleLogin" class="flex flex-col gap-6">
        <!-- Phone Input -->
        <div class="relative">
          <label class="absolute -top-3 left-4 bg-[#048A90] px-2 text-white/80 text-sm rounded">
            เบอร์โทรศัพท์มือถือ
          </label>
          <input 
            v-model="phone"
            type="tel"
            placeholder="091999"
            class="w-full h-[50px] px-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCE] focus:ring-2 focus:ring-[#00FFCE]/30"
          />
        </div>
        
        <!-- Password Input -->
        <div class="relative">
          <label class="absolute -top-3 left-4 bg-[#048A90] px-2 text-white/80 text-sm rounded">
            รหัสผ่านหรือเลขบัญชีธนาคาร
          </label>
          <input 
            v-model="password"
            type="password"
            placeholder="ระบุรหัสผ่าน"
            class="w-full h-[50px] px-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCE] focus:ring-2 focus:ring-[#00FFCE]/30"
          />
          <!-- Forgot Password -->
          <div class="text-right mt-2">
            <NuxtLink to="/forgot-password" class="text-[#00FFCE] text-sm hover:underline">
              ลืมรหัสผ่าน?
            </NuxtLink>
          </div>
        </div>
        
        <!-- Login Button -->
        <button 
          type="submit"
          class="w-full flex justify-center hover:scale-105 transition-transform mt-2"
        >
          <img src="/images/login/login-btn.png" alt="เข้าสู่ระบบ" class="h-14 w-auto" />
        </button>
        </form>
      
        <!-- Register Link -->
        <div class="text-center mt-6">
          <span class="text-white/80">ยังไม่ได้เป็นสมาชิกหรือเปล่า? </span>
          <NuxtLink to="/register" class="text-[#00FFCE] font-bold hover:underline">
            สมัครสมาชิก
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const phone = ref('')
const password = ref('')

const handleLogin = () => {
  // TODO: Implement login logic
  console.log('Login:', { phone: phone.value, password: password.value })
}
</script>
