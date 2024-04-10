src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.3.2/js/lightgallery.min.js"
src="https://cdnjs.cloudflare.com/ajax/libs/lg-thumbnail/1.2.0/lg-thumbnail.min.js"
src="https://cdnjs.cloudflare.com/ajax/libs/lg-fullscreen/1.2.0/lg-fullscreen.min.js"

document.addEventListener('DOMContentLoaded', function() {
    lightGallery(document.querySelector('.gallery'), {
      selector: 'a',
      download: false
    });
});
