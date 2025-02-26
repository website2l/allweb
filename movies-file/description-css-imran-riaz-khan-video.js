
    // Simulating content load after 2 seconds
    setTimeout(function() {
        document.querySelector('.skeleton-iframe').style.display = 'none';
        document.querySelector('.skeleton-heading').style.display = 'none';
        document.querySelector('iframe').style.display = 'block';
        document.querySelector('h2 span').style.display = 'block';
    }, 2000);
