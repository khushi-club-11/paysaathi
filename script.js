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
function paymentFailed() {
    showPopup(
        "❌ Payment Failed",
        `
        <ol>
            <li>Check your internet connection.</li>
            <li>Wait a few minutes and check the transaction status.</li>
            <li>Do not make repeated payments immediately.</li>
            <li>If money was deducted, check your bank/payment app status.</li>
        </ol>
        `
    );
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
    alert("Button is working!");

    const languageBtn = document.getElementById("languageBtn");

    if (languageBtn.innerText === "हिंदी") {
        languageBtn.innerText = "English";
    } else {
        languageBtn.innerText = "हिंदी";
    }
}

