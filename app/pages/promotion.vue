<template>
  <div class="h-full flex flex-col gap-4 p-8">
    <h1 class="text-2xl font-bold text-white drop-shadow-lg">โปรโมชั่น</h1>
    <div class="grid grid-cols-2 gap-6">
      <!-- Promotion Cards -->
      <div v-for="promo in promotions" :key="promo.title" 
           class="relative rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-r from-[#ff6b6b]/30 to-[#ffd93d]/30 border border-white/20 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300">
        <div class="p-6 flex gap-4">
          <div class="w-24 h-24 rounded-xl bg-gradient-to-b from-[#ffd700]/50 to-[#ff6b6b]/50 flex items-center justify-center border border-[#ffd700]/50 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
            <span class="text-5xl">{{ promo.icon }}</span>
          </div>
          <div class="flex-1 flex flex-col gap-2">
            <span class="text-white font-bold text-xl">{{ promo.title }}</span>
            <span class="text-white/70 text-sm">{{ promo.description }}</span>
            <div class="flex gap-2 mt-auto">
              <span class="bg-[#00ffff] text-black text-xs font-bold px-3 py-1 rounded-full">{{ promo.bonus }}</span>
              <span class="bg-white/20 text-white text-xs px-3 py-1 rounded-full">{{ promo.turnover }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const promotions = [
  { title: 'โบนัสต้อนรับ 100%', icon: '🎁', description: 'สมัครใหม่วันนี้ รับโบนัส 100% สูงสุด 5,000 บาท', bonus: '+100%', turnover: 'x5 เทิร์น' },
  { title: 'ฝากครั้งแรก 50%', icon: '💰', description: 'ฝากเงินครั้งแรกของวัน รับโบนัส 50%', bonus: '+50%', turnover: 'x3 เทิร์น' },
  { title: 'คืนยอดเสีย 10%', icon: '🔄', description: 'รับเงินคืนยอดเสียทุกวันจันทร์ สูงสุด 10,000 บาท', bonus: '+10%', turnover: 'x1 เทิร์น' },
  { title: 'แนะนำเพื่อน', icon: '👥', description: 'ชวนเพื่อนสมัคร รับค่าคอมมิชชั่นตลอดชีพ', bonus: '+5%', turnover: 'ไม่มีเทิร์น' },
  { title: 'โบนัสวันเกิด', icon: '🎂', description: 'รับโบนัสพิเศษในเดือนเกิดของคุณ', bonus: '+200฿', turnover: 'x2 เทิร์น' },
  { title: 'Cashback รายสัปดาห์', icon: '💎', description: 'รับเงินคืนทุกสัปดาห์ ไม่จำกัดจำนวน', bonus: '+5%', turnover: 'x1 เทิร์น' },
]
</script>
