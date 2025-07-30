
export const Boxinfo = ({ number, description }) => {
    return (
        <div className="bg-white py-6 px-20   glass-card rounded-xl m-2 shadow-lg flex flex-col items-center justify-center text-center">
            <div className="text-3xl font-bold ">{number}</div>
            <div className="text-gray-600">{description}</div>
        </div>
    )
}