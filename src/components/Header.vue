<template>
        <section class="hero" style="background-image: url(images/hero-background.jpg)">
        <div class="container">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="images/logo.png" alt="Logo">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="material-icons-round text-white">menu</span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#accomodation">Accomodation</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#dinning">Dinning</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#room">Room</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#review">Review</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link scroll" href="#address">Address</a>
                            </li>
                        </ul>
                    </div>
                    <!-- <div class="language">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">EN</a></li>
                                <li class="breadcrumb-item active" aria-current="page">ID</li>
                            </ol>
                        </nav>
                    </div> -->
                </div>
            </nav>
            <!-- End Navbar -->

            <!-- Title -->
            <h1 class="display1">Best Place for Your Destination</h1>
        </div>
    </section>
    <!-- End Hero -->
</template>

<script>
export default {
    name: "HeaderHotel"
};
</script>

<style scoped>
/* -----------------------------------------
            2. Navbar
-------------------------------------------- */
.navbar {
    background-color: transparent !important;
}

.navbar .nav-link {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--neutral-white60);
}

.navbar .nav-link:hover {
    color: var(--neutral-white);
}

.navbar .nav-item {
    margin-right: 32px;
}

.navbar .nav-item:last-child {
    margin-right: 0px;
}

.language a {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--neutral-white);
    text-decoration: none;
}

.language .breadcrumb {
    margin-bottom: 0px;
}

.language .active {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--neutral-white60);
}

.language .breadcrumb-item+.breadcrumb-item::before {
    color: var(--neutral-white60);
    padding-right: 16px;
}

.language .breadcrumb-item {
    margin-right: 10px;
}

.navbar .navbar-toggler {
    border: 2px solid var(--neutral-white60);
    border-radius: 48px;
    padding: 8px;
}

.navbar .navbar-toggler span {
    top: 0px
}

/* .navbar-scroll {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    background-color: var(--neutral-white) !important;
    border-bottom: 1px solid var(--light);
}

.navbar-scroll .nav-link {
    color: var(--neutral-whitegray) !important;
}

.navbar .nav-link.active {
    color: var(--primary) !important;
} */

/* -----------------------------------------
            3. Hero
-------------------------------------------- */
.hero {
    background: center bottom;
    background-size: cover;
    min-height: 100vh;
    padding-top: 32px;
}

.hero .display1 {
    max-width: 700px;
    color: var(--neutral-white) !important;
    text-align: center;
    margin: auto;
    margin-top: 168px;
}
</style>