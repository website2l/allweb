
        document.addEventListener("DOMContentLoaded", function() {
            const container = document.getElementById("CategoryContainer");
            const baseUrl = "https://website2l.github.io/allweb/movies-file/search-qurye-filtered-movies.html?category=";

            // Unique categories collect karne ke liye Set use karein
            const uniqueCategories = new Set();

            // Har movie ki category split kar ke Set mein store karein
            movies.forEach(movie => {
                movie.category.split(",").forEach(cat => {
                    uniqueCategories.add(cat.trim()); // Trim spaces aur unique set mein add karein
                });
            });

			// optional ye coding automaticlly background and background hover generate karti hai Yiahan se start hoti hai
            function getRandomHexColor(brightness = 150) {
                let r = Math.floor(Math.random() * brightness);
                let g = Math.floor(Math.random() * brightness);
                let b = Math.floor(Math.random() * brightness);
                return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
            }

            function darkenHexColor(hex, percent) {
                let r = parseInt(hex.substring(1, 3), 16);
                let g = parseInt(hex.substring(3, 5), 16);
                let b = parseInt(hex.substring(5, 7), 16);

                r = Math.max(0, Math.floor(r * (1 - percent / 100)));
                g = Math.max(0, Math.floor(g * (1 - percent / 100)));
                b = Math.max(0, Math.floor(b * (1 - percent / 100)));

                return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
            }
			// Yiahan se end hoti hai

            // Ab har unique category ka `a` tag banayein
            uniqueCategories.forEach(category => {
                const encodedCategory = encodeURIComponent(category); // URL encoding
                const className = category.toLowerCase().replace(/\s+/g, "-") + "-movies"; // CSS class formatting

                const link = document.createElement("a");
                link.href = baseUrl + encodedCategory;
                link.className = className;
                link.textContent = category; // Original category name

                // optional ye coding **yiahan se start hoti hai** Random HEX colors apply hota hai
                const bgColor = getRandomHexColor(220);  // Normal brightness
                const hoverColor = darkenHexColor(bgColor, 15); // Darker shade for hover

                link.style.backgroundColor = bgColor;

                // **Hover par color dark karna**
                link.addEventListener("mouseenter", function() {
                    link.style.backgroundColor = hoverColor;
                    link.style.color = "#fff";
                });

                link.addEventListener("mouseleave", function() {
                    link.style.backgroundColor = bgColor;
                    link.style.color = "#fff";
                });
				// Yiahan se end hoti hai

                container.appendChild(link);
            });

        });
