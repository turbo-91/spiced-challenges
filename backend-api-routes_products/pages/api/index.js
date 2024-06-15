export default function handler(req, res) {
  console.log("In testinf");
  res.status(200).json({ status: "Testing" });
}
