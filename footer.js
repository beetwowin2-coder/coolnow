function injectLineButton() {
    const lineBtn = document.createElement('div');
    lineBtn.innerHTML = `
        <a href="https://lin.ee/RhhUwXf" target="_blank" 
           class="fixed bottom-24 right-6 z-50 transition-all hover:scale-110 active:scale-90"
           title="ติดต่อเราทาง LINE">
            <div class="relative group">
                <span class="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-xs py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100 font-bold">
                    สอบถามแอดมิน คลิก!
                </span>
                <div class="w-14 h-14 bg-[#06C755] rounded-full shadow-xl flex items-center justify-center border-2 border-white">
                    <img src="images/line.png" class="w-8 h-8 object-contain" alt="LINE">
                </div>
            </div>
        </a>
    `;
    document.body.appendChild(lineBtn);
}

// เรียกใช้งาน
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectLineButton);
} else {
    injectLineButton();
}
