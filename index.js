const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('البوت شغال ومريڨل 100%!');
});
app.listen(process.env.PORT || 3000);

function createBot() {
    const bot = mineflayer.createBot({
        host: 'firasdo.aternos.me', // !!! حط رابط السيرفر تاعك هنا !!!
        username: 'DzBot_247',          // اسم البوت اللي يدخل في السيرفر
        version: '1.21.1'               // !!! رجعها نفس نسخة السيرفر تاعك دوقا !!!
    });

    bot.on('spawn', () => {
        console.log('طيارة! البوت دخل للسيرفر وراه واقف دوقا.');
    });

    bot.on('end', () => {
        console.log('البوت خرج، جاري إعادة المحاولة بعد 60 ثانية...');
        setTimeout(createBot, 60000);
    });

    bot.on('error', (err) => console.log('حدث خطأ: ', err));
}

createBot();
