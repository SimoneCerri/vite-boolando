<script>
import LeftFooter from "./LeftFooter.vue";
import RightFooter from "./RightFooter.vue";

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

<style></style>
