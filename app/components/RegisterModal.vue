<template>
  <Teleport to="body">
    <div v-if="showRegisterModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="closeRegisterModal"></div>
      
      <!-- Register Card -->
      <div class="relative z-10 w-full max-w-md bg-[#048A90]/80 backdrop-blur-sm rounded-[20px] shadow-[0_0_30px_rgba(0,255,255,0.3)] overflow-hidden max-h-[90vh] overflow-y-auto">
        <!-- Close Button -->
        <button @click="closeRegisterModal" class="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#ff6b6b] hover:bg-[#ff5252] transition-colors z-20 shadow-lg">
          <span class="text-white text-2xl font-bold">&times;</span>
        </button>

        <!-- Title -->
        <div class="relative flex items-center justify-center py-4 px-6">
          <img src="/images/login/bg-modal-title.png" alt="" class="absolute inset-0 w-full h-full object-cover" />
          <h1 class="relative z-10 text-white font-bold text-2xl text-center">สมัครสมาชิก</h1>
        </div>
        
        <!-- Form -->
        <div class="p-6">
          <form @submit.prevent="handleRegister" class="flex flex-col gap-5">
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
                รหัสผ่าน
              </label>
              <input 
                v-model="password"
                type="password"
                placeholder="ระบุรหัสผ่าน"
                class="w-full h-[50px] px-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCE] focus:ring-2 focus:ring-[#00FFCE]/30"
              />
            </div>

            <!-- Name Input -->
            <div class="relative">
              <label class="absolute -top-3 left-4 bg-[#048A90] px-2 text-white/80 text-sm rounded">
                ชื่อ-นามสกุล
              </label>
              <input 
                v-model="name"
                type="text"
                placeholder="ระบุชื่อ-นามสกุล"
                class="w-full h-[50px] px-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCE] focus:ring-2 focus:ring-[#00FFCE]/30"
              />
            </div>

            <!-- Bank Select -->
            <div class="relative">
              <label class="absolute -top-3 left-4 bg-[#048A90] px-2 text-white/80 text-sm rounded z-10">
                ธนาคาร
              </label>
              <button 
                type="button"
                @click="showBankModal = true"
                class="w-full h-[50px] px-4 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-[#00FFCE] focus:ring-2 focus:ring-[#00FFCE]/30 cursor-pointer text-left flex items-center"
              >
                <template v-if="selectedBank">
                  <img :src="selectedBank.img" :alt="selectedBank.name_th" class="w-8 h-8 object-contain mr-3" />
                  <span>{{ selectedBank.name_th }}</span>
                </template>
                <span v-else class="text-white/50">เลือกธนาคาร</span>
              </button>
              <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <!-- Bank Selection Modal -->
            <Teleport to="body">
              <div v-if="showBankModal" class="fixed inset-0 z-[60] flex items-center justify-center p-4">
                <div class="absolute inset-0 bg-black/50" @click="showBankModal = false"></div>
                <div class="relative z-10 w-full max-w-sm bg-[#048A90] rounded-[16px] shadow-[0_0_20px_rgba(0,255,255,0.3)] overflow-hidden max-h-[70vh]">
                  <!-- Header -->
                  <div class="flex items-center justify-between p-4 border-b border-white/20">
                    <h3 class="text-white font-bold text-lg">เลือกธนาคาร</h3>
                    <button @click="showBankModal = false" class="text-white/70 hover:text-white text-2xl">&times;</button>
                  </div>
                  <!-- Bank Grid -->
                  <div class="p-4 overflow-y-auto max-h-[50vh]">
                    <div class="grid grid-cols-3 gap-3">
                      <button
                        v-for="bank in banks"
                        :key="bank.id"
                        type="button"
                        @click="selectBank(bank.id)"
                        class="flex flex-col items-center p-3 rounded-lg border-2 transition-all hover:scale-105"
                        :class="loadBankId === String(bank.id) ? 'border-[#00FFCE] bg-[#00FFCE]/20' : 'border-white/20 bg-white/10 hover:bg-white/20'"
                      >
                        <img :src="bank.img" :alt="bank.name_th" class="w-12 h-12 object-contain mb-2" />
                        <span class="text-white text-xs text-center line-clamp-2">{{ bank.name_th }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Teleport>

            <!-- Account Number Input -->
            <div class="relative">
              <label class="absolute -top-3 left-4 bg-[#048A90] px-2 text-white/80 text-sm rounded">
                เลขบัญชีธนาคาร
              </label>
              <input 
                v-model="accountNumber"
                type="text"
                placeholder="ระบุเลขบัญชีธนาคาร"
                @keypress="onlyNumber"
                class="w-full h-[50px] px-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCE] focus:ring-2 focus:ring-[#00FFCE]/30"
              />
            </div>

            <!-- Zone Select -->
            <div class="relative">
              <label class="absolute -top-3 left-4 bg-[#048A90] px-2 text-white/80 text-sm rounded z-10">
                โซนที่สนใจ
              </label>
              <select 
                v-model="zone"
                class="w-full h-[50px] px-4 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-[#00FFCE] focus:ring-2 focus:ring-[#00FFCE]/30 appearance-none cursor-pointer"
              >
                <option value="" disabled class="text-gray-800">เลือกโซน</option>
                <option value="สล็อต" class="text-gray-800">สล็อต</option>
                <option value="คาสิโน" class="text-gray-800">คาสิโน</option>
                <option value="กีฬา" class="text-gray-800">กีฬา</option>
                <option value="หวย" class="text-gray-800">หวย</option>
              </select>
              <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <!-- Promotion Select (Optional) -->
            <div class="relative">
              <label class="absolute -top-3 left-4 bg-[#048A90] px-2 text-white/80 text-sm rounded z-10">
                โปรโมชั่น (ถ้ามี)
              </label>
              <select 
                v-model="promotionId"
                class="w-full h-[50px] px-4 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-[#00FFCE] focus:ring-2 focus:ring-[#00FFCE]/30 appearance-none cursor-pointer"
              >
                <option value="" class="text-gray-800">ไม่รับโปรโมชั่น</option>
                <option v-for="promo in promotions" :key="promo.id" :value="promo.id" class="text-gray-800">
                  {{ promo.name }}
                </option>
              </select>
              <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <!-- Reference Select -->
            <div class="relative">
              <label class="absolute -top-3 left-4 bg-[#048A90] px-2 text-white/80 text-sm rounded z-10">
                รู้จักเราจากช่องทางไหน
              </label>
              <select 
                v-model="reference"
                class="w-full h-[50px] px-4 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-[#00FFCE] focus:ring-2 focus:ring-[#00FFCE]/30 appearance-none cursor-pointer"
              >
                <option value="" disabled class="text-gray-800">เลือกช่องทาง</option>
                <option value="google" class="text-gray-800">Google</option>
                <option value="facebook" class="text-gray-800">Facebook</option>
                <option value="youtube" class="text-gray-800">YouTube</option>
                <option value="tiktok" class="text-gray-800">TikTok</option>
                <option value="friend" class="text-gray-800">เพื่อนแนะนำ</option>
                <option value="other" class="text-gray-800">อื่นๆ</option>
              </select>
              <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <!-- Error Message -->
            <p v-if="errorMessage" class="text-red-400 text-sm text-center">{{ errorMessage }}</p>

            <!-- Register Button -->
            <button 
              type="submit"
              :disabled="isLoading"
              class="w-full flex justify-center hover:scale-105 transition-transform mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img src="/images/login/login-btn.png" alt="สมัครสมาชิก" class="h-14 w-auto" />
            </button>
          </form>
        
          <!-- Login Link -->
          <div class="text-center mt-6">
            <span class="text-white/80">มีบัญชีอยู่แล้ว? </span>
            <button @click="switchToLogin" class="text-[#00FFCE] font-bold hover:underline">
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const { showRegisterModal, closeRegisterModal, openLoginModal } = useAuthModal()
const { register: appRegister } = useAppInfo()

// Form data
const phone = ref('')
const displayPhone = ref('')
const password = ref('')
const name = ref('')
const loadBankId = ref('')
const accountNumber = ref('')
const zone = ref('')
const promotionId = ref('')
const reference = ref('')

// State
const phoneError = ref('')
const errorMessage = ref('')
const isLoading = ref(false)
const showBankModal = ref(false)

// Valid phone prefixes
const validPrefixes = ['02', '04', '06', '08', '09']

// Get banks from app info
const banks = computed(() => appRegister.value?.load_banks || [])

// Get selected bank
const selectedBank = computed(() => {
  if (!loadBankId.value) return null
  return banks.value.find(b => b.id === Number(loadBankId.value))
})

// Select bank from modal
const selectBank = (bankId: number) => {
  loadBankId.value = String(bankId)
  showBankModal.value = false
}

// Get promotions from app info
const promotions = computed(() => appRegister.value?.promotions || [])

// Switch to login modal
const switchToLogin = () => {
  openLoginModal()
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

// Handle register
const handleRegister = async () => {
  errorMessage.value = ''
  
  // Validate phone
  if (phone.value.length !== 10) {
    phoneError.value = 'กรุณากรอกเบอร์โทร 10 หลัก'
    return
  }
  
  const prefix = phone.value.slice(0, 2)
  if (!validPrefixes.includes(prefix)) {
    phoneError.value = 'เบอร์โทรต้องขึ้นต้นด้วย 02, 04, 06, 08 หรือ 09'
    return
  }

  // Validate required fields
  if (!password.value) {
    errorMessage.value = 'กรุณากรอกรหัสผ่าน'
    return
  }
  if (!name.value) {
    errorMessage.value = 'กรุณากรอกชื่อ-นามสกุล'
    return
  }
  if (!loadBankId.value) {
    errorMessage.value = 'กรุณาเลือกธนาคาร'
    return
  }
  if (!accountNumber.value) {
    errorMessage.value = 'กรุณากรอกเลขบัญชีธนาคาร'
    return
  }
  if (!zone.value) {
    errorMessage.value = 'กรุณาเลือกโซนที่สนใจ'
    return
  }
  if (!reference.value) {
    errorMessage.value = 'กรุณาเลือกช่องทางที่รู้จักเรา'
    return
  }

  isLoading.value = true

  try {
    const formData = new FormData()
    formData.append('phone', phone.value)
    formData.append('password', password.value)
    formData.append('name', name.value)
    formData.append('load_bank_id', loadBankId.value)
    formData.append('account_number', accountNumber.value)
    formData.append('reference', reference.value)
    formData.append('zone', zone.value)
    if (promotionId.value) {
      formData.append('promotion_id', promotionId.value)
    }

    const response = await fetch('https://api.maxnano.app/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Origin': window.location.origin
      },
      body: formData
    })

    const result = await response.json()

    if (response.ok && result.token) {
      // Save token to localStorage
      localStorage.setItem('token', result.token)
      localStorage.setItem('user', JSON.stringify(result.data))
      
      // Close modal
      closeRegisterModal()
      
      // Reload page to update state
      window.location.reload()
    } else {
      errorMessage.value = result.message || 'เกิดข้อผิดพลาดในการสมัครสมาชิก'
    }
  } catch (error) {
    console.error('Register error:', error)
    errorMessage.value = 'เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง'
  } finally {
    isLoading.value = false
  }
}
</script>
