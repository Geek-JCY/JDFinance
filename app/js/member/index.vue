<template lang="html">
    <div :class="$style.mbpanel">
        <Mbheader/>
        <List/>
        <Identification/>
        <Help/>
        <Navbar/>
    </div>
</template>

<script type='text/ecmascript-6'>
import Navbar from "../public/navbar.vue"
import Mbheader from "./mbheader.vue"
import List from "./list.vue"
import Identification from "./identification.vue"
import Help from "./help.vue"
export default {
    components: {
        Mbheader,
        List,
        Identification,
        Help,
        Navbar,
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" module>
    .mbpanel {
        padding-bottom: 100px;
    }
</style>


