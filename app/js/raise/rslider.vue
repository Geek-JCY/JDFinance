<template lang="html">
    <Panel :class="$style.panel" title="金融头条">
        <section :class="$style.content">
            <swiper :options="swiperOption">
                <swiper-slide>百万白条券免费送，速来领取！！ <em>></em> </swiper-slide>
                <swiper-slide>签到领流量，1元500M！<em>></em> </swiper-slide>
            </swiper>
        </section>
    </Panel>
</template>

<script type='text/ecmascript-6'>
import { swiper, swiperSlide } from "vue-awesome-swiper"
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
        swiper,
        swiperSlide,
    },
    data() {
        return {
            swiperOption: {
                autoplay: true,
                loop: true,
                direction: "vertical",
            },
        }
    },
}
</script>

<style lang="scss">
    .swiper-container-vertical {
        height: 72px;
        .swiper-slide {
           font-family: PingFangSC-Medium;
           font-size: 28px;
           color: #333;
           em{
               float: right;
               margin-right: 20px;
               color: #ddd;
           }
        }
    }
</style>


<style lang='scss' module>
    @import "../../css/element.scss";
    .panel {
        @include panel;
        >h4 {
            display: none;
        }
        margin-top: 120px;
        .content {
            height: 72px;
            line-height: 72px;
            overflow: hidden;
            padding-left: 178px;
            background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
        }
    }
</style>
