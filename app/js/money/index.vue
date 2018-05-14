/* 理财 组件 */
<template lang="html">
    <div>
        <Heador/>
        <Mslider/>
        <Ada/>
        <Money/>
        <Adb/>
        <Finance/>
        <Adc/>
        <Footer cname="moneyfooter"/>
        <Navbar/>
    </div>
</template>

<script type="text/ecmascript-6">
import Heador from "../public/header.vue"
import Footer from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Mslider from "./mslider.vue"
import Ada from "./ada.vue"
import Money from "./money.vue"
import Adb from "./adb.vue"
import Finance from "./finance.vue"
import Adc from "./adc.vue"
export default {
    components: {
        Heador,
        Footer,
        Navbar,
        Mslider,
        Ada,
        Money,
        Adb,
        Finance,
        Adc,
    },
}
</script>

<style lang="scss">
    .moneyfooter {
        margin-top: 0 !important;
        ul{
            li:first-child{
                display: none;
            }
        }
    }
</style>

