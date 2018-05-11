<template lang="html">
    <div :class="$style.header">
        <span :class="$style.left"><em>注册</em>&nbsp;|&nbsp;<em>登录</em></span>
        <btn :class="$style.btnDownload">APP下载</btn>
    </div>
</template>

<script>
import btn from "../core/btn.vue"
export default {
    components: {
        btn,
    },
}
</script>

<style lang="scss" module>
  .header {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    line-height: 100px;
    background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
    background-size: auto 50%;
    box-shadow: 0 1px 3px 5px rgba(43, 41, 41, 0.1);
    color: #666;
    font-size: 28px;
    .left {
        height: 30px;
        line-height: 30px;
        margin: 17px 0 0 18px;
        font-size: 28px;
    }
    .btnDownload {
        float: right;
        min-width: 120px;
        height: 56px;
        line-height: 56px;
        padding: 0;
        margin: 28px 24px 0 0;
        border-width: 0;
        border-radius: 4px;
        font-size: 24px;
    }
  }
</style>
