
const CONFIG = {
    valentineName: "jack",
    pageTitle: "will you...be my valentine?",
    floatingEmojis: {
        hearts: ['💞', '💖', '💝', '💗', '💓'], 
        bears: ['🦶', '🔗']              
    },

    questions: {
        first: {
            text: "do u....like like me?",     
            yesBtn: "yeeees",                   
            noBtn: "no i hate u",                                       
            secretAnswer: "i dont like you, i love you"       
        },
        second: {
            text: "OK YAY how much do u love me?", 
            startText: "this much", 
            nextBtn: "next"    
        },
        third: {
            text: "will u be my valentine? 🌹",
            yesBtn: "yeth!",      
            noBtn: "naur"     
        }
    },


    loveMessages: {
        extreme: "ok fine u win the ily more competition", 
        high: "no i love you more",   
        normal: "thats it??" 
    },

    celebration: {
        title: "YAY you make me so happy",
        message: "i love you!",
        emojis: "🦶"  
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
