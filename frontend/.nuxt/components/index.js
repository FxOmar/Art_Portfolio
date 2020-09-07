export { default as Navbar } from '../..\\components\\ui\\Navbar.vue'

export const LazyNavbar = import('../..\\components\\ui\\Navbar.vue' /* webpackChunkName: "components_ui/Navbar" */).then(c => c.default || c)
