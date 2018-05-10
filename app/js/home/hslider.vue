<template lang="html">
    <article class="hslider">
        <Slider :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
            <div v-for="item in enters" :class="$style.item" :key="item.img">
                <router-link :to="{name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script type="text/ecmascript-6">
import Slider from "../core/slider.vue"
export default {
    components: {
        Slider,
    },
    data() {
        return {
            // data: Slider items
            items: [{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t19249/223/2372583320/51289/1b585c68/5af19c72N2c5ca21d.jpg?width=750&height=320",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t17494/144/2425424398/47998/ab776e0e/5af19cc1N04404082.jpg?width=750&height=320",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t18172/108/2398215536/63999/44b0d9dd/5af19c9cNfc636e2f.jpg?width=750&height=320",
            }],
            // data: list enters
            enters: [{
                href: "home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
                title: "优惠券",
            }, {
                href: "home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
                title: "领红包",
            }, {
                href: "home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
                title: "抢钢镚",
            }, {
                href: "home",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
                title: "白条提额",
            }],
        }
    },
}
</script>

<style lang="scss" module>
    @import '../../css/element.scss';
    .slider {
        margin-top: 120px;
        img {
            width: 100%;
        }
    }
    .list {
        @include list(row);
        padding-top: 40px;
        padding-bottom: 20px;
        justify-content: space-around;
        background: #fff;
        a {
            text-decoration: none;
        }
        .item {
            text-align: center;
            img {
                display: inline-block;
                width: 90px;
                height: 90px;
            }
            h4 {
                font-size: 26px;
                margin-top: 12px;
                color: #666;
            }
        }
    }
</style>
