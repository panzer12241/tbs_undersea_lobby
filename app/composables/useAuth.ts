export interface User {
  id: number
  name: string
  phone: string
  user_game_username: string
  image_logo?: string
  wroning?: string | null
}

// Shared reactive state
const user = ref<User | null>(null)
const token = ref<string | null>(null)
const isLoggedIn = computed(() => !!token.value)

export const useAuth = () => {
  // Initialize from localStorage (client-side only)
  const initAuth = () => {
    if (import.meta.client) {
      const storedToken = localStorage.getItem('token')
      const storedUser = localStorage.getItem('user')
      
      if (storedToken) {
        token.value = storedToken
      }
      
      if (storedUser) {
        try {
          user.value = JSON.parse(storedUser)
        } catch (e) {
          console.error('Failed to parse user data:', e)
        }
      }
    }
  }

  // Set auth data after login/register
  const setAuth = (newToken: string, userData: User) => {
    token.value = newToken
    user.value = userData
    
    if (import.meta.client) {
      localStorage.setItem('token', newToken)
      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('user_id', String(userData.id))
      localStorage.setItem('user_name', userData.name)
      localStorage.setItem('user_phone', userData.phone)
      localStorage.setItem('user_game_username', userData.user_game_username)
      if (userData.image_logo) {
        localStorage.setItem('image_logo', userData.image_logo)
      }
    }
  }

  // Clear auth data on logout
  const logout = () => {
    token.value = null
    user.value = null
    
    if (import.meta.client) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('user_id')
      localStorage.removeItem('user_name')
      localStorage.removeItem('user_phone')
      localStorage.removeItem('user_game_username')
      localStorage.removeItem('image_logo')
    }
  }

  // Get user display name
  const userName = computed(() => user.value?.name || '')
  
  // Get user game username (ID)
  const userGameUsername = computed(() => user.value?.user_game_username || '')

  return {
    user,
    token,
    isLoggedIn,
    userName,
    userGameUsername,
    initAuth,
    setAuth,
    logout
  }
}
