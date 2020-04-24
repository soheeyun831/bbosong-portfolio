<template>
  <aside class="common-side">
    <router-link to="/" class="logo">
      <img src="../../../../assets/images/sohee-logo.png" />
    </router-link>
    <p class="hi">
      Hi~ I am Sohee,yun :) 👋
    </p>
  </aside>
</template>

<script>
export default {
  name: "index"
};
</script>

<style lang="scss" scoped>
.common-side {
  left: 0;
  top: 30px;
  z-index: 12;
  width: 100px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: fixed;

  .logo {
    position: relative;
    width: 50px;
    height: 50px;
    cursor: pointer;

    img {
      width: 100%;
    }
  }

  .hi {
    position: absolute;
    left: 48px;
    top: 92px;
    width: 220px;
    color: #191919;
    font-size: 17px;
    opacity: 1;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: left center;
    transform-origin: left center;
    font-family: "Russo", cursive;
    transition: opacity 300ms;
  }
}

@media (max-width: 890px) {
  .common-side {
    top: 20px;

    .hi {
      opacity: 0;
      display: none;
      transition: opacity 300ms;
    }
  }
}
</style>
