import { useState } from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "./route/router"
import AerochampLoader from "./components/ui/AerochampLoader"

const App = () => {
  const [loaderDone, setLoaderDone] = useState(false)

  return (
    <>
      {!loaderDone && (
        <AerochampLoader onComplete={() => setLoaderDone(true)} />
      )}
      <div style={{ visibility: loaderDone ? 'visible' : 'hidden' }}>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App