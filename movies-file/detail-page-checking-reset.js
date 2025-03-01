
    function resetBtn() {
        // ✅ Local Storage se movie data remove karna
        localStorage.removeItem("movie_tracking_data");

        // ✅ Page ko reload karna taake sab kuch fresh start ho
        location.reload();
    }
