// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function assestsList(req, res) {
  const re = await fetch(
    `https://api.unsplash.com/photos?client_id=${process.env.UNSPLASH_API_KEY}&page=${req.query.page}`,
    { mode: "no-cors" }
  );
  const data = await re.json();
  res.status(200).json(data);
}
