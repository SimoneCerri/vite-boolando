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
        <div class="logo">
            <img src="/public/img/boolean-logo.png" alt="">
        </div>
        <div class="cart">
            <a href="">
                <i class="fa-solid fa-user-ninja"></i>
            </a>
            <a href="">
                <i class="fa-solid fa-heart"></i>
            </a><a href="">
                <i class="fa-solid fa-bag-shopping"></i>
            </a>
        </div>
    </header>
    <!-- /#site_header -->

</template>

<style lang="scss">
</style>
