import { LoaderFunction, json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getUser } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  return json({
    user
  })
};

export default function Layout() {
  const { user } = useLoaderData();
  return (
    <div>
      <nav className="w-full">
        <div className="bg-clam-shell w-full py-2 px-10">
          <p className="text-white">coachemma.se@gmail.com</p>
        </div>
        <div
          className="bg-white w-full py-4 px-20 flex justify-between">
          <Link className= "text-3xl font-bold" to={"/"}>Coachemma</Link>
          <div className="flex flex-row items-center justify-between gap-x-4">
            {
              user ? (
                <>
                  <Link to={"new-quote"}>Add A Quote</Link>

                  <form action="/logout" method="post">
                    <button type="submit" className="button">
                      Logout
                    </button>
                  </form>
                </>) : (
                <>
                  <Link to={"login"}>Login</Link>
                  <Link to={"login"}>Register</Link>
                </>
              )
            }

          </div>
        </div >
      </nav >

      <main>
        <Outlet />
      </main>
    </div>
  )
}
