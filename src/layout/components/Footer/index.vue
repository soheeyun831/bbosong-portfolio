<template>
  <footer>
    <p>
      Copyright 2020. Web Front-end developer portfolio-- by Sohee-Yun ✌
    </p>
  </footer>
</template>

<script>
export default {
  name: "index"
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  position: relative;
  padding: 20px 0;
  color: #292929;
  font-size: 14px;
  text-align: center;
  border-top: 1px solid #cccccc;

  p {
    max-width: calc(100% - 40px);
    margin: 0 auto;
  }
}
</style>
