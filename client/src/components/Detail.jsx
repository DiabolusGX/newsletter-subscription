
export default function Subscriptions({ name, email }) {
    return (
        <div className="bg-white ring-1 ring-cyan-300 rounded-xl shadow-lg m-1 p-2 text-gray-800">
            <p className="text-sm inline font-bold">Name: </p>
            <p className="text-sm inline">{name}</p> <br />
            <p className="text-sm inline font-bold">Email: </p>
            <p className="text-sm inline">{email}</p>
        </div>
    );
}
