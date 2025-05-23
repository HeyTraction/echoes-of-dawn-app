export default function handler(req, res) {
  res.status(200).json({
    image_url: "http://example.com/demo.jpg",
    mantra: "You are strong",
    question: "What will you do today?"
  });
}
