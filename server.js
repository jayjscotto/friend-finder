//imports 
const express = require(`express`),
    path = require(`path`),
    app = express(),
    htmlRoutes = require('./app/routing/htmlRoutes'),
    apiRoutes = require('./app/routing/apiRoutes');

var PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('app/public'));

//routing
app.use('/', htmlRoutes);
app.use('/', apiRoutes);

//so question answers get logged in front end 
//then they get passed to apiroutes
//server requires route files and delivers

app.listen(PORT, function () {
    console.log(`Server is running on PORT${PORT}`);
});
