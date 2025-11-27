<template>
  <Teleport to="body">
    <div class="fixed top-4 right-4 z-[100] flex flex-col gap-3 pointer-events-none">
      <TransitionGroup name="toast">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="pointer-events-auto min-w-[300px] max-w-[400px] p-4 rounded-xl shadow-lg backdrop-blur-sm flex items-start gap-3 animate-slide-in"
          :class="toastClass(toast.type)"
        >
          <!-- Icon -->
          <div class="flex-shrink-0 mt-0.5">
            <span v-if="toast.type === 'success'" class="text-xl">✅</span>
            <span v-else-if="toast.type === 'error'" class="text-xl">❌</span>
            <span v-else-if="toast.type === 'warning'" class="text-xl">⚠️</span>
            <span v-else class="text-xl">ℹ️</span>
          </div>
          
          <!-- Message -->
          <div class="flex-1 text-white font-medium">
            {{ toast.message }}
          </div>
          
          <!-- Close Button -->
          <button
            @click="removeToast(toast.id)"
            class="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
          >
            <span class="text-white text-lg">&times;</span>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const { toasts, removeToast } = useToast()

const toastClass = (type: string) => {
  switch (type) {
    case 'success':
      return 'bg-green-600/90 border border-green-400/30'
    case 'error':
      return 'bg-red-600/90 border border-red-400/30'
    case 'warning':
      return 'bg-yellow-600/90 border border-yellow-400/30'
    default:
      return 'bg-blue-600/90 border border-blue-400/30'
  }
}
</script>

<style scoped>
.toast-enter-active {
  animation: slide-in 0.3s ease-out;
}

.toast-leave-active {
  animation: slide-out 0.3s ease-in;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>
