<template>
<div class="header">
        <div class="overlay"></div>
        <div class="container">
                <div class="row justify-content-center justify-content-md-between navbar">
                    <span class="col-12 col-md-4 logo">Tanatos<span class="main-color">Studio</span></span>
                    <span class="col-12 col-md-4 links">
                        Menu
                        <font-awesome-icon :icon="['fas', 'bars']" class="icon"/>
                        <!-- fas fa-bars -->
                    </span>
                </div>
                <div id="menu" class="hide menu">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    </div>
            <div class="intro text-center">
                <h1 class="upper">We Design <span class="main-color">Things</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio aut ducimus rem hic laboriosam aperiam quod saepe. Ex, quasi nulla. Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Assumenda ullam quasi eos corporisdebitisvoluptates.
                </p>
                <div class="buttons">
                    <button class="upper">Hire Us</button>
                    <button class="upper">Our Works</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'Header'
}
</script>