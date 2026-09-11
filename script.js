let currentLang = "en";

// Content for each popup, in both languages
const popupContent = {
    paymentFailed: {
        title: {
            en: "❌ Payment Failed",
            hi: "❌ भुगतान विफल"
        },
        body: {
            en: `
                <ol>
                    <li>Check your internet connection.</li>
                    <li>Wait a few minutes and check the transaction status.</li>
                    <li>Do not make repeated payments immediately.</li>
                    <li>If money was deducted, check your bank/payment app status.</li>
                </ol>
            `,
            hi: `
                <ol>
                    <li>अपना इंटरनेट कनेक्शन जांचें।</li>
                    <li>कुछ मिनट प्रतीक्षा करें और लेन-देन की स्थिति जांचें।</li>
                    <li>तुरंत बार-बार भुगतान न करें।</li>
                    <li>अगर पैसा कट गया है, तो अपने बैंक/भुगतान ऐप की स्थिति जांचें।</li>
                </ol>
            `
        }
    },

    networkProblem: {
        title: {
            en: "📶 Network Problem",
            hi: "📶 नेटवर्क समस्या"
        },
        body: {
            en: `
                <ol>
                    <li>Check your mobile data/Wi-Fi.</li>
                    <li>Move to an area with better network coverage.</li>
                    <li>Wait and try again when the connection is stable.</li>
                </ol>
            `,
            hi: `
                <ol>
                    <li>अपना मोबाइल डेटा/वाई-फाई जांचें।</li>
                    <li>बेहतर नेटवर्क कवरेज वाली जगह पर जाएं।</li>
                    <li>कनेक्शन स्थिर होने पर प्रतीक्षा करें और फिर से कोशिश करें।</li>
                </ol>
            `
        }
    },

    fraudHelp: {
        title: {
            en: "🛡️ Fraud & Safety",
            hi: "🛡️ धोखाधड़ी और सुरक्षा"
        },
        body: {
            en: `
                <ul>
                    <li>Never share your UPI PIN.</li>
                    <li>Never share OTPs.</li>
                    <li>Verify the receiver before paying.</li>
                    <li>Do not trust suspicious payment requests.</li>
                </ul>
            `,
            hi: `
                <ul>
                    <li>अपना UPI पिन कभी साझा न करें।</li>
                    <li>OTP कभी साझा न करें।</li>
                    <li>भुगतान करने से पहले प्राप्तकर्ता की पुष्टि करें।</li>
                    <li>संदिग्ध भुगतान अनुरोधों पर भरोसा न करें।</li>
                </ul>
            `
        }
    },

    paymentGuide: {
        title: {
            en: "📖 Simple Payment Guide",
            hi: "📖 सरल भुगतान गाइड"
        },
        body: {
            en: `
                <ol>
                    <li>Open your payment app.</li>
                    <li>Scan the vendor/customer QR code.</li>
                    <li>Enter the correct amount.</li>
                    <li>Verify the receiver name.</li>
                    <li>Complete the payment securely.</li>
                </ol>
            `,
            hi: `
                <ol>
                    <li>अपना भुगतान ऐप खोलें।</li>
                    <li>विक्रेता/ग्राहक का QR कोड स्कैन करें।</li>
                    <li>सही राशि दर्ज करें।</li>
                    <li>प्राप्तकर्ता का नाम सत्यापित करें।</li>
                    <li>सुरक्षित रूप से भुगतान पूरा करें।</li>
                </ol>
            `
        }
    }
};

// Tracks which popup is currently open, so we can re-render it on language switch
let activePopupKey = null;

function toggleLanguage() {
    currentLang = currentLang === "en" ? "hi" : "en";

    // Swap all page text tagged with data-en / data-hi
    document.querySelectorAll("[data-en]").forEach(el => {
        el.textContent = currentLang === "en"
            ? el.getAttribute("data-en")
            : el.getAttribute("data-hi");
    });

    // If a popup is open, re-render it in the new language too
    if (activePopupKey) {
        renderPopup(activePopupKey);
    }
}

function showHelp() {
    document.getElementById("help").scrollIntoView({
        behavior: "smooth"
    });
}

// Renders (or re-renders) a popup by key, using the current language
function renderPopup(key) {
    activePopupKey = key;
    const data = popupContent[key];

    const oldPopup = document.getElementById("paymentPopup");
    if (oldPopup) oldPopup.remove();

    const popup = document.createElement("div");
    popup.id = "paymentPopup";

    const okLabel = currentLang === "en" ? "Got it ✓" : "समझ गया ✓";

    popup.innerHTML = `
        <div class="popup-box">
            <button class="close-btn" onclick="closePopup()">×</button>
            <h2>${data.title[currentLang]}</h2>
            <div class="popup-content">${data.body[currentLang]}</div>
            <button class="popup-ok" onclick="closePopup()">${okLabel}</button>
        </div>
    `;

    document.body.appendChild(popup);
}

// Close popup
function closePopup() {
    const popup = document.getElementById("paymentPopup");
    if (popup) popup.remove();
    activePopupKey = null;
}


// Payment Failed
function paymentFailed() {
    renderPopup("paymentFailed");
}


// Network Problem
function networkProblem() {
    renderPopup("networkProblem");
}


// Fraud & Safety
function fraudHelp() {
    renderPopup("fraudHelp");
}


// Payment Guide
function paymentGuide() {
    renderPopup("paymentGuide");
}


// Popup styling
const style = document.createElement("style");

style.innerHTML = `
#paymentPopup {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
}

.popup-box {
    position: relative;
    background: white;
    width: 90%;
    max-width: 450px;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.25);
    font-family: Arial, sans-serif;
}

.popup-box h2 {
    margin-top: 0;
    margin-bottom: 20px;
}

.popup-content {
    font-size: 16px;
    line-height: 1.7;
}

.popup-content li {
    margin-bottom: 10px;
}

.close-btn {
    position: absolute;
    right: 15px;
    top: 10px;
    border: none;
    background: none;
    font-size: 28px;
    cursor: pointer;
}

.popup-ok {
    margin-top: 15px;
    padding: 10px 22px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 15px;
}
`;

document.head.appendChild(style);