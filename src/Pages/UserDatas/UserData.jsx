import { useLoaderData } from "react-router-dom";

const UserData = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h1 className="text-center text-3xl text-green-700 font-bold">Users Data</h1>
            <div className="text-center">
                <p>User Email: {data?.userEmail}</p>
                <p>User Password: {data?.userPass}</p> 
            </div>
        </div>
    );
};

export default UserData;