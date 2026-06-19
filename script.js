// 等待網頁元素載入完成
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('clickBtn');
    const message = document.getElementById('message');

    // 算命或隨機鼓勵金句陣列
    const quotes = [
        '小彩蛋'
    ];

    // 監聽按鈕點擊事件
    button.addEventListener('click', () => {
        // 隨機選取一句話
        const randomIndex = Math.floor(Math.random() * quotes.length);
        
        // 顯示訊息並改變樣式
        message.textContent = quotes[randomIndex];
        message.className = 'show';
    });
});