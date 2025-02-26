
        document.addEventListener("DOMContentLoaded", function() {
            const container = document.getElementById("CategoryContainer");
        const baseUrl = "https://website2l.github.io/allweb/movies-file/search-qurye-filtered-movies.html?category=";
        
        // Unique categories collect karne ke liye Set use karein
        const uniqueCategories = new Set(movies.map(movie => movie.category));
        
        uniqueCategories.forEach(category => {
            const encodedCategory = encodeURIComponent(category); // URL encoding
            const className = category.toLowerCase().replace(/\s+/g, "-") + "-movies"; // CSS class formatting
        
            const link = document.createElement("a");
            link.href = baseUrl + encodedCategory;
            link.className = className;
            link.textContent = category; // Original category name
        
            container.appendChild(link);
        });
        });
