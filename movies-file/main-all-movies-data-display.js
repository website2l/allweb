
        // ✅ Step 2: Pehle Categories Add Karo
        const uniqueCategories = new Set();
        const categoryContainer = document.getElementById("CategoryContainer");
        const baseUrl = "https://website2l.github.io/allweb/NiQ-services-items-category.html?category=";

        movies.forEach(movie => {
            let categoryName = movie.category.toLowerCase().trim();
            if (!uniqueCategories.has(categoryName)) {
                uniqueCategories.add(categoryName);
                const categoryUrl = categoryName.replace(/\s+/g, "-");
                const className = categoryName.replace(/\s+/g, "-") + "-movies";
                const displayText = movie.category.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

                const link = document.createElement("a");
                link.href = baseUrl + categoryUrl;
                link.className = className;
                link.textContent = displayText;
                categoryContainer.appendChild(link);
            }
        });

        // ✅ Step 3: Ab Movies Pagination Render Karo
        const moviesPerPage = 6;
        const urlParams = new URLSearchParams(window.location.search);
        let currentPage = parseInt(urlParams.get("page")) || 1;
        const totalPages = Math.ceil(movies.length / moviesPerPage);
        const container = document.getElementById("MoviesCardContainer");
        const pagination = document.getElementById("pagination");

        function renderMovies() {
            container.innerHTML = "";
            let start = (currentPage - 1) * moviesPerPage;
            let end = start + moviesPerPage;
            let paginatedMovies = movies.slice(start, end);

            paginatedMovies.forEach(movie => {
                const movieCard = document.createElement("a");
                movieCard.className = "MoviesCards";
                movieCard.href = `https://website2l.github.io/allweb/NiQ-services-items-category.html?movie=${movie.title.replace(/\s+/g, '-').toLowerCase()}/watchV=${movie.tiltid}`;
                movieCard.innerHTML = `
                    <div class="MovieCardThumbnail">
                        <img src="${movie.Mainimage}" alt="${movie.title}">
                    </div>
                    <div class="MovieCardDetails">
                        <h3>${movie.title}</h3>
                        <p>${movie.category}</p>
                    </div>
                `;
                container.appendChild(movieCard);
            });
        }

        function renderPagination() {
            pagination.innerHTML = "";
            if (currentPage > 1) {
                pagination.innerHTML += `<a href="?page=${currentPage - 1}" class="prev">&lt; Previous</a>`;
            }

            let startPage = Math.max(1, currentPage - 1);
            let endPage = Math.min(totalPages, startPage + 3);
            if (endPage - startPage < 3) {
                startPage = Math.max(1, endPage - 3);
            }

            for (let i = startPage; i <= endPage; i++) {
                pagination.innerHTML += `<a href="?page=${i}" class="${i === currentPage ? "active" : ""}">${i}</a>`;
            }

            if (currentPage < totalPages) {
                pagination.innerHTML += `<a href="?page=${currentPage + 1}" class="next">Next &gt;</a>`;
            }
            if (currentPage < totalPages) {
                pagination.innerHTML += `<a href="?page=${totalPages}" class="last">Last ${totalPages}</a>`;
            }
        }

        renderMovies();
        renderPagination();
