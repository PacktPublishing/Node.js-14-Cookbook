process.stdin.on('data', data => {
    let name = data.toString().trim().toUpperCase();
    if (name != '') {
        process.stdout.write(`Hello ${name}!`);
    } else {
        process.stderr.write('Input was empty.');
    }
});