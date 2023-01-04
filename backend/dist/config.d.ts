declare const _default: (() => {
    mysql: {
        username: string;
        host: string;
        dbName: string;
        password: string;
        port: number;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    mysql: {
        username: string;
        host: string;
        dbName: string;
        password: string;
        port: number;
    };
}>;
export default _default;
