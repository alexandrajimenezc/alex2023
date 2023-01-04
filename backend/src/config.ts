import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
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
