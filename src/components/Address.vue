<template>
  <!-- Address -->
  <section class="address spacer-2" id="address">
    <div class="container">
      <h2 class="display2">Address</h2>
      <div class="row spacer-1">
        <div class="col-lg-5">
          <div class="maps">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="600"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?ll=-6.184140199999999,106.83156&q=MNC Tower&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe
                ><a href="https://techwithlove.com/whatsapp-tricks/"
                  >tricks for whatsapp</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div
            class="box"
            style="background-image: url(images/address-background.jpg)"
          >
            <div>
              <h1>SPEND YOUR REST WITH US</h1>
              <h5 class="mt-3">
                Jl. Laksda Adisucipto KM.8, Janti, Caturtunggal, Kec. Depok.
                Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
              </h5>
            </div>
            <a href="" class="btn btn-secondary"
              ><span class="material-icons-round">download</span
              ><span class="btn-ms">Download Brochure</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Address -->
</template>

<script>
export default {
  name: "AddressHotel",
};
</script>

<style scoped>
.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 600px;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
}
</style>