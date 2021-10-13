export default function Pill({ title }: { title: string }) {
    return (
        <div className="bg-blue-300 bg-opacity-20 shadow-xl rounded-full px-5 py-1 inline-block my-2">
            <p>{title}</p>
        </div>
    )
}