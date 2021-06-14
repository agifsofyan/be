"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_DB_CONNECTION = void 0;
const mongoose_1 = require("@nestjs/mongoose");
require("dotenv/config");
const { DB_USER, DB_PASS, DB_HOST, DB_NAME, DB_AUTH, } = process.env;
const URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;
exports.MONGO_DB_CONNECTION = mongoose_1.MongooseModule.forRoot(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
//# sourceMappingURL=configuration.js.map