export default function StatusCard({ status }: { status: String}) {
    return (
        <div className="bg-darkgraylight rounded-md bg-opacity-75 text-green-600 font-bold m-auto mt-5">
            <p className="m-auto p-2">{status}</p>
        </div>
    )
}