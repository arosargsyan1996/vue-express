const app = require('./app');
const PORT = process.env.PORT || 420;

app.listen(PORT, () => console.log(`App running on ${PORT} port`));
