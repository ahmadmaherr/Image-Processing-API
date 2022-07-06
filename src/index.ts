import express from 'express';
import imageRouter from './routes/img_router.route';
import imagesRouter from './routes/imgs_router.route';
export const app = express();

app.listen(3000, (): void => {
  console.log('server is running');
});
app.use('/images', imageRouter);
app.use('/images', imagesRouter);

module.exports = app;
