import React from "react"
import "./App.css"
import BigCard from "../src/components/BigCard/BigCard.js"
import SmallCard from "./components/SmallCard/SmallCard"

export default function App() {
  return (
    <div className="card-group">
      <SmallCard />
      <BigCard />
      <SmallCard />
      <BigCard />
      <SmallCard />
      <BigCard />
      <SmallCard />
      <BigCard />
    </div>
  )
}
