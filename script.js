document.addEventListener('DOMContentLoaded', function () {
    // Tambahkan pesan otomatis saat aplikasi dibuka
    appendMessage('received', 'Hallo, Anggi sayang 😘');
    setTimeout(() => {
        appendMessage('received', 'Sayang, jangan lupa makan yaa. terus gaboleh makan yang terlalu pedes juga.');
    }, 1000);
    setTimeout(() => {
        appendMessage('received', 'Semangat ya sayang kerjanya 😚');
    }, 2000);
    setTimeout(() => {
        appendMessage('received', 'Mas tu kangen terus sama ayaaang. ttp sama sama terus ya saaaayngku 🤗');
    }, 3000);
    setTimeout(() => {
        appendMessage('received', 'I LOVE YOU SAYANG 🫶🏻');
    }, 4000);
});

// Event ketika tombol "Send" ditekan
document.getElementById('sendBtn').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;
    
    if (messageText !== '') {
        // Tampilkan pesan yang dikirim
        appendMessage('sent', messageText);
        messageInput.value = ''; // Kosongkan input

        // Balasan otomatis berdasarkan isi pesan
        let replyText = '';

        if (messageText.toLowerCase().includes('mas adi')) {
            replyText = 'dalem sayangku, cintaku, duniaku 😚';
        } else if (messageText.toLowerCase().includes('mass adi')) {
            replyText = 'dalem sayangku, cintaku, duniaku 😚';
        } else if (messageText.toLowerCase().includes('mass')) {
            replyText = 'dalem sayangku, cintaku, duniaku 😚';
        } else if (messageText.toLowerCase().includes('kangen')) {
            replyText = 'mas juga kangen banget sama ayang... 🥺';
        } else if (messageText.toLowerCase().includes('loveyoumore')) {
            replyText = 'makasih sayangku 😚';
        } else {
            replyText = 'Lanjut di whatsapp ori aja gasih sayaaangku ❤️';
        }

        // Simulasi balasan setelah beberapa detik
        setTimeout(() => {
            appendMessage('received', replyText);
        }, 1500);
    }
});

function appendMessage(type, text) {
    const chatArea = document.getElementById('chat-area');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    messageDiv.textContent = text;
    chatArea.appendChild(messageDiv);

    // Scroll ke bawah saat ada pesan baru
    chatArea.scrollTop = chatArea.scrollHeight;
}
