import {useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
    const {data, isPending} = useQuery({
        queryKey: ['datas'],
        queryFn: async () =>{
           const res = await axios.get('http://localhost:3000/alluser')
           return res.data
        }
    })

    if(isPending) return <div className="dav">loading</div>

    console.log(data);
    return (
        <div>
            <h1 className="text-center text-3xl text-green-700 font-bold">Users Data</h1>

            {
                data.map((data) => <div key={data._id} className="">
                    <h3>Email: {data.userEmail}</h3>
                </div> )
            }
        </div>
    );
};

export default Home;