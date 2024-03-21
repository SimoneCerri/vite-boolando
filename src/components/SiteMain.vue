<script>
import CardMain_1 from "./CardMain_1.vue";
import CardMain_2 from "./CardMain_2.vue";
import CardMain_3 from "./CardMain_3.vue";
import CardMain_4 from "./CardMain_4.vue";
import CardMain_5 from "./CardMain_5.vue";
import CardMain_6 from "./CardMain_6.vue";

export default
{
    name: "SiteMain",
    components:
    {
        CardMain_1,
        CardMain_2,
        CardMain_3,
        CardMain_4,
        CardMain_5,
        CardMain_6,
    }
}
</script>

<template>
    <main id="site_main">
        <CardMain_1 />
        <CardMain_2 />
        <CardMain_3 />
        <CardMain_4 />
        <CardMain_5 />
        <CardMain_6 />
    </main>
    <!-- /#site_main -->
</template>

<style></style>
