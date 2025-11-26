// Types for App Info API Response

export interface GoogleSeo {
  robot_active: boolean
  title: string | null
  description: string | null
  keywords: string | null
  og_url: string | null
  og_site_name: string | null
  og_title: string | null
  og_description: string | null
  og_image: string | null
  image_x_icon: string | null
  google_tag: string | null
  google_gtag: string | null
  custom_script: string | null
}

export interface AppPwa {
  id: number
  prefix: string
  name: string
  short_name: string
  description: string
  background_color: string
  theme_color: string
  created_at: string
  updated_at: string
  active: boolean
  app_icon: string
  deleted_at: string | null
  screenshots: string[]
  icons: {
    prefix: string
    image: string
    sizes: string
    type: string
  }[]
}

export interface LiveChat {
  active: boolean
  script: string | null
}

export interface AppColor {
  bg: string
  bgDark: string
  text: string
  bgContent: string
  bgContentDark: string
  bgLoading: string
}

export interface AppTheme {
  theme_bg: string
  theme_bg_dark: string
  theme_text: string
  theme_bg_content: string
  theme_bg_content_dark: string
  theme_bg_loading: string
  theme_bg_auth_img: string | null
  theme_icon_slot_img: string | null
  theme_icon_casino_img: string | null
  theme_icon_fish_img: string | null
  theme_icon_lotto_img: string | null
  theme_icon_sport_img: string | null
  theme_icon_keno_img: string | null
  theme_icon_home_img: string | null
  theme_icon_hot_img: string | null
  theme_bg_img: string | null
  theme_bg_games_img: string | null
  theme_icon_card_img: string | null
  theme_step_icon_one_img: string | null
  theme_step_icon_two_img: string | null
  theme_step_icon_three_img: string | null
  theme_step_color_pending: string
  theme_step_color_completed: string
  theme_bg_color: string
  theme_icon_favorite_img: string | null
  theme_register_button_color_start: string
  theme_register_button_color_end: string
  theme_login_button_color_start: string
  theme_login_button_color_end: string
  theme_home_heading_text_color: string
  theme_bottom_navigation_icon_line_img: string | null
  theme_bottom_navigation_icon_promotion_img: string | null
  theme_bottom_navigation_icon_register_img: string | null
  theme_bottom_navigation_icon_login_img: string | null
  theme_bottom_navigation_play_img: string | null
  theme_header_button_color_start: string
  theme_header_button_color_end: string
  theme_logout_button_color_start: string
  theme_logout_button_color_end: string
  theme_html_content: string | null
  line_id: string | null
  telegram_id: string | null
  line_link: string | null
  theme_bg_register_img: string | null
}

export interface Banner {
  image: string
  url: string | null
}

export interface AppEvents {
  affiliate_active: boolean
  cashback_active: boolean
  rank_active: boolean
  lucky_wheel_active: boolean
  cumulative_active: boolean
  diamond_active: boolean
}

export interface AppZone {
  zone_slot: boolean
  zone_casino: boolean
  zone_table: boolean
  zone_fish: boolean
  zone_sport: boolean
  zone_esport: boolean
  zone_keno: boolean
  zone_lottory: boolean
}

export interface Bank {
  id: number
  name_th: string
  name_eng: string
  img: string
}

export interface Reference {
  name: string
}

export interface Promotion {
  id: number
  promotion_type: string
  main_name: string
  name: string
  zone_slot: boolean
  zone_casino: boolean
  zone_lotto: boolean
  zone_sport: boolean
  detail_casino: string
  detail_slot: string
  detail_lotto: string
  detail_sport: string
  image: string
}

export interface AppRegister {
  load_banks: Bank[]
  references: Reference[]
  promotions: Promotion[]
}

export interface AppPrefix {
  game: string
  image_logo: string
  height_logo: string
  name: string
  lobby_url: string
  web_name: string
  line_url: string | null
  line_id: string | null
  line_support: string | null
  app_pwa: AppPwa
  live_chat: LiveChat
  google_seo: GoogleSeo
  color: AppColor
  theme: AppTheme
  register_active: boolean
  banners: Banner[]
  events: AppEvents
  website_terms_of_service: string | null
  broadcast_admin: string | null
  broadcast: string | null
  zone: AppZone
  lobby_cache_version: number
  ip: string
  register: AppRegister
}

export interface AppInfoResponse {
  app_version: string
  prefix: AppPrefix
}

// Composable for managing app info
export const useAppInfo = () => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.apiBaseUrl

  // State
  const appInfo = useState<AppInfoResponse | null>('appInfo', () => null)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  // Fetch app info from API
  const fetchAppInfo = async (): Promise<AppInfoResponse | null> => {
    loading.value = true
    error.value = null

    try {
      const response = await $fetch<AppInfoResponse>(`${baseUrl}/api/v1/info`, {
        headers: {
          'Accept': 'application/json',
          'Origin': 'http://localhost:3000'
        }
      })
      appInfo.value = response
      
      // Store in localStorage (client-side only)
      if (import.meta.client) {
        localStorage.setItem('appInfo', JSON.stringify(response))
      }
      
      return response
    } catch (e) {
      error.value = e as Error
      console.error('Error fetching app info:', e)
      return null
    } finally {
      loading.value = false
    }
  }

  // Get app info from localStorage
  const getStoredAppInfo = (): AppInfoResponse | null => {
    if (import.meta.client) {
      const stored = localStorage.getItem('appInfo')
      if (stored) {
        try {
          return JSON.parse(stored) as AppInfoResponse
        } catch {
          return null
        }
      }
    }
    return null
  }

  // Get Google SEO data
  const googleSeo = computed(() => appInfo.value?.prefix?.google_seo || null)

  // Get prefix data
  const prefix = computed(() => appInfo.value?.prefix || null)

  // Get theme data
  const theme = computed(() => appInfo.value?.prefix?.theme || null)

  // Get banners
  const banners = computed(() => appInfo.value?.prefix?.banners || [])

  // Get zone settings
  const zone = computed(() => appInfo.value?.prefix?.zone || null)

  // Get register data
  const register = computed(() => appInfo.value?.prefix?.register || null)

  return {
    appInfo,
    loading,
    error,
    fetchAppInfo,
    getStoredAppInfo,
    googleSeo,
    prefix,
    theme,
    banners,
    zone,
    register
  }
}
