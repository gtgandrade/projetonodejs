module.exports = function(app){
    app.get('/', function(req, res){
        res.render("raspberry/home");
    });

    app.get('/raspberry/liga', function(req, res){
        res.render("raspberry/liga");
    });

    app.get('/raspberry/desliga', function(req, res){
        res.render("raspberry/desliga");
    });

    app.post('/ligarled', function(req, res){
          app.get('shell').exec('gpio mode 7 out');
          app.get('shell').exec('gpio write 7 1');
          app.get('io').emit('ligado');
          res.redirect('/raspberry/desliga');
    });
    app.post('/desligarled', function(req, res){
          app.get('shell').exec('gpio mode 7 out');
          app.get('shell').exec('gpio write 7 0');
          app.get('io').emit('desligado');
          res.redirect('/raspberry/liga');
    });
}