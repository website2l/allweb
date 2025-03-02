
        document.addEventListener("DOMContentLoaded", function() {
            const channelContainer = document.getElementById("ChannelContainer");
            const baseUrl = "https://website2l.github.io/allweb/movies-file/search-qurye-filtered-movies.html?channel=";

            // Unique channels collect karna
            const uniqueChannels = new Set();
            
            movies.forEach(movie => {
                movie.channel.split(',').forEach(ch => {
                    const trimmedChannel = ch.trim();
                    if (trimmedChannel) uniqueChannels.add(trimmedChannel);
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
			// Yiahan end hoti hai

            uniqueChannels.forEach(channel => {
                const encodedChannel = encodeURIComponent(channel); // URL mein "%20" use hoga
                const className = channel.toLowerCase().replace(/\s+/g, "-") + "-movies"; // Class name mein "-" use hoga

                const link = document.createElement("a");
                link.href = baseUrl + encodedChannel;
                link.className = className;
                link.textContent = channel; // EXACT same format as given in data

                // optional ye yiahan se start hoti hai** coding **Random HEX colors apply hota hai 
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
				// Yiahan end hoti hai

                channelContainer.appendChild(link);
            });
        });
