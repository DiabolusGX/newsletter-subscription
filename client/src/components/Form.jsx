import React from "react";
import axios from "axios";

export default function Form(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [color, setColor] = React.useState("bg-cyan-600");
    const [button, setButton] = React.useState("submit");

    const nameChange = React.useCallback(
        (event) => {
            setName(event.target.value);
        },
        [setName]
    );
    const emailChange = React.useCallback(
        (event) => {
            setEmail(event.target.value);
        },
        [setEmail]
    );

    const submit = (e) => {
        e.preventDefault();
        setButton("loading");
        setColor("bg-yellow-500");
        axios.post('http://localhost:3001/create', {
            name, email
        })
        .then(() => {
            setName('');
            setEmail('');
            setButton("success");
            setColor("bg-green-500");
        })
        .catch((err) => {
            setButton("error");
            console.log(err);
        });

        setTimeout(() => {
            setButton("submit");
            setColor("bg-cyan-500");
        }, 2000);
    };

    return (
        <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-8 text-gray-800">
            <form className="flex flex-col space-y-6">
                <div>
                    <label className="text-base">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={nameChange}
                        className="ring-1 ring-gray-300 w-full rounded-md px-2 py-2 mt-1 outline-none focus:ring-2 focus:ring-teal-400"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label className="text-base">E-mail</label>
                    <input
                        type="email"
                        value={email}
                        onChange={emailChange}
                        className="ring-1 ring-gray-300 w-full rounded-md px-2 py-2 mt-1 outline-none focus:ring-2 focus:ring-teal-400"
                        placeholder="Email Address"
                    />
                </div>
                <button
                    onClick={submit}
                    disabled={button === "loading" || button === "error"}
                    className={`inline-block self-end text-white font-bold rounded-lg px-6 py-2 uppercase text-sm 
                        ${color}`}
                >
                    {button}
                </button>
            </form>
        </div>
    );
}
