<template>
        <!-- Start Our Team -->
    <div class="our-team text-center">
        <div class="container">
            <h2 class="upper">Our <span class="main-color">Team</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />Quae quasi magni quaerat, quam repudiandae amet.</p>
            <div class="team row justify-content-center">
                <div class="person col-12 col-sm-6 col-md-3">
                    <img src="@/assets/img/team-member-4.png" alt="Team Member">
                    <h4 class="upper">Kevin Ward</h4>
                    <div class="social-media">
                        <font-awesome-icon :icon="['fab', 'facebook']" class="icon"/>
                        <font-awesome-icon :icon="['fab', 'twitter']" class="icon"/>
                        <font-awesome-icon :icon="['fab', 'youtube']" class="icon"/>
                        <font-awesome-icon :icon="['fab', 'google']" class="icon"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores voluptas beatae reiciendis accusantium expedita.</p>
                </div>
                <div class="person col-12 col-sm-6 col-md-3">
                    <img src="@/assets/img/team-member-1.png" alt="Team Member">
                    <h4 class="upper">Laila Alisson</h4>
                    <div class="social-media">
                        <font-awesome-icon :icon="['fab', 'facebook']" class="icon"/>
                        <font-awesome-icon :icon="['fab', 'twitter']" class="icon"/>
                        <font-awesome-icon :icon="['fab', 'youtube']" class="icon"/>
                        <font-awesome-icon :icon="['fab', 'google']" class="icon"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores voluptas beatae reiciendis accusantium expedita.</p>
                </div>
                <div class="person col-12 col-sm-6 col-md-3">
                    <img src="@/assets/img/team-member-2.png" alt="Team Member">
                    <h4 class="upper">George Keita</h4>
                    <div class="social-media">
                        <font-awesome-icon :icon="['fab', 'facebook']" class="icon"/>
                        <font-awesome-icon :icon="['fab', 'twitter']" class="icon"/>
                        <font-awesome-icon :icon="['fab', 'youtube']" class="icon"/>
                        <font-awesome-icon :icon="['fab', 'google']" class="icon"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores voluptas beatae reiciendis accusantium expedita.</p>
                </div>
                <div class="person col-12 col-sm-6 col-md-3">
                    <img src="@/assets/img/team-member-3.png" alt="Team Member">
                    <h4 class="upper">Nicole Smith</h4>
                    <div class="social-media">
                        <font-awesome-icon :icon="['fab', 'facebook']" class="icon"/>
                        <font-awesome-icon :icon="['fab', 'twitter']" class="icon"/>
                        <font-awesome-icon :icon="['fab', 'youtube']" class="icon"/>
                        <font-awesome-icon :icon="['fab', 'google']" class="icon"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores voluptas beatae reiciendis accusantium expedita.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- End Our Team -->
</template>
<script>
export default{
    name: "Team",
    data() {
        return {
            img: 'aessts/img/team-member-4.png'
        }
    }
}
</script>
