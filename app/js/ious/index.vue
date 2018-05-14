/* 理财 组件 */
<template lang="html">
    <div>
        <Heador/>
        <Islider/>
        <Welfare/>
        <Service/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script type="text/ecmascript-6">
import Heador from "../public/header.vue"
import Footer from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Islider from "./islider.vue"
import Welfare from "./welfare.vue"
import Service from "./service.vue"

export default {
    components: {
        Heador,
        Footer,
        Navbar,
        Islider,
        Welfare,
        Service,
    },
}
</script>

<style lang="scss">
</style>

