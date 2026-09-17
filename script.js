function showHelp() {
    document.getElementById("help").scrollIntoView({
        behavior: "smooth"
    });
}

// Create popup
function showPopup(title, content) {
    const oldPopup = document.getElementById("paymentPopup");
    if (oldPopup) oldPopup.remove();

    const popup = document.createElement("div");
    popup.id = "paymentPopup";

    popup.innerHTML = `
        <div class="popup-box">
            <button class="close-btn" onclick="closePopup()">×</button>
            <h2>${title}</h2>
            <div class="popup-content">${content}</div>
            <button class="popup-ok" onclick="closePopup()">Got it ✓</button>
        </div>
    `;

    document.body.appendChild(popup);
}

// Close popup
function closePopup() {
    const popup = document.getElementById("paymentPopup");
    if (popup) popup.remove();
}


// Payment Failed
unction paymentFailed() {

    const isHindi = document.getElementById("languageBtn").innerText === "English";

    if (isHindi) {
        showPopup(
            "❌ पेमेंट विफल",
            `
            <p><b>क्या हुआ?</b></p>
            <ol>
                <li>अपना इंटरनेट कनेक्शन जांचें।</li>
                <li>कुछ मिनट इंतजार करें और ट्रांजैक्शन का स्टेटस जांचें।</li>
                <li>तुरंत बार-बार पेमेंट करने से बचें।</li>
            </ol>

            <p><b>💰 अगर पैसे कट गए हैं:</b></p>
            <p>
            दोबारा पेमेंट करने से पहले अपने बैंक अकाउंट या पेमेंट ऐप की
            ट्रांजैक्शन हिस्ट्री जांचें।
            </p>

            <p><b>⚠️ अगर ट्रांजैक्शन Pending है:</b></p>
            <p>
            पेमेंट स्टेटस अपडेट होने का इंतजार करें और ट्रांजैक्शन
            रेफरेंस नंबर सुरक्षित रखें।
            </p>
            `
        );

    } else {
        showPopup(
            "❌ Payment Failed",
            `
            <p><b>What happened?</b></p>
            <ol>
                <li>Check your internet connection.</li>
                <li>Wait a few minutes and check the transaction status.</li>
                <li>Do not make repeated payments immediately.</li>
            </ol>

            <p><b>💰 If money was deducted:</b></p>
            <p>
            Check your bank account or payment app transaction history
            before making another payment.
            </p>

            <p><b>⚠️ If the transaction is still pending:</b></p>
            <p>
            Wait for the payment status to update and keep the transaction
            reference number safely.
            </p>
            `
        );
    }
}


// Network Problem
function networkProblem() {
    showPopup(
        "📶 Network Problem",
        `
        <ol>
            <li>Check your mobile data/Wi-Fi.</li>
            <li>Move to an area with better network coverage.</li>
            <li>Wait and try again when the connection is stable.</li>
        </ol>
        `
    );
}


// Fraud & Safety
function fraudHelp() {
    showPopup(
        "🛡️ Fraud & Safety",
        `
        <ul>
            <li>Never share your UPI PIN.</li>
            <li>Never share OTPs.</li>
            <li>Verify the receiver before paying.</li>
            <li>Do not trust suspicious payment requests.</li>
        </ul>
        `
    );
}


// Payment Guide
function paymentGuide() {
    showPopup(
        "📖 Simple Payment Guide",
        `
        <ol>
            <li>Open your payment app.</li>
            <li>Scan the vendor/customer QR code.</li>
            <li>Enter the correct amount.</li>
            <li>Verify the receiver name.</li>
            <li>Complete the payment securely.</li>
        </ol>
        `
    );
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
    document.getElementById("help").scrollIntoView({
        behavior: "smooth"
    });
   function toggleLanguage() {

    const languageBtn = document.getElementById("languageBtn");

    if (languageBtn.innerText === "हिंदी") {

        languageBtn.innerText = "English";

        // HOME
        document.querySelector(".tag").innerText =
            "डिजिटल पेमेंट सहायता";

        document.querySelector(".hero-text h1").innerHTML =
            'डिजिटल पेमेंट हेल्पर <span>युवाओं के लिए</span>';

        document.querySelector(".hero-text h1 + p").innerText =
            "डिजिटल पेमेंट, पेमेंट समस्याओं और ऑनलाइन सुरक्षा के लिए आसान मार्गदर्शन।";

        document.querySelector(".hero-text button").innerText =
            "पेमेंट सहायता लें →";


        // HELP
        document.querySelector("#help .tag").innerText =
            "हम आपकी कैसे मदद कर सकते हैं?";

        document.querySelector("#help h2").innerText =
            "अपनी पेमेंट समस्या चुनें";

        document.querySelector("#help .section-title p:last-child").innerText =
            "समस्या चुनें और आसान चरण-दर-चरण मार्गदर्शन पाएं।";


        const cards = document.querySelectorAll("#help .card");

        cards[0].querySelector("h3").innerText = "पेमेंट विफल";
        cards[0].querySelector("p").innerText =
            "पेमेंट विफल हो गया या पूरा नहीं हुआ?";

        cards[1].querySelector("h3").innerText = "नेटवर्क समस्या";
        cards[1].querySelector("p").innerText =
            "इंटरनेट या नेटवर्क की समस्या है?";

        cards[2].querySelector("h3").innerText =
            "धोखाधड़ी और सुरक्षा";
        cards[2].querySelector("p").innerText =
            "पेमेंट धोखाधड़ी से सुरक्षित रहना सीखें।";

        cards[3].querySelector("h3").innerText =
            "पेमेंट गाइड";
        cards[3].querySelector("p").innerText =
            "डिजिटल पेमेंट के चरण आसानी से सीखें।";


        // SAFETY
        document.querySelector("#safety .tag").innerText =
            "सुरक्षित रहें";

        document.querySelector("#safety h2").innerText =
            "डिजिटल पेमेंट सुरक्षा टिप्स";

        const tips = document.querySelectorAll("#safety .tips div");

        tips[0].innerText = "🔐 अपना UPI PIN कभी साझा न करें।";
        tips[1].innerText = "📱 पेमेंट करने से पहले रिसीवर को जांचें।";
        tips[2].innerText = "🚨 अनजान पेमेंट मैसेज पर भरोसा न करें।";
        tips[3].innerText = "🔎 संदिग्ध रिक्वेस्ट की जांच करें।";


        // ABOUT
        document.querySelector("#about .tag").innerText =
            "हमारा प्रोजेक्ट";

        document.querySelector("#about h2").innerText =
            "हमने PaySaathi क्यों बनाया?";


        // FOOTER
        document.querySelector("footer p").innerText =
            "© 2026 PaySaathi | ऑनलाइन पेमेंट ऐप अपनाने का अध्ययन";

    } else {

        location.reload();

    }
}