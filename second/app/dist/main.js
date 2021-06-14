"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
;
const app_module_1 = require("./app.module");
require("dotenv/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.setGlobalPrefix('api/v1');
    const options = new swagger_1.DocumentBuilder()
        .setTitle('BE')
        .setDescription(`API ${process.env.NODE_ENV}.`)
        .setVersion('1.0')
        .addTag('API')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api/v1/docs', app, document);
    const PORT = process.env.PORT;
    await app.listen(PORT);
    console.log(`[API] BE started running in ${process.env.NODE_ENV} mode on port ${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map