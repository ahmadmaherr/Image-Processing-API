import express from 'express';
import imgCropper from '../utilities/cropper';
const path = require('path');
const fs = require('fs');
const imageRouter = express.Router();

const errorMessage: string = `      <h1>Image not found, please choose one of the following images:</h1>
      <ul>
        <li><a href="http://localhost:3000/images/encenadaport">encenadaport</a></li>
        <li><a href="http://localhost:3000/images/fjord">fjord</a></li>
        <li><a href="http://localhost:3000/images/icelandwaterfall">icelandwaterfall</a></li>
        <li><a href="http://localhost:3000/images/palmtunnel">palmtunnel</a></li>
        <li><a href="http://localhost:3000/images/santamonica">santamonica</a></li>
      </ul>`;

imageRouter.get(
  '/:imgName',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const imgName: string = req.params.imgName;
    const imgWidth: number = parseInt(req.query.width as string);
    const imgHeight: number = parseInt(req.query.height as string);
    const imgNames: string[] = await fs.promises.readdir('images');
    const sourceImg: string = path.join(
      __dirname,
      '../',
      '../',
      'images',
      `${imgName}.jpg`
    );
    const distinationIMG: string = path.join(
      __dirname,
      '../',
      '../',
      'croppedImages',
      `${imgName}-${imgWidth}-${imgHeight}.jpg`
    );

    try {
      if (!imgNames.includes(imgName + '.jpg')) throw new Error();
      else if (!imgWidth && !imgHeight) {
        res.status(200).sendFile(sourceImg);
      } else {
        await imgCropper(sourceImg, distinationIMG, imgWidth, imgHeight);
        await res.status(200).sendFile(distinationIMG);
      }
    } catch (error) {
      res.status(404).send(errorMessage);
    }
  }
);

export default imageRouter;
