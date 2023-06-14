// Test for translation system
// TODO : look for using directly i38n

export default {
    props: {
        locale: {
            type: String,
            default: 'fr',
        },
        translations: {
            type: Object,
            default: () => ({
                fr: {},
            }),
        },
    },
    methods: {
        $t(key) {
            return this?.translations[this.locale][key.toString()] || key
        },
    },
}
