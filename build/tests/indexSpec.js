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
const app = require('../index'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);
describe('Test endpoint responses', () => {
    it('return the valid endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        // note:  use "/images" and not "http://localhost:3000/images"
        const response = yield request.get('/images/encenadaport?width=200&height=200');
        expect(response.status).toBe(200);
    }));
    it('return error 404 for wrong image name', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/images/dummyImg');
        expect(response.status).toBe(404);
    }));
});
