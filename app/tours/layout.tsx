import React from "react"

function layout({children}:{children:React.ReactNode}) {
  return (
      <div>
          <header className="rounded mb-4 py-2 w-1/2 bg-slate">
          <h1 className="text-3xl text-white text-center">Nested Layout</h1>
          </header>
          <main>{children}</main>
    </div>
  )
}
export default layout