<template>
    <!-- Accomodation -->
    <section class="accomodation spacer-2" id="accomodation">
        <h2 class="display2">Accomodation</h2>
        <div class="slider mt-7">
            <carousel class="owl-carousel" :items="6" :nav="false">
                <div class="card-slider">
                    <img src="images/accomodation-1.jpg" alt="Accomodation">
                    <div class="description">
                        <h6 class="fw-400 text-secondary">Discover More</h6>
                        <h1 class="fw-800 text-dark">Room</h1>
                    </div>
                </div>
                <div class="card-slider">
                    <img src="images/accomodation-2.jpg" alt="Accomodation">
                    <div class="description">
                        <h6 class="fw-400 text-secondary">Discover More</h6>
                        <h1 class="fw-800 text-dark">Room</h1>
                    </div>
                </div>
                <div class="card-slider">
                    <img src="images/accomodation-3.jpg" alt="Accomodation">
                    <div class="description">
                        <h6 class="fw-400 text-secondary">Discover More</h6>
                        <h1 class="fw-800 text-dark">Room</h1>
                    </div>
                </div>
                <div class="card-slider">
                    <img src="images/accomodation-1.jpg" alt="Accomodation">
                    <div class="description">
                        <h6 class="fw-400 text-secondary">Discover More</h6>
                        <h1 class="fw-800 text-dark">Room</h1>
                    </div>
                </div>
                <div class="card-slider">
                    <img src="images/accomodation-2.jpg" alt="Accomodation">
                    <div class="description">
                        <h6 class="fw-400 text-secondary">Discover More</h6>
                        <h1 class="fw-800 text-dark">Room</h1>
                    </div>
                </div>
                <div class="card-slider">
                    <img src="images/accomodation-3.jpg" alt="Accomodation">
                    <div class="description">
                        <h6 class="fw-400 text-secondary">Discover More</h6>
                        <h1 class="fw-800 text-dark">Room</h1>
                    </div>
                </div>
            </carousel>
        </div>
    </section>
</template>

<script>
import carousel from 'vue-owl-carousel';

export default {
    name: "Acomodation",
    components: carousel,
  
};
</script>

<style scoped>

</style>