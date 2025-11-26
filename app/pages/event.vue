<template>
  <div class="h-full flex flex-col gap-4 p-8">
    <h1 class="text-2xl font-bold text-white drop-shadow-lg">กิจกรรม</h1>
    <div class="grid grid-cols-1 gap-4">
      <!-- Event Cards -->
      <div v-for="event in events" :key="event.title" 
           class="relative rounded-2xl overflow-hidden cursor-pointer group border border-white/20 backdrop-blur-sm hover:scale-[1.01] transition-transform duration-300"
           :class="event.bgClass">
        <div class="p-6 flex items-center gap-6">
          <div class="w-20 h-20 rounded-full flex items-center justify-center text-5xl" :class="event.iconBg">
            {{ event.icon }}
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-white font-bold text-xl">{{ event.title }}</span>
              <span v-if="event.isHot" class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">🔥 HOT</span>
              <span v-if="event.isNew" class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">✨ NEW</span>
            </div>
            <p class="text-white/70 text-sm mb-3">{{ event.description }}</p>
            <div class="flex items-center gap-4">
              <span class="text-white/50 text-xs">⏰ {{ event.duration }}</span>
              <span class="text-[#ffd700] font-bold">🎁 {{ event.reward }}</span>
            </div>
          </div>
          <button class="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ffd700] to-[#ffaa00] text-black font-bold hover:scale-105 transition-transform">
            เข้าร่วม
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const events = [
  { 
    title: 'แข่งสล็อตชิงแชมป์', 
    icon: '🏆', 
    description: 'หมุนสล็อตสะสมแต้มสูงสุด ลุ้นรางวัลรวมกว่า 1,000,000 บาท', 
    duration: '1 พ.ย. - 30 พ.ย. 2025',
    reward: 'รางวัลรวม 1,000,000฿',
    isHot: true,
    isNew: false,
    bgClass: 'bg-gradient-to-r from-[#ffd700]/20 to-[#ff6b00]/20',
    iconBg: 'bg-gradient-to-b from-[#ffd700]/50 to-[#ff6b00]/50'
  },
  { 
    title: 'ภารกิจประจำวัน', 
    icon: '📋', 
    description: 'ทำภารกิจง่ายๆ ทุกวัน รับรางวัลสะสมไม่อั้น', 
    duration: 'ทุกวัน',
    reward: 'สูงสุด 500฿/วัน',
    isHot: false,
    isNew: false,
    bgClass: 'bg-gradient-to-r from-[#00ffff]/20 to-[#0099ff]/20',
    iconBg: 'bg-gradient-to-b from-[#00ffff]/50 to-[#0099ff]/50'
  },
  { 
    title: 'กงล้อนำโชค', 
    icon: '🎡', 
    description: 'หมุนกงล้อฟรีทุกวัน ลุ้นรับเครดิตฟรีและของรางวัลมากมาย', 
    duration: 'หมุนได้ทุกวัน',
    reward: 'เครดิตฟรีสูงสุด 1,000฿',
    isHot: false,
    isNew: true,
    bgClass: 'bg-gradient-to-r from-[#e056fd]/20 to-[#9b59b6]/20',
    iconBg: 'bg-gradient-to-b from-[#e056fd]/50 to-[#9b59b6]/50'
  },
  { 
    title: 'กล่องสุ่มลึกลับ', 
    icon: '🎁', 
    description: 'ฝากเงินครบตามเงื่อนไข รับสิทธิ์เปิดกล่องสุ่มลุ้นรางวัลใหญ่', 
    duration: 'ตลอดเดือน พ.ย.',
    reward: 'iPhone 15 Pro Max',
    isHot: true,
    isNew: true,
    bgClass: 'bg-gradient-to-r from-[#ff6b6b]/20 to-[#c92a2a]/20',
    iconBg: 'bg-gradient-to-b from-[#ff6b6b]/50 to-[#c92a2a]/50'
  },
]
</script>
