<template>
  <Teleport to="body">
    <div v-if="showLoginModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="closeLoginModal"></div>
      
      <!-- Login Card -->
      <div class="relative z-10 w-full max-w-md bg-[#048A90]/80 backdrop-blur-sm rounded-[20px] shadow-[0_0_30px_rgba(0,255,255,0.3)] overflow-hidden">
        <!-- Close Button -->
        <button @click="closeLoginModal" class="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#ff6b6b] hover:bg-[#ff5252] transition-colors z-20 shadow-lg">
          <span class="text-white text-2xl font-bold">&times;</span>
        </button>

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
                v-model="displayPhone"
                type="tel"
                placeholder="0XX-XXX-XXXX"
                maxlength="12"
                @input="handlePhoneInput"
                @keypress="onlyNumber"
                class="w-full h-[50px] px-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCE] focus:ring-2 focus:ring-[#00FFCE]/30"
                :class="{ 'border-red-500': phoneError }"
              />
              <p v-if="phoneError" class="text-red-400 text-xs mt-1">{{ phoneError }}</p>
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
                <button type="button" class="text-[#00FFCE] text-sm hover:underline">
                  ลืมรหัสผ่าน?
                </button>
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
            <button @click="switchToRegister" class="text-[#00FFCE] font-bold hover:underline">
              สมัครสมาชิก
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const { showLoginModal, closeLoginModal, openRegisterModal } = useAuthModal()

const phone = ref('')
const displayPhone = ref('')
const password = ref('')
const phoneError = ref('')

// Valid phone prefixes
const validPrefixes = ['02', '04', '06', '08', '09']

// Switch to register modal
const switchToRegister = () => {
  openRegisterModal()
}

// Only allow numbers
const onlyNumber = (event: KeyboardEvent) => {
  const char = String.fromCharCode(event.keyCode || event.which)
  if (!/[0-9]/.test(char)) {
    event.preventDefault()
  }
}

// Format phone with mask: 0XX-XXX-XXXX
const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, '')
  if (digits.length <= 3) {
    return digits
  } else if (digits.length <= 6) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`
  } else {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`
  }
}

// Handle phone input with validation
const handlePhoneInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  const digits = input.value.replace(/\D/g, '')
  
  // Limit to 10 digits
  const limitedDigits = digits.slice(0, 10)
  phone.value = limitedDigits
  displayPhone.value = formatPhone(limitedDigits)
  
  // Validate prefix
  if (limitedDigits.length >= 2) {
    const prefix = limitedDigits.slice(0, 2)
    if (!validPrefixes.includes(prefix)) {
      phoneError.value = 'เบอร์โทรต้องขึ้นต้นด้วย 02, 04, 06, 08 หรือ 09'
    } else {
      phoneError.value = ''
    }
  } else {
    phoneError.value = ''
  }
}

const handleLogin = () => {
  // Validate before submit
  if (phone.value.length !== 10) {
    phoneError.value = 'กรุณากรอกเบอร์โทร 10 หลัก'
    return
  }
  
  const prefix = phone.value.slice(0, 2)
  if (!validPrefixes.includes(prefix)) {
    phoneError.value = 'เบอร์โทรต้องขึ้นต้นด้วย 02, 04, 06, 08 หรือ 09'
    return
  }
  
  // TODO: Implement login logic
  console.log('Login:', { phone: phone.value, password: password.value })
  
  // Close modal on success
  closeLoginModal()
}
</script>
