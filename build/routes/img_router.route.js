"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cropper_1 = __importDefault(require("../utilities/cropper"));
const path = require('path');
const fs = require('fs');
const imageRouter = express_1.default.Router();
const errorMessage = `      <h1>Image not found, please choose one of the following images:</h1>
      <ul>
        <li><a href="http://localhost:3000/images/encenadaport">encenadaport</a></li>
        <li><a href="http://localhost:3000/images/fjord">fjord</a></li>
        <li><a href="http://localhost:3000/images/icelandwaterfall">icelandwaterfall</a></li>
        <li><a href="http://localhost:3000/images/palmtunnel">palmtunnel</a></li>
        <li><a href="http://localhost:3000/images/santamonica">santamonica</a></li>
      </ul>`;
imageRouter.get('/:imgName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imgName = req.params.imgName;
    const imgWidth = parseInt(req.query.width);
    const imgHeight = parseInt(req.query.height);
    const imgNames = yield fs.promises.readdir('images');
    const sourceImg = path.join(__dirname, '../', '../', 'images', `${imgName}.jpg`);
    const distinationIMG = path.join(__dirname, '../', '../', 'croppedImages', `${imgName}-${imgWidth}-${imgHeight}.jpg`);
    try {
        if (!imgNames.includes(imgName + '.jpg'))
            throw new Error();
        else if (!imgWidth && !imgHeight) {
            res.status(200).sendFile(sourceImg);
        }
        else {
            yield (0, cropper_1.default)(sourceImg, distinationIMG, imgWidth, imgHeight);
            yield res.status(200).sendFile(distinationIMG);
        }
    }
    catch (error) {
        res.status(404).send(errorMessage);
    }
}));
exports.default = imageRouter;
