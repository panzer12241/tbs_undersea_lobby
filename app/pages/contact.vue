<template>
  <div class="h-full flex flex-col gap-4 p-8">
    <h1 class="text-2xl font-bold text-white drop-shadow-lg">ติดต่อเรา</h1>
    <div class="grid grid-cols-2 gap-6">
      <!-- Left: Contact Methods -->
      <div class="flex flex-col gap-4">
        <div v-for="contact in contacts" :key="contact.name" 
             class="rounded-2xl overflow-hidden cursor-pointer group border border-white/20 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300 p-5"
             :class="contact.bgClass">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full flex items-center justify-center text-3xl" :class="contact.iconBg">
              {{ contact.icon }}
            </div>
            <div class="flex-1">
              <span class="text-white font-bold text-lg">{{ contact.name }}</span>
              <p class="text-white/70 text-sm">{{ contact.description }}</p>
              <span class="text-[#00ffff] text-sm">{{ contact.info }}</span>
            </div>
            <div class="w-3 h-3 rounded-full animate-pulse" :class="contact.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'"></div>
          </div>
        </div>
      </div>
      
      <!-- Right: FAQ -->
      <div class="bg-gradient-to-b from-[#00ffff]/10 to-[#0099ff]/10 border border-white/20 rounded-2xl backdrop-blur-sm p-6">
        <h2 class="text-lg font-bold text-white mb-4">คำถามที่พบบ่อย</h2>
        <div class="flex flex-col gap-3">
          <div v-for="faq in faqs" :key="faq.question" 
               class="p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
            <div class="flex items-start gap-3">
              <span class="text-[#00ffff]">❓</span>
              <div>
                <p class="text-white font-bold text-sm">{{ faq.question }}</p>
                <p class="text-white/60 text-xs mt-1">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const contacts = [
  { 
    name: 'LINE Official', 
    icon: '💬', 
    description: 'แชทกับเจ้าหน้าที่ตลอด 24 ชม.',
    info: '@joker79official',
    status: 'online',
    bgClass: 'bg-gradient-to-r from-[#00b900]/20 to-[#00d900]/20',
    iconBg: 'bg-gradient-to-b from-[#00b900]/50 to-[#00d900]/50'
  },
  { 
    name: 'Live Chat', 
    icon: '🎧', 
    description: 'พูดคุยกับทีมซัพพอร์ตโดยตรง',
    info: 'ตอบกลับภายใน 1 นาที',
    status: 'online',
    bgClass: 'bg-gradient-to-r from-[#00ffff]/20 to-[#0099ff]/20',
    iconBg: 'bg-gradient-to-b from-[#00ffff]/50 to-[#0099ff]/50'
  },
  { 
    name: 'Facebook', 
    icon: '📘', 
    description: 'ติดตามข่าวสารและโปรโมชั่น',
    info: 'Joker79 Thailand',
    status: 'online',
    bgClass: 'bg-gradient-to-r from-[#1877f2]/20 to-[#4267b2]/20',
    iconBg: 'bg-gradient-to-b from-[#1877f2]/50 to-[#4267b2]/50'
  },
  { 
    name: 'โทรศัพท์', 
    icon: '📞', 
    description: 'โทรหาเราได้ทุกวัน 9:00-21:00',
    info: '02-xxx-xxxx',
    status: 'busy',
    bgClass: 'bg-gradient-to-r from-[#ff6b6b]/20 to-[#c92a2a]/20',
    iconBg: 'bg-gradient-to-b from-[#ff6b6b]/50 to-[#c92a2a]/50'
  },
]

const faqs = [
  { question: 'ฝากเงินขั้นต่ำเท่าไหร่?', answer: 'ฝากขั้นต่ำเพียง 1 บาท ผ่านทุกช่องทาง' },
  { question: 'ถอนเงินใช้เวลานานแค่ไหน?', answer: 'ถอนอัตโนมัติภายใน 30 วินาที ตลอด 24 ชม.' },
  { question: 'ลืมรหัสผ่านทำอย่างไร?', answer: 'กดปุ่ม "ลืมรหัสผ่าน" ที่หน้าล็อกอิน หรือติดต่อ LINE' },
  { question: 'มีโปรโมชั่นสำหรับสมาชิกใหม่ไหม?', answer: 'มีโบนัสต้อนรับ 100% สำหรับสมาชิกใหม่ทุกคน' },
]
</script>
