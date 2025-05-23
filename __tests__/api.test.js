const demoDraw = require('../pages/api/demo-draw').default;
const saveEmail = require('../pages/api/save-email').default;

function mockReqRes(body = {}, method = 'GET') {
  const req = { body, method };
  const res = {
    statusCode: 0,
    data: null,
    status(code) { this.statusCode = code; return this; },
    json(data) { this.data = data; return this; }
  };
  return { req, res };
}

test('/api/demo-draw returns expected keys', () => {
  const { req, res } = mockReqRes();
  demoDraw(req, res);
  expect(res.statusCode).toBe(200);
  expect(res.data).toHaveProperty('image_url');
  expect(res.data).toHaveProperty('mantra');
  expect(res.data).toHaveProperty('question');
});

test('/api/save-email handles POST', async () => {
  const { req, res } = mockReqRes({ email: 'test@example.com' }, 'POST');
  await saveEmail(req, res);
  expect(res.statusCode).toBe(200);
  expect(res.data).toEqual({ status: 'saved' });
});
