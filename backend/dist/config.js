"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
    return {
        mysql: {
            username: process.env.MYSQL_USER,
            host: process.env.MYSQL_HOST,
            dbName: process.env.MYSQL_DATABASE,
            password: process.env.MYSQL_ROOT_PASSWORD,
            port: parseInt(process.env.MYSQL_PORT, 10),
        },
    };
});
//# sourceMappingURL=config.js.map