"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
_1.default.post('/sheet-notifications', (req, resp) => {
    resp.send('yey');
});
//# sourceMappingURL=notifications.js.map