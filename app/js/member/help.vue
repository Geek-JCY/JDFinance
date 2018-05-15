<template lang="html">
    <Panel :class="$style.panel" title="我的">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&height=70" alt="">
            <span>帮助中心</span>
            <em>></em>
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
        .content {
            @include list(row);
            height: 112px;
            line-height: 112px;
            align-items: center;
            img {
                width: 48px;
                height: 48px;
                margin: 32px;
            }
            span {
                font-size: 32px;
                color: #333;
            }
            em {
                position: absolute;
                right: 32px;
                font-size: 28px;
                color: #999;
            }
        }
    }

</style>
