process.stdin.on('data', (data) => {
    let name = data.toString().trim().toUpperCase();
    process.stdout.write(`Hello ${name}!`);   
});