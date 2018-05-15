/* 首页 组件 */
<template lang="html">
    <div>
        <Heador/>
        <Rslider/>
        <Daily/>
        <In/>
        <More/>
        <Footer cname="rfooter"/>
        <Navbar/>
    </div>
</template>

<script type="text/ecmascript-6">
import Heador from "../public/header.vue"
import Footer from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Rslider from "./rslider.vue"
import Daily from "./daily.vue"
import In from "./in.vue"
import More from "./more.vue"
export default {
    components: {
        Heador,
        Rslider,
        Daily,
        In,
        More,
        Footer,
        Navbar,
    },
}
</script>

<style lang="scss">
    .rfooter {
        margin-top: 0!important;
        ul{
            li:first-child{
                display: none;
            }
        }
    }
</style>

