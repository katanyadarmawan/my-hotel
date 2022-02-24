<template>
      <!-- Guest Review -->
    <section class="guest-review spacer-2" id="review">
        <div class="container">
            <h2 class="display2">Guest <span class="text-primary">Review</span></h2>
            <div id="carouselExampleInterval" class="carousel slide mt-8" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <h3 class="fw-400 text-center">“Nyari hotel yang lokasinya gampang dijangkau dari jalan utama”
                        </h3>
                        <div class="rating mt-7">
                            <span class="material-icons-round md-48 active">star</span>
                            <span class="material-icons-round md-48 active">star</span>
                            <span class="material-icons-round md-48 active">star</span>
                            <span class="material-icons-round md-48 active">star</span>
                            <span class="material-icons-round md-48">star</span>
                        </div>
                        <h5 class="fw-400 text-center mt-2">4 out of 5</h5>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <h3 class="fw-400 text-center">“Test Review 2”</h3>
                        <div class="rating mt-7">
                            <span class="material-icons-round md-48 active">star</span>
                            <span class="material-icons-round md-48 active">star</span>
                            <span class="material-icons-round md-48 active">star</span>
                            <span class="material-icons-round md-48 active">star</span>
                            <span class="material-icons-round md-48">star</span>
                        </div>
                        <h5 class="fw-400 text-center mt-2">4 out of 5</h5>
                    </div>
                    <div class="carousel-item">
                        <h3 class="fw-400 text-center">“Test Review 2”</h3>
                        <div class="rating mt-7">
                            <span class="material-icons-round md-48 active">star</span>
                            <span class="material-icons-round md-48 active">star</span>
                            <span class="material-icons-round md-48 active">star</span>
                            <span class="material-icons-round md-48 active">star</span>
                            <span class="material-icons-round md-48">star</span>
                        </div>
                        <h5 class="fw-400 text-center mt-2">4 out of 5</h5>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev">
                    <span class="material-icons-round btn-control" aria-hidden="true">chevron_left</span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next">
                    <span class="material-icons-round btn-control" aria-hidden="true">chevron_right</span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
    <!-- End Guest Review -->
</template>

<script>
export default {
  name: "Review"
};
</script>

<style scoped>

</style>