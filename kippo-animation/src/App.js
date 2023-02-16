import React from "react"
import "./App.css"
import BigCard from "../src/components/BigCard/BigCard.js"
import SmallCard from "./components/SmallCard/SmallCard"

export default function App() {
  return (
    <div className="card-group">
      <BigCard />
      <BigCard />
      <BigCard />
      <BigCard />

      <SmallCard />
    </div>
  )
}
