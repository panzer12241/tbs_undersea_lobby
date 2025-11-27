// Composable for managing auth modals
export const useAuthModal = () => {
  const showLoginModal = useState('showLoginModal', () => false)
  const showRegisterModal = useState('showRegisterModal', () => false)

  const openLoginModal = () => {
    showRegisterModal.value = false
    showLoginModal.value = true
  }

  const openRegisterModal = () => {
    showLoginModal.value = false
    showRegisterModal.value = true
  }

  const closeLoginModal = () => {
    showLoginModal.value = false
  }

  const closeRegisterModal = () => {
    showRegisterModal.value = false
  }

  const closeAllModals = () => {
    showLoginModal.value = false
    showRegisterModal.value = false
  }

  return {
    showLoginModal,
    showRegisterModal,
    openLoginModal,
    openRegisterModal,
    closeLoginModal,
    closeRegisterModal,
    closeAllModals
  }
}
