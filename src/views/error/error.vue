<template>
  <router-link :to="{ name: 'main'}" custom v-slot="{ href, navigate, isActive }">
    <a :href="href" @click="navigate" :class="{ 'active': isActive }">메인이동</a>
  </router-link>
</template>
