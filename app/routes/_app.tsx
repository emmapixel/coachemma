import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet, useNavigate } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="font-bold">Layout för alla sidor!</h1>
      <button onClick={() => navigate('/')}>Hem</button>
      <button onClick={() => navigate('book')}>Boka</button>
      <button onClick={() => navigate('clients')}>Klienter</button>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
