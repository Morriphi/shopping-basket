require('babel-register')();

const app = require('./src/app');

app.listen(process.env.PORT, () => {
  console.log(`Application running on port ${process.env.PORT}`);
});
