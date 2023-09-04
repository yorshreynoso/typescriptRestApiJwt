"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
require("./routes/database");
function main() {
    const PORT = app_1.default.get('PORT');
    app_1.default.listen((PORT), () => {
        console.log('⚡️[server] working on port ', PORT);
    });
}
main();
//# sourceMappingURL=index.js.map