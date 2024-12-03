import { useLoaderData } from "react-router-dom";

const UserData = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h1 className="text-center text-3xl text-green-700 font-bold">Users Data</h1>
            <div className="text-center">
                <p className="bg-green-600 p-5 text-white mb-5">User Email: {data?.userEmail}</p>
                <p className="bg-green-600 p-5 text-white mb-5">User Password: {data?.userPass}</p> 
            </div>
        </div>
    );
};

export default UserData;