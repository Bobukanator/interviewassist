export default {
    components: true,
    head: {
        titleTemplate: "Career Informatics: %s",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs: {
            class: ["body"]
        },
        meta: [
            { charset: "utf-8" },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },
    env: {
        BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
    },
    router: {
        prefetchLinks: false
    },
    plugins: ['~/plugins/dataApi', '~/plugins/gs.client'],
    modules: ['@nuxtjs/axios', 'nuxt-buefy', '~/modules/mongo'],
    css: ['~/assets/sass/app.scss'],
    build: {
        extractCSS: true,
        loaders: {
            limit: 0,
        }
    },
}