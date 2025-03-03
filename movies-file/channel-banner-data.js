
        const movies = [
            {
                "channel": "Dezni",
                "channelBanner": `<div class="overlay"></div>
                <div class="content">
                    <h1>Dezni Channel</h1>
                    <p>Subscribe for amazing content!</p>
                </div>`,
                "channelBannerDesignCSS": "https://website2l.github.io/allweb/movies-file/description-css-Dezni.css",
            },
            {
                "channel": "Bollywood Hits",
                "channelBanner": `<div class="overlay"></div>
                <div class="content">
                    <h1>Bollywood Hits</h1>
                    <p>Enjoy the Best Songs!</p>
                </div>`,
                "channelBannerDesignCSS": "https://website2l.github.io/allweb/movies-file/description-css-Bollywood.css",
            },
            {
                "channel": "T-Sires",
                "channelBanner": `<div class="overlay"></div>
                <div class="content">
                    <h1>T-Sires Channel</h1>
                    <p>Non-stop Music Entertainment!</p>
                </div>`,
                "channelBannerDesignCSS": "https://website2l.github.io/allweb/movies-file/description-css-T-Sires.css",
            },
            {
                "channel": "ARY NEWS",
                "channelBanner": `<div class="overlay"></div>
                <div class="content">
                    <h1>ARY NEWS</h1>
                    <p>Breaking News 24/7</p>
                </div>`,
                "channelBannerDesignCSS": "https://website2l.github.io/allweb/movies-file/description-css-ARY.css",
            }
        ];

        function getChannelFromURL() {
            const params = new URLSearchParams(window.location.search);
            return params.get("channel");
        }

        function displayBanner() {
            const channelName = getChannelFromURL();
            const movie = movies.find(m => m.channel === channelName);
            const bannerBox = document.getElementById("bannerBox");
            const dynamicCSS = document.getElementById("dynamicCSS");

            if (movie) {
                bannerBox.innerHTML = movie.channelBanner;
                dynamicCSS.href = movie.channelBannerDesignCSS; // Inject CSS
            } else {
                bannerBox.innerHTML = "<p>Banner Not Found</p>";
            }
        }

        window.onload = displayBanner;
