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
      <nav className="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-500 w-full px-5">
        <div
          className="w-full max-w-screen-lg mx-auto flex justify-between content-center py-3 ">
          <Link className="text-white text-3xl font-bold" to={"/"}>Quote Wall</Link>
          <div className="flex flex-row items-center justify-between gap-x-4 text-blue-50">
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
