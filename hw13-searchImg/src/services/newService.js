const baseUrl = 'https://pixabay.com/api/?key=13241537-06d8871706b8937518ecf25ca';
export default {
    query: '',
    page: 1,
    fetchImage() {
        const requestParams = `&q=${this.query}&page=${this.page}&per_page=9`;
        return fetch(baseUrl + requestParams)
            .then(response => response.json())
            .then(parsed => {
                this.incrementPage();
                return parsed.hits;
            });
    },
    incrementPage() {
        this.page += 1;
    },
    get searchQuery() {
        return this.query;
    },
    set searchQuery(string) {
        this.query = string;
    },
    resetPage() {
        this.page = 1;
    }


}

// https://pixabay.com/api/?key=13241537-06d8871706b8937518ecf25ca&q=dog