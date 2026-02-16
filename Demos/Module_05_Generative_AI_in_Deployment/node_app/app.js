app.get('/slow', (req, res) => {
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
        total += i;
    }
    res.send(`Total is ${total}`);
});

app.get('/optimized-slow', (req, res) => {
    const n = 1000000000;
    const total = (n * (n - 1)) / 2;
    res.send(`Total is ${total}`);
});

