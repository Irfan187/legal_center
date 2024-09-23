<template>
    <div class="container mt-5">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-sm filter-btn rounded-pill" @click="showNameModal = true">
            <i class="fas fa-plus"></i>
            <span class="filter-btn-text">Status</span>
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
</template>
