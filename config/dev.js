module.exports = {
    googleClientID: '777502287478-q985306nqk8hpvihor13toedrie0sea1.apps.googleusercontent.com',
    googleClientSecret: 'fvgBfxlnA-DNw0cpe9q7hglZ',
    mongoURI: 'mongodb://andredev:hyetsb@ds129394.mlab.com:29394/vendible-dev',
    cookieKey: 'p248oweryGEHWFJDK55o2i4tyhwefI3RUEWFHoqufahsczxlougrp2we'
}

// mongoimport -h ds129394.mlab.com:29394 -d vendible-dev -c apparel -u andredev -p hyetsb --file app.json
// mongoimport -h ds129394.mlab.com:29394 -d vendible-dev -c electronics -u andredev -p hyetsb --file elec.json
// mongoimport -h ds129394.mlab.com:29394 -d vendible-dev -c homegoods -u andredev -p hyetsb --file home.json