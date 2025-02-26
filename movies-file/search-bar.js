
    function searchBtn() {
    let searchInput = document.getElementById("searchInput").value.trim();
    if (searchInput) {
        let formattedQuery = searchInput.replace(/\s+/g, "+");
        let baseUrl = "https://website2l.github.io/allweb/movies-file/search-qurye-filtered-movies.html";
        let finalUrl = `${baseUrl}?search=${formattedQuery}`;
        window.location.href = finalUrl; // Same tab mein open karega
    } else {
        alert("Please enter a search query!");
    }
}

document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchBtn();
    }
});
