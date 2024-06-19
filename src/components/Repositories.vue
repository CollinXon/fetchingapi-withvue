<script setup>
import { ref, onMounted, watch, computed } from "vue";
import usePagination from "../PaginationComposition";

const data = ref([]);
const error = ref(null);
const search = ref("");
const filteredData = ref([]);
const isLoading = ref(false);

const itemsPerPage = 2;
const { currentPage, totalPages, paginatedData, goToPage } = usePagination(
  filteredData,
  itemsPerPage
);

onMounted(() => {
  isLoading.value = true;
  fetch("https://api.github.com/users/CollinXon/repos")
    .then((res) => res.json())
    .then((json) => {
      data.value = json;
      filteredData.value = json;
    })
    .catch((err) => (error.value = err))
    .finally(() => {
      isLoading.value = false;
    });
});

watch([search, data], () => {
  if (search.value) {
    filteredData.value = data.value.filter((repo) =>
      repo.name.toLowerCase().includes(search.value.toLowerCase())
    );
  } else {
    filteredData.value = data.value;
  }
  goToPage(1); // Reset to the first page on search change
});
</script>
<template>
  <div>
    <input
      type="text"
      placeholder="Search Repository Here...."
      v-model="search"
      class="search-button"
    />

    <div v-if="error" class="error-page">
      Oops! Error encountered: {{ error.message }}
    </div>

    <div v-else-if="isLoading" id="loader"></div>

    <div v-else="data">
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
  </div>
</template>
