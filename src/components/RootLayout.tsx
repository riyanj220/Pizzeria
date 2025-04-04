import { Outlet } from "react-router-dom"
import Header from "./Header"

export const RootLayout = () => {
  return (
    <>
        <Header/>
        <main className="py-4">
            <section className="max-w-3xl mx-auto bg-base-100">
                <Outlet/>
            </section>
        </main>
    </>
  )
}
