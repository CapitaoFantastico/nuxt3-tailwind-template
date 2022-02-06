import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        darkMode: Boolean
    }),
    getters: {},
    actions: {
        toggleDark() {
            const isDarkMode = !this.darkMode;

            document.documentElement.classList[isDarkMode ? 'add' : 'remove']('dark')

            localStorage.setItem('darkMode', isDarkMode ? '1' : '0')

            this.darkMode = isDarkMode;
        },
    }
})