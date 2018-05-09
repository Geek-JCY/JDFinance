<template lang="html">
    <div :class="$style.home">
        <Heador/>
        <Slider/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Slider from "./hslider.vue"
export default {
    components: {
        Heador,
        Slider,
    },
}
</script>

<style lang="css" module>

</style>
