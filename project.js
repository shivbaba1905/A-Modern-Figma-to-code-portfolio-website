  // ================= DYNAMIC PROJECTS FILTER & 2-WAY BACK BUTTON LOGIC =================
const viewWorkBtn = document.querySelector('.btn-yellow'); // होम पेज का 'View My Work' बटन
const projectMenu = document.getElementById('project-menu');
const projectsContainer = document.getElementById('projects-container');
const projectRoleCards = document.querySelectorAll('.project-role-card');
const projectDisplayGroups = document.querySelectorAll('.project-display-group');
const projectBackArrow = document.getElementById('project-back-arrow');

// 1. होम पेज के 'View My Work' पीले बटन पर क्लिक करने का लॉजिक
if(viewWorkBtn) {
    viewWorkBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // यदि कोई प्रोजेक्ट पहले से खुला हुआ था, तो उसे रीसेट करके मुख्य 4 कार्ड्स दिखाना
        projectsContainer.classList.remove('active');
        projectMenu.classList.remove('hidden');
        
        // धीरे से स्क्रॉल करके नीचे प्रोजेक्ट्स सेक्शन पर ले जाना
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });
}

// 2. जब यूजर किसी ग्लास-ग्लो (Glass-Glow) कार्ड पर क्लिक करके उसके 3 प्रोजेक्ट्स के अंदर जाए
projectRoleCards.forEach(card => {
    card.addEventListener('click', function() {
        // 4 मुख्य कार्ड्स (और एचटीएमएल में इसके साथ छिपे ग्लोबल बैक बटन) को पूरी तरह छुपाना
        projectMenu.classList.add('hidden');
        
        // 3 प्रोजेक्ट्स वाले बॉक्स कंटेनर को स्क्रीन पर दिखाना
        projectsContainer.classList.add('active');
        
        // सभी पुराने खुले हुए प्रोजेक्ट ग्रुप्स को पहले छुपाना (साफ करना)
        projectDisplayGroups.forEach(group => group.classList.remove('active'));
        
        // क्लिक हुए कार्ड के अनुसार सही प्रोजेक्ट ग्रुप (जैसे Food App, Music Player) एक्टिव करना
        const targetGroupId = this.getAttribute('data-project-target');
        const targetGroup = document.getElementById(targetGroupId);
        if (targetGroup) {
            targetGroup.classList.add('active');
        }
    });
});

// 3. जब यूजर 3 प्रोजेक्ट्स के अंदर वाले कॉर्नर Back Arrow पर क्लिक करके वापस 4 कार्ड्स पर आए
projectBackArrow.addEventListener('click', function() {
    // 3 प्रोजेक्ट्स वाले बॉक्स को छुपाना
    projectsContainer.classList.remove('active');
    
    // वापस चारों मुख्य ग्लास-ग्लो कार्ड्स और ग्लोबल बैक बटन को स्क्रीन पर दिखाना
    projectMenu.classList.remove('hidden');
});
