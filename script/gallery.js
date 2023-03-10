const gallery = selector => {
    const galleryContainer = document.querySelectorAll(selector);
    if (!galleryContainer) return;

    const largePhotoHandler = (large, index) => {
        large.forEach((photoLarge, i) => {
            if (i === index){
                photoLarge.classList.add('active');
            } else{
                photoLarge.classList.remove('active');
            }
        });
    }
    
    const smallPhotoHandler = (small, large) => {
        small.addEventListener('click', e => {
            let photoSmall = e.target;
            if (!photoSmall) return;
            [...small.children].forEach((ph, i) => {
                if (ph === photoSmall){
                    ph.classList.add('active');
                    largePhotoHandler([...large.children], i);
                } else{
                    ph.classList.remove('active');
                }
            });
        });
    }


    [...galleryContainer].forEach(photo => {
        const small = photo.querySelector('.photos__small');
        const photoLarge = photo.querySelector('.photos__large');
        smallPhotoHandler(small, photoLarge);
    });

}

gallery('.gallery');