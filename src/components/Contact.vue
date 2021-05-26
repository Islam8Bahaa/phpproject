<template>
<div class="contact text-center">
        <div class="overlay"></div>
        <div class="container">
            <h2 class="upper">Say <span class="main-color">Hello</span></h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br> Asperiores fugit maiores, corrupti minima incidunt nostrum.</p>
            <form>
                <input type="email" name="mail" placeholder="Please Enter Your Email">
                <input type="text" name="subject" placeholder="Please Enter Your Subject">
                <textarea placeholder="Please Enter Your Message"></textarea>
                <s class="info">
                    <button class="upper">Hire us</button>
                    <span class="social-media">
                        <font-awesome-icon :icon="['fab', 'facebook']" class="icon"/>
                        <font-awesome-icon :icon="['fab', 'twitter']" class="icon"/>
                        <font-awesome-icon :icon="['fab', 'youtube']" class="icon"/>
                        <font-awesome-icon :icon="['fab', 'google']" class="icon"/>
                    </span>
                </s>
            </form>
        </div>

    </div>
</template>
<script>
export default{
    name : "Contact"
}
</script>
