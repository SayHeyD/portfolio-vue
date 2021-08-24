export const state = () => ({
    open: false
  }
)
  
export const mutations = {
    toggleMenu(state) {
        state.open = !state.open
    }
}