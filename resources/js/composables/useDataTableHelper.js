
export function useDataTableHelper() {

    const generate = (pageLength, pageSearchQuery, sort, sortDir, page, filters = []) => {
        var queryParams = {};
        if (pageLength.value) {
            queryParams['limit'] = pageLength.value;
        }
        else {
            if (queryParams.limit)
                delete queryParams.limit
        }
        if (pageSearchQuery.value) {
            queryParams['filter'] = pageSearchQuery.value;
        }
        else {
            if (queryParams.filter)
                delete queryParams.filter
        }
        if (sort.value) {
            queryParams['sort'] = sort.value;
        }
        else {
            if (queryParams.sort)
                delete queryParams.sort
        }
        if (sortDir.value) {
            queryParams['dir'] = sortDir.value;
        }
        else {
            if (queryParams.dir)
                queryParams['dir'] = 'asc'
        }
        if (page.value) {
            queryParams['page'] = page.value;
        }
        else {
            if (queryParams.page)
                queryParams['page'] = 1
        }
        if (filters.length > 0) {
            queryParams['filternames'] = [];
            queryParams['filtervalues'] = [];
            queryParams['filtercond'] = [];
            queryParams['filterfieldtype'] = [];
            // queryParams['filteraltnames'] = [];
            filters.forEach((filter) => {
                queryParams['filternames'].push(filter[0]);

                let fvalues = filter[1];
                if (typeof fvalues == 'string' || typeof fvalues == 'number') {
                    queryParams['filtervalues'].push([filter[1]]);
                }
                else {
                    queryParams['filtervalues'].push(filter[1]);
                }

                if (filter[2]) {
                    queryParams['filterfieldtype'].push(filter[2]);
                }
                else {
                    queryParams['filterfieldtype'].push('string');
                }
                if (filter[3]) {
                    queryParams['filtercond'].push(filter[3]);
                }
                else {
                    queryParams['filtercond'].push('and');
                }

                // if(filter[4]){
                //     queryParams['filteraltnames'].push(filter[4]);
                // }
                // else{
                //     queryParams['filteraltnames'].push('');
                // }

            });
        }
        else {
            if (queryParams.filternames) {
                delete queryParams.filternames
            }
            if (queryParams.filtervalues) {
                delete queryParams.filtervalues
            }

        }
        return queryParams;
    }

    const statusAdminUserFormatter = (val, key, item) => {
        return val.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
    }
    const nameAdminUserFormatter = (val, key, item) => {
        return `<a href="/app/manage/permissions" class="text-capitalize" data-id="${item.id}">${val}</a>`;
    }
    const dateFormatter = (val, key, item) => {
        let date = new Date(val);
        return date.toLocaleDateString();
    }

    const dateTimeFormatter = (val, key, item) => {
        let date = new Date(val);
        return date.toLocaleDateString() + date.toLocaleTimeString();
    }

    const statusFormatter = (val, key, item) => {
        return `<span>${val}</span><span class="ms-auto">Block</span>`;
    }

    return { generate, statusAdminUserFormatter, nameAdminUserFormatter, dateFormatter, dateTimeFormatter, statusFormatter };
}