import { LoaderFunction, json } from "@remix-run/node";
import { requireUserId } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
    const userId = await requireUserId(request, '');

    return json({ userId });
  };

export default function Clients() {

    return (
        <div>
            <p>Detta är kunder-sidan</p>
        </div>
    );
}