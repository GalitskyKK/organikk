import { initEdgeStore } from '@edgestore/server';
import { createEdgeStoreNextHandler } from '@edgestore/server/adapters/next/app';
const es = initEdgeStore.create();
/**
 * This is the main router for the EdgeStore buckets.
 */
const edgeStoreRouter = es.router({
  publicFiles: es
    .fileBucket()
    /**
     * return `true` to allow upload
     * By default every upload from your app is allowed.
     */
    .beforeUpload(({ ctx, input, fileInfo }) => {
      console.log('beforeUpload', ctx, input, fileInfo);
      return true; // allow upload
    })
    /**
     * return `true` to allow delete
     * This function must be defined if you want to delete files directly from the client.
     */
    .beforeDelete(() => {
      console.log();
      return true;
    }),
});
const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});
export { handler as GET, handler as POST };
/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter;
