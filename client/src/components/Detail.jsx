
export default function Subscriptions({ name, email, createdAt }) {
    const date = new Date(createdAt);
    return (
        <div className="bg-white min-w-1/3 ring-1 ring-cyan-300 rounded-xl shadow-lg m-1 p-2 text-gray-800">
            <p className="text-sm inline font-bold">Name: </p>
            <p className="text-sm inline">{name}</p> <br />
            <p className="text-sm inline font-bold">Email: </p>
            <p className="text-sm inline">{email}</p> <br />
            <p className="text-sm inline font-bold">Created At: </p>
            <p className="text-sm inline">{date.toLocaleDateString()}</p>
        </div>
    );
}
