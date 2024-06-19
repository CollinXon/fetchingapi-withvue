import { ref, computed } from "vue";

export default function usePagination(data, itemsPerPage = 1) {
  const currentPage = ref(1);

  const totalPages = computed(() => {
    if (!data.value) return 0;
    return Math.ceil(data.value.length / itemsPerPage);
  });

 const paginatedData = computed(() => {
    if (!data.value) return [];
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.value.slice(startIndex, endIndex);
  });

  function goToPage(page) {
    if (page < 1 || page > totalPages.value) {
      return;
    }
    currentPage.value = page;
  }

  return {
    currentPage,
    totalPages,
    paginatedData,
    goToPage,
  };
}
