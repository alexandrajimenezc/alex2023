"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const conf = new swagger_1.DocumentBuilder()
        .setTitle('Ventas')
        .setDescription('API de test para ventas')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, conf);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors({
        origin: [
            'http://localhost:3000',
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    });
    await app.listen(process.env.BACKEND_PORT || 4000);
}
bootstrap();
//# sourceMappingURL=main.js.map