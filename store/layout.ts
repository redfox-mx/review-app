export interface LayoutStore {
  openSidenav: boolean
}

export const state = () => ({
  openSidenav: false,
})

export const mutations = {
  TOGGLE_SIDENAV(state: LayoutStore) {
    state.openSidenav = !state.openSidenav
  },
}
