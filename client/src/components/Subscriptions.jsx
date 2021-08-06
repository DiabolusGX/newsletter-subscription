import { useState, useEffect } from "react";
import axios from "axios";

import Detail from "./Detail";

export default function Subscriptions(props) {
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/subscriptions")
            .then((response) => {
                setSubscriptions(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {subscriptions.length ? (
                <div className="flex justify-end max-w-xl flex-wrap">
                    {subscriptions.map((sub) => (
                        <Detail
                            key={sub._id}
                            name={sub.name}
                            email={sub.email}
                            createdAt={sub.createdAt}
                        />
                    ))}
                </div>
            ) : (
                <div className="bg-white w-full max-w-lg rounded-xl font-bold shadow-lg p-2 text-gray-800">
                    No Subscriptions on record
                </div>
            )}
        </>
    );
}
