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
const path_1 = __importDefault(require("path"));
const cropper_1 = __importDefault(require("../../utilities/cropper"));
describe('Test image cropping using Sharp', () => {
    it('return the right cropped image with the specified width and height', () => __awaiter(void 0, void 0, void 0, function* () {
        const sourceIMG = path_1.default.join(__dirname, '../', '../', '../', 'images', 'palmtunnel.jpg');
        const distinationIMG = path_1.default.join(__dirname, '../', '../', '../', 'croppedImages', 'palmtunnel-200-200.jpg');
        yield (0, cropper_1.default)(sourceIMG, distinationIMG, 200, 200);
        expect(distinationIMG).toBeTruthy();
    }));
});
