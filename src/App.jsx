import React, { useState } from 'react'
import Header from "./Components/Header.jsx";


function App() {

  let [data, setData] = useState([
    {
      id: 1,
      title: " Html",
      description: "Learn Html",
      status: "Completed"

    }
  ])
  return (
    <div>
      <Header data={data} setData={setData} />


    </div>
  )
}

export default App