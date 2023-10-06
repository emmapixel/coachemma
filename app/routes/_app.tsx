import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet, useNavigate } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Layout() {

  return (
    <div>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="bg-footer h-50 lg:h-50 w-full bg-cover bg-center p-10">
          Copyright Emma Eriksson 2023 Coachemma.se | Developed By Emma Eriksson.
        </div>
      </footer>
    </div>
  );
}
