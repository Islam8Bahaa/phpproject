<template>
<!-- Start Feature -->
    <div class="features text-center">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-3 box">
                    <font-awesome-icon :icon="['fas', 'address-card']" :class="['icon']"/>
                    <h3 class="upper">Print Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae illum odit pariatur</p>
                </div>
                <div class="col-12 col-sm-6 col-md-3 box">
                    <font-awesome-icon :icon="['fas', 'mobile-alt']" class="icon"/>
                    <h3 class="upper">App Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae illum odit pariatur</p>
                </div>
                <div class="col-12 col-sm-6 col-md-3 box">
                    <font-awesome-icon :icon="['fas', 'file-archive']" class="icon"/>
                    <h3 class="upper">Photography</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae illum odit pariatur</p>
                </div>
                <div class="col-12 col-sm-6 col-md-3 box">
        
                    <font-awesome-icon v-bind:icon="['fas', 'brush']" class="icon"/>
                    <h3 class="upper">Graphic Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae illum odit pariatur</p>
                </div>
            </div>
        </div>
    </div>
    <!-- End Feature -->
    </template>
<script>
export default{
    name: 'Feature'
}
</script>
