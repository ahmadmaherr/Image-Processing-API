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
const imagesRouter = express_1.default.Router();
const message = `
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
imagesRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send(message);
}));
exports.default = imagesRouter;
