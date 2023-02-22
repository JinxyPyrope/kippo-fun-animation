import React from "react"
import "../BigCard/BigCard.css"

export default function BigCardForm({ imageUrl }) {
  return (
    <div className="big-card card">
      <img src={imageUrl} />
    </div>
  )
}
