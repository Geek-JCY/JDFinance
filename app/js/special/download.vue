<template lang="html">
    <Panel :class="$style.panel" title="APP下载">
        <section :class="$style.content">
            <p :class="$style.title">会赚钱 懂生活的人</p>
            <p :class="$style.title">都在这里</p>
            <p :class="$style.desc">新人首次登录领888礼包</p>
            <div class="pic"/>
            <p :class="$style.btn">
                <img src="https://m.jr.jd.com/spe/downloadApp/images/logo.png" alt="">
                安装京东金融
            </p>
            <p :class="$style.open">已安装，点击这里直接打开</p>
        </section>
    </Panel>
</template>

<script type="text/ecmascript-6">
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel {
        @include panel;
        margin: 0;
        >h4 {
            display: none;
        }
        .content {
            @include list;
            width: 100%;
            height: 1136px;
            // justify-content: center;
            align-items: center;
            padding-top: 50px;
            position: relative;
            >div{
                background: url(//img12.360buyimg.com/jrpmobile/jfs/t10054/120/2165982932/56512/574e4766/59f031f3N1a75e42d.png?width=1125&height=890) center center no-repeat;
                width: 512px;
                height: 405px;
                background-size: 100% auto;
            }
            p {
                &.title {
                  height: 66px;
                  line-height: 66px;
                  white-space: normal;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  color: #444;
                  font-size: 50px;
                }
                &.desc {
                    height: 38px;
                    line-height: 38px;
                    margin-top: 20px;
                    font-size: 26px;
                    color: #999;
                }
                &.btn {
                    @include btn($size:28px, $color:#fff, $bgcolor:#F55C33, $padding:0 20px, $radius:5px);
                    position: fixed;
                    bottom: 118px;
                    width: 492px;
                    height: 100px;
                    line-height: 100px;
                    background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
                    img {
                        width: 54px;
                        height: 54px;
                        margin-right: 24px;
                        vertical-align: middle;
                    }
                }
                &.open {
                    position: fixed;
                    bottom: 40px;
                    display: block;
                    width: 100%;
                    height: 38px;
                    line-height: 38px;
                    text-align: center;
                    font-family: PingFangSC-Medium;
                    font-size: 28px;
                    color: #F4552F;
                }
            }
        }
    }
</style>
