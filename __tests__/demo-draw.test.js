import handler from '../pages/api/demo-draw'

describe('GET /api/demo-draw', () => {
  const env = process.env
  beforeEach(() => {
    jest.resetModules()
    process.env = { SUPABASE_URL: 'http://localhost', SUPABASE_ANON_KEY: 'anon' }
  })

  afterEach(() => {
    process.env = env
    jest.restoreAllMocks()
  })

  it('returns a card', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => [{ image_url: 'img', mantra: 'm', question: 'q' }],
    })
    const req = {}
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ image_url: 'img', mantra: 'm', question: 'q' })
  })
})
