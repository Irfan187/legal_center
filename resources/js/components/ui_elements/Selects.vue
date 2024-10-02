<template>
    <div class="custom-single-select" v-if="multiple == false">
        <label v-if="label" :for="selectId">{{ label }}</label>
        <div class="select-options-wrapper" :class="{ open: isSingleOpen }">
            <div class="selected-option" @click="toggleSingleDropdown">
                <span>{{ singleSelectedOptionLabel || placeholder }}</span>
                <i class="bi" :class="{ 'bi-chevron-up': isSingleOpen, 'bi-chevron-down': !isSingleOpen }"></i>
            </div>
            <div v-if="isSingleOpen" class="select-options-dropdown">
                <input type="text" class="select-options-search" placeholder="Search options..."
                    v-model="singleSearchTerm" @input="filterSingleOptions" />
                <ul>
                    <li v-for="option in filteredSingleOptions" :key="option.value" @click="toggleSingleDropdown"
                        @click.stop="selectSingleOption(option)" :class="{ selected: localValue === option.value }">
                        {{ option.label }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="custom-multiselect" v-else>
        <label v-if="label" :for="selectId">{{ label }}</label>
        <div class="multiselect-wrapper" @click="toggleDropdown">
            <div class="selected-options">
                <span v-if="multiple && selectedOptions.length">
                    <span v-for="tag in selectedOptions" :key="tag.value" class="tag" @click.stop="removeTag(tag)">
                        {{ tag.label }} <span class="remove-tag">×</span>
                    </span>
                </span>
                <span v-else-if="multiple && selected_options.value">
                    {{ selectedOptionLabel }}
                </span>
                <input :id="selectId" class="multiselect-input" :placeholder="placeholder" @input="filterOptions"
                    @focus="toggleDropdown" :disabled="disabled" />
            </div>
        </div>
        <div v-if="isOpen" class="options-dropdown">
            <input type="text" class="form-control search-items" placeholder="Search options..." @input="filterOptions"
                @keyup="searchData" v-model="searchTerm" />
            <ul>
                <li v-for="option in filteredOptions" :key="option.value" @click="selectOption(option)"
                    :class="{ selected: isSelected(option) }">
                    {{ option.label }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { ref, watch, computed } from 'vue';

const props = defineProps({
    options: { type: Array, required: true },
    value: { type: [Array, String], default: '' },
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    selectId: { type: String, required: true },
});


const singleSearchTerm = ref('');
const isSingleOpen = ref(false);
const localValue = ref(props.value);

const filteredSingleOptions = computed(() =>
    singleSearchTerm.value === ''
        ? props.options
        : props.options.filter((option) =>
            option.label.toLowerCase().includes(singleSearchTerm.value.toLowerCase())
        )
);

const singleSelectedOptionLabel = computed(() =>
    props.options.find((option) => option.value === localValue.value)?.label || ''
);

const toggleSingleDropdown = () => {
    isSingleOpen.value = !isSingleOpen.value;
};

const filterSingleOptions = () => {
    isSingleOpen.value = true;
};

const selectSingleOption = (option) => {
    localValue.value = option.value;
    singleSearchTerm.value = '';
};


//Multi Select
const placeholder = props.multiple == true ? ref('Select Options') : ref('Select an Option');
const selected_options = ref(props.value);
const searchTerm = ref('');
const isOpen = ref(false);

const selectedOptions = computed(() =>
    Array.isArray(selected_options.value)
        ? props.options.filter((option) => selected_options.value.includes(option.value))
        : []
);

const selectedOptionLabel = computed(() =>
    props.options.find((option) => option.value === selected_options.value)?.label || ''
);

const filteredOptions = computed(() =>
    searchTerm.value === ''
        ? props.options
        : props.options.filter((option) =>
            option.label.toLowerCase().includes(searchTerm.value.toLowerCase())
        )
);

watch(
    () => selected_options.value,
    (newVal) => {
        placeholder.value = newVal && (Array.isArray(newVal) ? newVal.length > 0 : newVal) ? '' : 'Select Options';
    }
);

function isSelected(option) {
    return props.multiple && Array.isArray(selected_options.value)
        ? selected_options.value.includes(option.value)
        : selected_options.value === option.value;
}

const selectOption = (option) => {
    if (props.multiple) {
        if (selected_options.value.includes(option.value)) {
            selected_options.value = selected_options.value.filter((value) => value !== option.value);
        } else {
            selected_options.value = [...selected_options.value, option.value];
        }
    } else {
        selected_options.value = option.value;
        isOpen.value = false;
    }
    searchTerm.value = '';
};

const removeTag = (tag) => {
    if (props.multiple) {
        selected_options.value = selected_options.value.filter((value) => value !== tag.value);
    }
};

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const filterOptions = () => {
    isOpen.value = true;
};
</script>
