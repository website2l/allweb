
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

            // Previous Button
            if (currentPage > 1) {
                pagination.innerHTML += `<a href="?page=${currentPage - 1}" class="prev">&lt; Previous</a>`;
            }

            // Page Numbers - Only 4 Buttons
            let startPage = Math.max(1, currentPage - 1);
            let endPage = Math.min(totalPages, startPage + 3);
            
            if (endPage - startPage < 3) {
                startPage = Math.max(1, endPage - 3);
            }

            for (let i = startPage; i <= endPage; i++) {
                pagination.innerHTML += `<a href="?page=${i}" class="${i === currentPage ? "active" : ""}">${i}</a>`;
            }

            // Next Button
            if (currentPage < totalPages) {
                pagination.innerHTML += `<a href="?page=${currentPage + 1}" class="next">Next &gt;</a>`;
            }

            // Last Page Button
            if (currentPage < totalPages) {
                pagination.innerHTML += `<a href="?page=${totalPages}" class="last">Last ${totalPages}</a>`;
            }
        }

        renderMovies();
        renderPagination();
