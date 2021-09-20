function useStorage() {
  const storageTimer = JSON.parse(localStorage.getItem('timer'));
  const storageLight = localStorage.getItem('light');

  const setStorageLight = (light) => localStorage.setItem('light', light);
  const setStorageTimer = (timer) => localStorage.setItem('timer', timer);

  return {
    storageTimer,
    storageLight,
    setStorageLight,
    setStorageTimer,
  }
}

export default useStorage;