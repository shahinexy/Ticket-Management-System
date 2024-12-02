import { useLoaderData } from "react-router-dom";

const UserData = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            this is user data pages {data.userEmail}
        </div>
    );
};

export default UserData;