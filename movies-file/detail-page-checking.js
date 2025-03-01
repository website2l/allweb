
    document.addEventListener("DOMContentLoaded", function () {
        const storageKey = "movie_tracking_data";
        let trackingData = JSON.parse(localStorage.getItem(storageKey)) || {};
        
        const container = document.getElementById("movie-details");
        
        if (Object.keys(trackingData).length === 0) {
            container.innerHTML = "<p>No movie data found.</p>";
            return;
        }
        
        let htmlContent = "<table border='1'><tr><th>Title ID</th><th>Title</th><th>Duration (Seconds)</th><th>Opened Count</th></tr>";
        
        for (const tiltid in trackingData) {
            htmlContent += `<tr>
                <td>${tiltid}</td>
                <td>${trackingData[tiltid].title ? trackingData[tiltid].title : "Unknown"}</td>
                <td>${trackingData[tiltid].duration}</td>
                <td>${trackingData[tiltid].count}</td>
            </tr>`;
        }
        
        htmlContent += "</table>";
        container.innerHTML = htmlContent;
    });
