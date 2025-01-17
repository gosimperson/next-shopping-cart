import React from "react";
// @ts-ignore
import { connectDB } from "@util/database";
import Link from "next/link";
import ListItem from "./ListItem";

const list = async () => {
  // @ts-ignore
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
};

export default list;
