import express from 'express';

const imagesRouter: express.Router = express.Router();
const message: string = `
<h1>select one image from the folowing:</h1>
<p>Change the query to change image size.
</p>
<ul>
<li><a href="http://localhost:3000/images/encenadaport">encenadaport</a></li>
<li><a href="http://localhost:3000/images/fjord">fjord</a></li>
<li><a href="http://localhost:3000/images/icelandwaterfall">icelandwaterfall</a></li>
<li><a href="http://localhost:3000/images/palmtunnel">palmtunnel</a></li>
<li><a href="http://localhost:3000/images/santamonica">santamonica</a></li>
</ul>
`;

imagesRouter.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    res.status(200).send(message);
  }
);

export default imagesRouter;
