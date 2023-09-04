"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const auth_1 = __importDefault(require("./routes/auth"));
const morgan_1 = __importDefault(require("morgan"));
//settings
app.set('PORT', 3000);
//middleware
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
//Routes
app.use('/api/', auth_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map