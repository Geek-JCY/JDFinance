<template lang="html">
    <Panel :class="$style.panel" title="APP下载">
        <section :class="$style.content">
            <div/>
            <p>已安装，点击这里直接打开</p>
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
            @include flex;
            width: 100%;
            height: 1136px;
            justify-content: center;
            align-items: center;
            >div{
                background: url(https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?) center center no-repeat;
                width: 600px;
                height: 800px;
                background-size: 100% auto;
                margin-top: -400px;
            }
        }
    }
</style>
