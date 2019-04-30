const crypto = require('crypto');
const HttpStatus = require('http-status-codes');

function sha1Encode(data) {
    const hash = crypto.createHash('sha1');
    hash.update(data);
    return hash.digest('hex');
}

module.exports.digestAuth = (request, response, next) => {
    const authorization = request.headers.authorization;
    const code = sha1Encode('password');
    const encoded = authorization.replace('Basic ', '');
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    const [login, password] = decoded.split(':');
    console.log(code);
    console.log(login);
    console.log(password);
    if (login === 'node' && password === code) return next();
    response.sendStatus(HttpStatus.UNAUTHORIZED);
}