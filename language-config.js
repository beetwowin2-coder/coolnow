const translations = {
    'th': {
        // --- Navbar & Common ---
        'nav-history': 'ประวัติการสั่งซื้อ',
        'nav-products': 'สินค้าทั้งหมด',
        'search-placeholder': 'ค้นหากลิ่นที่ชอบ...',
        'cart-title': '🛒 ตะกร้าสินค้า',
        'cart-empty': '🛒 ตะกร้าว่างเปล่า',
        'btn-checkout': 'ไปหน้าชำระเงิน',
        'summary-price': 'ราคาสินค้า',
        'summary-shipping': 'ค่าจัดส่ง',
        'summary-free': 'ฟรี',
        'summary-total': 'ยอดสุทธิ',

        // --- Index Page ---
        'hero-title': 'สดชื่น เย็นสบาย... <br> <span class="text-pink-500">จากธรรมชาติ</span>',
        'promo-text': 'โปรโมชั่น: ซื้อ 2 ชิ้นขึ้นไป ส่งฟรี!',
        'btn-shop': 'เริ่มช้อปเลย 🛍️',
        'recommend-title': 'สินค้าแนะนำ',
        'btn-add-cart': 'เพิ่มลงตะกร้า +',

        // --- Products Page ---
        'filter-title': 'เลือกจากกลิ่น',
        'cat-all': 'ทั้งหมด',
        'cat-bubble': 'บับเบิ้ลกัม',
        'cat-lemon': 'เลมอนมินต์',
        'result-found': 'พบสินค้า',
        'result-unit': 'รายการ',

        // --- Checkout Page ---
        'checkout-title': 'สรุปรายการสั่งซื้อ',
        'addr-title': '🏠 ที่อยู่จัดส่ง',
        'placeholder-name': 'ชื่อ-นามสกุล',
        'placeholder-phone': 'เบอร์โทรศัพท์',
        'placeholder-addr': 'ที่อยู่จัดส่งอย่างละเอียด',
        'pay-title': 'ชำระเงินผ่าน QR Code',
        'pay-sub': 'สแกนจ่ายแล้วแนบสลิปด้านล่าง',
        'btn-confirm-pay': 'ยืนยันการชำระเงิน',
        'upload-slip': 'กดเพื่อแนบสลิปชำระเงิน',

        // --- Auth Page ---
        'auth-welcome': 'ยินดีต้อนรับ',
        'auth-sub': 'เข้าสู่ระบบเพื่อสะสมแต้มและเช็คสถานะสินค้า',
        'btn-google': 'เข้าสู่ระบบด้วย Google',
        'phone-input': 'เบอร์โทรศัพท์',
        'btn-send-otp': 'ส่งรหัส OTP',
        
        // --- Success Page ---
        'success-msg': 'สั่งซื้อสำเร็จ!',
        'success-sub': 'เราได้รับคำสั่งซื้อของคุณแล้ว'
    },
    'en': {
        // --- Navbar & Common ---
        'nav-history': 'Orders',
        'nav-products': 'Products',
        'search-placeholder': 'Search scent...',
        'cart-title': '🛒 My Cart',
        'cart-empty': '🛒 Your cart is empty',
        'btn-checkout': 'Checkout Now',
        'summary-price': 'Subtotal',
        'summary-shipping': 'Shipping',
        'summary-free': 'Free',
        'summary-total': 'Total',

        // --- Index Page ---
        'hero-title': 'Fresh & Cool... <br> <span class="text-pink-500">From Nature</span>',
        'promo-text': 'Promo: Buy 2+ Free Shipping!',
        'btn-shop': 'Shop Now 🛍️',
        'recommend-title': 'Recommended',
        'btn-add-cart': 'Add to Cart +',

        // --- Products Page ---
        'filter-title': 'Filter by Scent',
        'cat-all': 'All',
        'cat-bubble': 'Bubble Gum',
        'cat-lemon': 'Lemon Mint',
        'result-found': 'Found',
        'result-unit': 'items',

        // --- Checkout Page ---
        'checkout-title': 'Order Summary',
        'addr-title': '🏠 Shipping Address',
        'placeholder-name': 'Full Name',
        'placeholder-phone': 'Phone Number',
        'placeholder-addr': 'Full Address',
        'pay-title': 'Pay via QR Code',
        'pay-sub': 'Scan to pay and upload slip',
        'btn-confirm-pay': 'Confirm Payment',
        'upload-slip': 'Click to upload payment slip',

        // --- Auth Page ---
        'auth-welcome': 'Welcome!',
        'auth-sub': 'Login to track your orders',
        'btn-google': 'Login with Google',
        'phone-input': 'Phone Number',
        'btn-send-otp': 'Send OTP',

        // --- Success Page ---
        'success-msg': 'Order Success!',
        'success-sub': 'Thank you for your purchase'
    }
};

// ฟังก์ชันหลักที่สั่งให้เปลี่ยนหน้าเว็บ
function changeLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    
    // เปลี่ยนข้อความปกติ
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // เปลี่ยนข้อความในช่องกรอก (Placeholder)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // อัปเดตภาษาที่ตัวแปรใน HTML (ถ้ามีฟังก์ชัน updateCartUI อยู่ในหน้านั้น)
    if (typeof updateCartUI === "function") {
        updateCartUI();
    }
}

// เมื่อโหลดหน้าเว็บเสร็จ ให้ตรวจว่าเคยเลือกภาษาอะไรไว้
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'th';
    changeLanguage(savedLang);
});