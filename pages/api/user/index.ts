import client from "../../../lib/prismadb";

export default async function user(req, res) {
  const user = await client.user.findUnique({
    where: {
      id: req.query.id,
      email: req.query.email,
    },
  });
  res.status(200).json(user);
}
