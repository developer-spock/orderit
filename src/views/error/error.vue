<template>
  <router-link :to="{ name: 'main'}" custom v-slot="{ href, navigate, isActive }">
    <a :href="href" @click="navigate" :class="{ 'active': isActive }">메인이동</a>
  </router-link>
</template>

<script>
export default {
  mounted: function() {
    this.$router.push({ name: 'main' });
  },
};
</script>