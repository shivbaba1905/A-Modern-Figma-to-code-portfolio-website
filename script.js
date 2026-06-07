const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const imageGlow = document.getElementById('image-glow');

// डिफ़ॉल्ट रूप से पहले फ्रंटएंड का ग्लो सेट करना
imageGlow.classList.add('glow-blue');

// शुरुआत में वेबसाइट 'frontend' स्टेट में लोड होगी
let currentRole = "frontend";

// चारों प्रोफेशन्स का सही टेक्स्ट, डिस्क्रिप्शन और ग्लो डेटा
const portfolioData = {
    frontend: {
        titleHTML: 'I am a <span class="highlight toggle-role frontend-color">Frontend Developer</span>',
        description: 'I am a creative Frontend Developer with a passion for writing clean code. I build responsive websites using HTML, CSS, and JavaScript, ensuring thorough testing and debugging across all devices.',
        glowClass: 'glow-blue'
    },
    graphic: {
        titleHTML: 'I am a <span class="highlight toggle-role graphic-color">Graphic Designer</span>',
        description: 'I am a creative Graphic Designer passionate about crafting visually engaging assets like social media banners, wedding photo albums, and custom templates. I apply multi-effect styling to graphic design and execute creative ideas effectively.',
        glowClass: 'glow-green'
    },
    designer: {
        titleHTML: 'I am a <span class="highlight toggle-role frontend-des-color">Frontend Designer</span>',
        description: 'I am a creative Frontend Designer who bridges the gap between beautiful design and clean code. I specialize in crafting user-friendly interfaces in Figma and bringing them to life using HTML and CSS, ensuring a seamless experience across all devices.',
        glowClass: 'glow-cyan'
    },
    uiux: {
        titleHTML: 'I am a <span class="highlight toggle-role uiux-color">UI/UX Designer</span>',
        description: "I am a creative designer focused on crafting user-centric designs and intuitive UI/UX flows. I specialize in building wireframes and interactive prototypes in Figma to bring ideas to life. Let's create something amazing together!",
        glowClass: 'glow-purple'
    }
};

// क्लिक इवेंट को सुनना
heroTitle.addEventListener('click', function(e) {
    if(e.target.classList.contains('toggle-role')) {
        
        // एनीमेशन क्लासेस हटाना
        heroTitle.classList.remove('fade-animation');
        heroDesc.classList.remove('fade-animation');
        void heroTitle.offsetWidth; 
        
        // 4-वे टॉगल लॉजिक (4-way Toggle Logic)
        if (currentRole === "frontend") {
            heroTitle.innerHTML = portfolioData.graphic.titleHTML;
            heroDesc.textContent = portfolioData.graphic.description;
            imageGlow.className = "image-glow-wrapper " + portfolioData.graphic.glowClass;
            currentRole = "graphic";
            
        } else if (currentRole === "graphic") {
            heroTitle.innerHTML = portfolioData.designer.titleHTML;
            heroDesc.textContent = portfolioData.designer.description;
            imageGlow.className = "image-glow-wrapper " + portfolioData.designer.glowClass;
            currentRole = "designer";
            
        } else if (currentRole === "designer") {
            // Frontend Designer से UI/UX Designer पर जाना
            heroTitle.innerHTML = portfolioData.uiux.titleHTML;
            heroDesc.textContent = portfolioData.uiux.description;
            imageGlow.className = "image-glow-wrapper " + portfolioData.uiux.glowClass;
            currentRole = "uiux";
            
        } else {
            // UI/UX Designer से वापस Frontend Developer पर आना
            heroTitle.innerHTML = portfolioData.frontend.titleHTML;
            heroDesc.textContent = portfolioData.frontend.description;
            imageGlow.className = "image-glow-wrapper " + portfolioData.frontend.glowClass;
            currentRole = "frontend";
        }
        
        // एनीमेशन जोड़ना
        heroTitle.classList.add('fade-animation');
        heroDesc.classList.add('fade-animation');
    }
});

