let url = window.location.search;
let urlSearch = new URLSearchParams(url);
console.log(urlSearch.get("success"));