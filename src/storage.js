/**
 * Storage
 */

export default {
    setItem(key, value) {
        localStorage.setItem(key, value)
    },

    getItem(key) {
        return localStorage.getItem(key)
    }
}
