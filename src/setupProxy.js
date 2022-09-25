module.exports = app => {
    app.get('/rmg-templates/info.json', (req, res) => {
        res.send({
            component: 'rmg-templates',
            version: '9.9.9',
            environment: 'DEV',
            instance: 'localhost',
        });
    });
};
