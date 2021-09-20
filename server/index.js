const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');

// deal with the development environment
const dev = process.env.NODE_ENV !== 'production';
// create Next App
const app = next({dev});

const handle = app.getRequestHandler();

// Next app firstly load all the pages and then request other needs
app.prepare()
  .then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('/a/:id', async (ctx) => {
    const id = ctx.params.id;
    console.log('id----', id);
    await handle(ctx.req, ctx.res, {
      pathname: '/a',
      query: {id}
    })
    ctx.respond = false;
  })

  server.use(router.routes());

  // middlewares
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
    server.listen(3001, () => {
      console.log('koa server listening on 3001');
    });
});





/*router.get('/test/:id', (ctx) => {
    const path = ctx.path;
    const method = ctx.method;
    const id = ctx.params.id;
    // ctx.body = `<p>request test - ${path} - ${method} - ${id}</p>`
    ctx.body = {
      success: true,
      path,
      method,
      id
    };
    ctx.set('Content-Type', 'application/json');
  });

  server.use(async (ctx, next) => {
    ctx.body = `<span>koa Render, </span>`;
    next();
  });
   */

