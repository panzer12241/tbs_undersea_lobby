export interface SlotProvider {
  provider_id: number
  img: string
  code: string
  name: string
  category: string
  isList: boolean
  click: number
  created_at: string
}

export const useSlotApi = () => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.apiBaseUrl

  const getProviders = async (): Promise<SlotProvider[]> => {
    const { data, error } = await useFetch<SlotProvider[]>(`${baseUrl}/api/v1/lobby/slot`, {
      headers: {
        'Origin': 'http://localhost:3000'
      }
    })

    if (error.value) {
      console.error('Error fetching slot providers:', error.value)
      return []
    }

    return data.value || []
  }

  return {
    getProviders
  }
}
