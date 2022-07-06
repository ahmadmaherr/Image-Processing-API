"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const img_router_route_1 = __importDefault(require("./routes/img_router.route"));
const imgs_router_route_1 = __importDefault(require("./routes/imgs_router.route"));
exports.app = (0, express_1.default)();
exports.app.listen(3000, () => {
    console.log('server is running');
});
exports.app.use('/images', img_router_route_1.default);
exports.app.use('/images', imgs_router_route_1.default);
module.exports = exports.app;
