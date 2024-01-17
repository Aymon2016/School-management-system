"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const globalException_filter_1 = require("./common/filters/globalException.filter");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new globalException_filter_1.GlobalExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3002);
}
bootstrap();
//# sourceMappingURL=main.js.map