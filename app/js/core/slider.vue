<template lang="html">
    <section :class="cname">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in items" :key="item.href">
                <router-link :to="{name: item.href}">
                    <img :src="item.src" alt="" >
                </router-link>
            </swiper-slide>
            <div v-if="swiperOption.pagination" slot="pagination" class="swiper-pagination" />
            <div v-if="swiperOption.navigation&&swiperOption.navigation.prevEl" slot="button-prev" class="swiper-button-prev"/>
            <div v-if="swiperOption.navigation&&swiperOption.navigation.nextEl" slot="button-next" class="swiper-button-next"/>
        </swiper>
    </section>
</template>


<script type="text/ecmascript-6">
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        cname: {
            type: String,
            default: "",
        },
        swiperOption: {
            type: Object,
            default() {
                return {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                        type: "bullets",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                }
            },
        },
        items: {
            type: Array,
            default() {
                return [
                    // { href: "", src: "" },
                ]
            },
        },
    },
}
</script>

<style lang="css">
    @import '~swiper/dist/css/swiper.css';
</style>
