document.addEventListener('DOMContentLoaded', function () {
    const qualitySelector = document.getElementById('qualitySelector');
    const qualityImage = document.getElementById('qualityImage');

    const images = {
        '144p': './assets/love2.webp',
        '360p': './assets/love3.webp',
        '480p': './assets/love1.jpg',
        '720p': './assets/love4.jpg',
        '1080p': './assets/14.jpg'
    };

    // Function to update the image based on the selected value
    function updateImage() {
        const selectedQuality = qualitySelector.value;
        if (images[selectedQuality]) {
            qualityImage.src = images[selectedQuality];
            qualityImage.style.display = 'block'; // Show the image
        } else {
            qualityImage.style.display = 'none'; // Hide the image if no valid option
        }
    }

    // Add event listener for changes in the dropdown
    qualitySelector.addEventListener('change', updateImage);

    // Initialize the image based on the currently selected option
    updateImage();
});
