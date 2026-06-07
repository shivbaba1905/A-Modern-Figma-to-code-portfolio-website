    const skillsMenu = document.getElementById('skills-menu');
const barsContainer = document.getElementById('bars-container');
const roleCards = document.querySelectorAll('.skill-role-card');
const progressGroups = document.querySelectorAll('.skills-progress-group');
const skillsBackArrow = document.getElementById('skills-back-arrow');

// 1. जब यूजर किसी कलरफुल कार्ड पर क्लिक करके उसके अंदर जाए
roleCards.forEach(card => {
    card.addEventListener('click', function() {
        // 4 कार्ड्स, मुख्य हेडिंग और ग्लोबल बैक बटन को पूरी तरह छुपाना
        skillsMenu.classList.add('hidden');
        
        // प्रोग्रेस बार कंटेनर बॉक्स को स्क्रीन पर दिखाना
        barsContainer.classList.add('active');
        
        // सभी पुराने एक्टिव बार ग्रुप्स को पहले रीसेट (साफ) करना
        progressGroups.forEach(group => group.classList.remove('active'));
        
        // क्लिक हुए कार्ड का सही टारगेट बार ग्रुप ढूँढकर एक्टिव करना
        const targetId = this.getAttribute('data-target');
        const targetGroup = document.getElementById(targetId);
        if (targetGroup) {
            targetGroup.classList.add('active');
        }
    });
});

// 2. जब यूजर प्रोग्रेस बार के अंदर वाले Back Arrow पर क्लिक करके बाहर आए
skillsBackArrow.addEventListener('click', function() {
    // प्रोग्रेस बार कंटेनर बॉक्स को छुपाना
    barsContainer.classList.remove('active');
    
    // वापस चारों कलरफुल कार्ड्स, हेडिंग और ग्लोबल बैक बटन को स्क्रीन पर दिखाना
    skillsMenu.classList.remove('hidden');
});
