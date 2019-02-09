var botui = new BotUI('hello-world');

botui.message.add({
    content: 'Hello World from bot! What is your name?'
})
    .then(function () { // wait till previous message has been shown.
        botui.action.text({
            action: { placeholder: "your name..." }
        })
            .then(function (username) {
                botui.message.add({
                    content: 'Hello ' + username.value + ' nice to meet you'
                }).then(function () {
                    botui.action.button({
                        action: [
                            { // show only one button
                                text: 'One',
                                value: 'one'
                            },
                            { // show only one button
                                text: 'Two',
                                value: 'two'
                            }
                        ]
                    })
                        .then(function () {
                            $.get('https://api.chucknorris.io/jokes/random', {}, function success(response) {
                                botui.message.add({
                                    content: response.value
                                })
                            })
                        });

                });
            });
    });

botui.message.add({
    type: 'embed',
    content: 'https://www.youtube.com/embed/PkZNo7MFNFg'
})

