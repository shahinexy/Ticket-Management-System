import {useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const {data, isPending} = useQuery({
        queryKey: ['datas'],
        queryFn: async () =>{
           const res = await axios.get('http://localhost:3000/alluser')
           return res.data
        }
    })

    if(isPending) return <div className="dav">loading</div>

    return (
        <div>
            <h1 className="text-center text-3xl text-green-700 font-bold">Users Data</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-20 mt-20">
            {
                data.map((data) => <div key={data._id} className="bg-green-700 text-white p-3 flex justify-between">
                    <h3>Email: {data.userEmail}</h3>

                    <Link to={`/userdata/${data._id}`}  className="underline">View More -&gt;</Link>
                </div> )
            }
            </div>
        </div>
    );
};

export default Home;