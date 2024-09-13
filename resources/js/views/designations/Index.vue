<template>
    <Layout type="app">
      <div class="container mt-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div class="d-flex align-items-center gap-2">
            <button class="btn btn-sm filter-btn rounded-pill" @click="showNameModal = true">
              <i class="fas fa-plus"></i>
              <span class="filter-btn-text">Name</span>
            </button>

            <button class="btn btn-sm filter-btn rounded-pill" @click="showFilterModal = true">
              <i class="fas fa-plus"></i>
              <span class="filter-btn-text">Filters</span>
            </button>
          </div>

          <div>
            <input
              type="text"
              v-model="searchQuery"
              class="form-control"
              placeholder="Search by name..."
              style="width: 250px;"
            />
          </div>
        </div>

        <table class="table table-hover table-bordered">
          <thead class="thead-light">
            <tr>
              <th><input type="checkbox" /></th>
              <th @click="sortBy('name')">
                Name
                <span class="sort-arrow">
                  <i class="fas fa-sort-up" v-if="sortKey === 'name' && sortDirection === 'asc'"></i>
                  <i class="fas fa-sort-down" v-if="sortKey === 'name' && sortDirection === 'desc'"></i>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="designation in sortedDesignations" :key="designation.id">
              <td><input type="checkbox" :value="designation.id" v-model="selectedDesignations" /></td>
              <td>{{ designation.name }}</td>
            </tr>
          </tbody>
        </table>

        <b-modal v-model="showNameModal" title="Name Filter" size="sm" hide-footer>
          <div>
            <div class="form-group">
              <label for="nameFilter">Name</label>
              <select id="nameFilter" v-model="filterByName" class="form-control">
                <option value="">Select Name</option>
                <option v-for="designation in designations" :key="designation.id" :value="designation.name">
                  {{ designation.name }}
                </option>
              </select>
            </div>
            <div class="text-right mt-3 gap-2">
              <button class="btn btn-outline-secondary btn-sm mr-2" @click="clearNameFilter">Clear</button>
              <button class="btn btn-primary btn-sm ml-2" @click="applyNameFilter">Apply</button>
            </div>
          </div>
        </b-modal>

        <b-modal v-model="showFilterModal" title="Filters" size="sm" hide-footer>
          <div>
            <div class="form-group">
              <label for="filterName">Name</label>
              <select id="filterName" v-model="filterByName" class="form-control">
                <option value="">Select Name</option>
                <option v-for="designation in designations" :key="designation.id" :value="designation.name">
                  {{ designation.name }}
                </option>
              </select>
            </div>
            <div class="text-right mt-3 gap-2">
              <button class="btn btn-outline-secondary btn-sm mr-2" @click="clearAllFilters">Clear</button>
              <button class="btn btn-primary btn-sm" @click="applyAllFilters">Apply</button>
            </div>
          </div>
        </b-modal>
      </div>
    </Layout>
  </template>

  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import axios from 'axios';
  import Layout from '@/layouts/Index.vue';

  const searchQuery = ref('');
  const showNameModal = ref(false);
  const showFilterModal = ref(false);
  const filterByName = ref('');
  const selectedDesignations = ref([]);
  const sortKey = ref('');
  const sortDirection = ref('asc');
  const designations = ref([]);

  const dummyDesignations = [
    { id: 1, name: 'Software Engineer' },
    { id: 2, name: 'Product Manager' },
    { id: 3, name: 'UX Designer' },
    { id: 4, name: 'Data Scientist' },
    { id: 5, name: 'DevOps Engineer' },
  ];

  onMounted(() => {
    designations.value = dummyDesignations;
  });

  const sortedDesignations = computed(() => {
    let filtered = designations.value;

    if (searchQuery.value) {
      filtered = filtered.filter(designation =>
        designation.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    }

    if (filterByName.value) {
      filtered = filtered.filter(designation =>
        designation.name.toLowerCase().includes(filterByName.value.toLowerCase())
      );
    }

    if (sortKey.value) {
      filtered.sort((a, b) => {
        if (sortDirection.value === 'asc') {
          return a[sortKey.value] > b[sortKey.value] ? 1 : -1;
        } else {
          return a[sortKey.value] < b[sortKey.value] ? 1 : -1;
        }
      });
    }

    return filtered;
  });

  function selectAll(event) {
    if (event.target.checked) {
      selectedDesignations.value = designations.value.map(designation => designation.id);
    } else {
      selectedDesignations.value = [];
    }
  }

  function clearNameFilter() {
    filterByName.value = '';
    showNameModal.value = false;
  }

  function applyNameFilter() {
    showNameModal.value = false;
  }

  function clearAllFilters() {
    filterByName.value = '';
    showFilterModal.value = false;
  }

  function applyAllFilters() {
    showFilterModal.value = false;
  }

  function sortBy(key) {
    if (sortKey.value === key) {
      sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
      sortKey.value = key;
      sortDirection.value = 'asc';
    }
  }
  </script>

  <style scoped>
  .filter-btn {
    background-color: #183753;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .filter-btn-text {
    display: flex;
    align-items: center;
  }

  .sort-arrow {
    margin-left: 0.5rem;
  }

  .sort-arrow .fa-sort-up,
  .sort-arrow .fa-sort-down {
    color: #007bff;
  }

  .btn {
    background-color: #183753;
    color: white;
  }

  .mt-3 {
    margin-top: 1rem;
  }

  .gap-2 {
    gap: 0.5rem;
  }
  </style>
