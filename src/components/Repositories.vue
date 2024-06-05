<script setup>
import { ref, onMounted, computed } from "vue";
import usePagination from "../PaginationComposition";

const data = ref(null);
const error = ref(null);

const itemsPerPage = 1;
const { currentPage, totalPages, paginatedData, goToPage } = usePagination(
data,
itemsPerPage
);

onMounted(() => {
fetch("https://api.github.com/users/CollinXon/repos")
  .then((res) => res.json())
  .then((json) => (data.value = json))
  .catch((err) => (error.value = err));
});
</script>
<template>
<div>
  <div v-if="error" class="error-page">
    Oops! Error encountered: {{ error.message }}
  </div>

  <div v-else-if="data">
    <div
      v-for="(repo, index) in paginatedData"
      :key="index"
      class="Repos-css"
    >
      <a :href="repo.html_url">{{ repo.name }}</a>
    </div>
    <div class="Paginate-css">
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="previous-button"
      >
        Previous
      </button>
      <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="next-button"
      >
        Next
      </button>
    </div>
  </div>
  <div v-else id="loader"></div>
</div>
</template>
