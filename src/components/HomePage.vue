<script>
export default {
  methods: {
    goToRepositories() {
      this.$router.push("/repositories");
    },
  },
};
</script>

<template>
  <div class="Home-css">
    <img src="../assets/images/FB_IMG_1705885966844.jpg" alt="My Image" />

    <h4>Collins Ennah</h4>

    <h2>
      HELLO THERE!
      <p>WELCOME TO COLLIXON'S HUB.</p>
    </h2>

    <button @click="goToRepositories" class="click-button">
      Click Here To Repositories
    </button>
  </div>
</template>
