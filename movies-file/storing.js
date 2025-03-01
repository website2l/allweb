
    function waitForMovies(callback) {
        let checkInterval = setInterval(() => {
            if (typeof movies !== "undefined") {  
                clearInterval(checkInterval);
                callback();
            }
        }, 100);
    }

    waitForMovies(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const fullPath = window.location.href;
        const match = fullPath.match(/watchV=([^&]+)/);

        if (match) {
            const tiltid = match[1];
            const storageKey = "movie_tracking_data";
            let trackingData = JSON.parse(localStorage.getItem(storageKey)) || {};

            function getMovieTitle(tiltid) {
                const movie = movies.find(movie => movie.tiltid === tiltid);
                return movie ? movie.title : "Unknown Movie";
            }

            const movieTitle = getMovieTitle(tiltid);

            if (!trackingData[tiltid]) {
                trackingData[tiltid] = { title: movieTitle, count: 0, duration: 0, openTabs: [] };
            }

            // **Title & Count Update**
            trackingData[tiltid].title = movieTitle;
            trackingData[tiltid].count += 1;

            // **Unique Tab ID Generate**
            const tabId = Date.now() + "-" + Math.random().toString(36).substr(2, 5);
            trackingData[tiltid].openTabs = trackingData[tiltid].openTabs || [];
            trackingData[tiltid].openTabs.push(tabId);

            localStorage.setItem(storageKey, JSON.stringify(trackingData));

            console.log(`[TAB OPEN] Tab ID: ${tabId}, Title ID: ${tiltid}, Opened Tabs:`, trackingData[tiltid].openTabs);

            // **Har Tab ke Liye Alag Timer**
            let interval = setInterval(() => {
                let updatedData = JSON.parse(localStorage.getItem(storageKey)) || {};
                if (updatedData[tiltid] && updatedData[tiltid].openTabs.includes(tabId)) {
                    updatedData[tiltid].duration += 1;
                    localStorage.setItem(storageKey, JSON.stringify(updatedData));
                    updateUI(updatedData);
                    console.log(`[TIMER UPDATE] Title ID: ${tiltid}, Duration: ${updatedData[tiltid].duration}`);
                }
            }, 1000); // **Har second duration update hoga**

            // **Jab Page Close Ho, Toh Data Reset Ho**
            window.addEventListener("beforeunload", () => {
                clearInterval(interval);
                let updatedData = JSON.parse(localStorage.getItem(storageKey)) || {};
                if (updatedData[tiltid]) {
                    // **Remove This Tab from Open Tabs**
                    updatedData[tiltid].openTabs = updatedData[tiltid].openTabs.filter(tab => tab !== tabId);

                    // **Agar Koi Bhi Open Tab Nahi Bachi, Toh Duration Reset Karo**
                    if (updatedData[tiltid].openTabs.length === 0) {
                        updatedData[tiltid].duration = 0;
                    }

                    localStorage.setItem(storageKey, JSON.stringify(updatedData));
                    updateUI(updatedData);
                    console.log(`[TAB CLOSE] Tab ID: ${tabId}, Title ID: ${tiltid}, Remaining Tabs:`, updatedData[tiltid].openTabs);
                }
            });

            // **LocalStorage Sync**
            window.addEventListener("storage", (event) => {
                if (event.key === storageKey) {
                    console.log(`[LOCAL STORAGE UPDATED]`, JSON.parse(event.newValue));
                    updateUI(JSON.parse(event.newValue));
                }
            });

            function updateUI(data) {
                let table = document.querySelector("table");
                if (!table) return;

                Object.keys(data).forEach(id => {
                    let row = document.querySelector(`[data-tiltid="${id}"]`);
                    if (row) {
                        row.querySelector(".duration").textContent = data[id].duration;
                        row.querySelector(".count").textContent = data[id].count;
                    }
                });
            }

            updateUI(trackingData);
        }
    });