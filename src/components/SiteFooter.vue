<script>
import LeftFooter from "./footer/LeftFooter.vue";
import RightFooter from "./footer/RightFooter.vue";

export default
    {
        name: "SiteFooter",
        components:
        {
            LeftFooter,
            RightFooter
        }
    }
</script>

<template>
    <footer id="site_footer">
        <LeftFooter/>
        <RightFooter/>
    </footer>
    <!-- /#site_footer -->
</template>

<style>

</style>
