// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "app/db/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  return {
    objectData,
  };
}

let products: Array<ProductProps> = [];

await getStaticProps()
  .then((data) => (products = data.objectData.products))
  .catch((err) => console.log(err));

  export default products;
