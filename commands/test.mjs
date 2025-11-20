client.on('messageCreate', (message) => {
    // Bot自身のメッセージは無視
    if (message.author.bot) return;
    
    // 「ping」メッセージに反応
    if (message.content.toLowerCase() === 'test') {
        message.reply('lol');
        console.log(`📝 ${message.author.tag} が ping コマンドを使用`);
    }
});