declare module 'express-static-gzip' {
    import { RequestHandler } from 'express';

    interface IExpressStaticGzipOptions {
        orderPerference: string[],
        index?: boolean
        enableBrotli?: boolean
        customCompression?: {
            encodingName: string
            fileExtension: string
        }
    }

    export default function gzip(path: string, options?: IExpressStaticGzipOptions): RequestHandler;
}
