const config = {};

export default {
    get(key) {
        return config
    },
    set(key, value) {
        config[key] = value;
    },
    set(key, value) {
        config[key] = value;
    },
    getAll() {
        return { ...config };
    }
};