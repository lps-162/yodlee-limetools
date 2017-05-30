module.exports = {
    setupRouteFunction: setupRouteFunction
};

console.log('This should be running only once');

let person = {
    name: "LP Venkat",
    job: "software",
    city: "bangalore"
};

function setupRouteFunction(app) {
    app.get('/', (req, res) => {
        res.send('Changed again');
    });

    app.get('/employees', (req, res) => {
        res.send(person);
    });
    
    app.use('*', (req, res) => {
        res.send('404 page');
    });
};