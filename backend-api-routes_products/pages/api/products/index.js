import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  console.log("I am in api projects");
  response.status(200).json(getAllProducts());
}
