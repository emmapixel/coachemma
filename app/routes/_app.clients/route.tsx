import { LoaderFunction, json } from "@remix-run/node";
import { Client } from "~/types/client";
import { db } from "~/firebase";
import { getDocs, collection } from 'firebase/firestore';
import { useLoaderData } from "@remix-run/react";

type LoaderData = {
    clients: Client[];
}

export const loader: LoaderFunction = async () => {
    const clientDocs = await getDocs(collection(db, 'clients'));
    const clients = clientDocs.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data();
        return { id, ...data } as Client;
    });

    return json({ clients });
}

export default function Clients() {
    const { clients } = useLoaderData<LoaderData>();

    return (
        <div>
            <h1>Kunder</h1>
            <p>Detta är kunder-sidan</p>
            <div className="space-y-4">
                {
                    clients.map((client) => {
                        return (
                            <div key={client.id} className="border-2">
                                <h2>{client.name}</h2>
                                <p>{client.age}</p>
                                <p>{client.note}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}