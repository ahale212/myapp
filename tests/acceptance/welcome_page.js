require('../helper')

var http = require('http');
var expect = require('chai').expect;
var app = require('../../app');

// const dbAlbums = require('../../config/database').get('albums')
var server

// const album1 = {
//     genre: 'Pop',
//     artist: 'Britney Spears',
//     album: 'Hit me baby one more time'
// }
// const album2 = {
//     genre: 'Rap',
//     artist: '50 Cent',
//     album: 'In Da Club'
// }

before(function() {
    server = http.createServer(app);
    server.listen(0);
    browser.baseUrl = 'http://localhost:' + server.address().port;
    browser.ignoreSynchronization = true;
});

// beforeEach(function(done) {
//     dbAlbums.insert(album1, done)
//     dbAlbums.insert(album2, done)
//
//     return browser.ignoreSynchronization = true
// })

// afterEach(function() {
//     dbAlbums.remove({})
// })

after(function() {
    server.close()
})

describe('OMG Albums', function() {
    describe('Given a browser', function() {
        describe('When I visit the albums website', () => {
            it('Then I see the welcome page', function() {
                browser.get('/');
                element(by.css('h1')).getText().then((text) => {
                    expect(text).to.equal('Express');
                })
            })
        })
    })

})
