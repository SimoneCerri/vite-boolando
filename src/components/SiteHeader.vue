<script>
import NavHeader from "./NavHeader.vue";
import CartHeader from "./CartHeader.vue";
import LogoHeader from "./LogoHeader.vue";

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
