<script>
import NavHeader from "./header/NavHeader.vue";
import CartHeader from "./header/CartHeader.vue";
import LogoHeader from "./header/LogoHeader.vue";

export default
{
    name:"SiteHeader",
    components:
    {
        NavHeader,
        CartHeader,
        LogoHeader
    }
}
</script>

<template>
    <header id="site_header">
        <NavHeader/>
        <LogoHeader/>
        <CartHeader/>
    </header>
    <!-- /#site_header -->

</template>

<style lang="scss">
</style>
