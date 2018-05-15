<template lang="html">
    <Panel :class="$style.panel" title="我的">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&height=70" alt="">
            <span>实名认证</span>
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
