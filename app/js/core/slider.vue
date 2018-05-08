<template lang="html">
    <section :class="cname">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in items" :key="item.href">
                <router-link :to="{name:item.href}">
                    <img src="item.src" alt="" >
                </router-link>
            </swiper-slide>
            <div v-if="swiperOption.pagination" solt="pagination" class="swiper-pagination" />
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
                    autoPlay: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                        type: "bullets",
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

<style lang="scss" module>
    @import '~swiper/dist/css/swiper.css';
</style>
