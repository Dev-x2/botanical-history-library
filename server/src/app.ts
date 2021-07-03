import express from 'express';
import path from 'path';

const app = express();
const port = 8080;
const clientAppLocation = path.join(__dirname, '../public');

app.use(express.static(clientAppLocation));
app.use('*', express.static(clientAppLocation));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
