  // ================= CERTIFICATE FULL VIEW MODAL LOGIC =================
const viewFullBtns = document.querySelectorAll('.view-full-btn');
const certModal = document.getElementById('certModal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.getElementById('modalClose');

// 1. बटन पर क्लिक होने पर मोडल खोलना और सही इमेज लोड करना
viewFullBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const fullImgSrc = this.getAttribute('data-img');
        modalImg.src = fullImgSrc;
        certModal.classList.add('active');
    });
});

// 2. क्रॉस (X) बटन दबाने पर पॉप-अप बंद करना
modalClose.addEventListener('click', function() {
    certModal.classList.remove('active');
});

// 3. पॉप-अप बॉक्स के बाहर कहीं भी क्लिक करने पर बंद होना
certModal.addEventListener('click', function(e) {
    if(e.target === certModal) {
        certModal.classList.remove('active');
    }
});
