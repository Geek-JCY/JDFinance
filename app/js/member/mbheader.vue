<template lang="html">
    <Panel :class="$style.panel" title="我的">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" alt="">
            <em>会员福利 > </em>
        </section>
    </Panel>
</template>

<script type='text/ecmascript-6'>
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

<style lang='scss' module>
    @import "../../css/element.scss";
    .panel {
        @include panel;
        >h4 {
            display: none;
        }
        margin-top: 0;
        .content {
            @include list(row);
            height: 140px;
            line-height: 140px;
            align-items: center;
            justify-content: space-between;
            img {
                width: 100px;
                height: 100px;
                margin: 20px 32px;
            }
            em {
                margin-right: 32px;
                height: 60px;
                line-height: 60px;
                font-size: 28px;
                color: #999;
            }
        }
    }

</style>
