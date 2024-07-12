import { connectDB } from "@/util/database";

export default async function Home() {
  const name = "Park";
  let client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();
  return (
    <div>
      <h4 className="title">애플후레시</h4>
      <p className="title-sub">by dev {name}</p>
      <p>{result[0].title}</p>
    </div>
  );
}
