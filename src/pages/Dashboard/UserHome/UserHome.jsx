import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from "@tanstack/react-query";
import Swal from 'sweetalert2';

const UserHome = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: reservations = [] } = useQuery({
        queryKey: ['reservations', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure.get(`/reservations?email=${user.email}`)
            return response.data;
        }
    })

    const { data: orders = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure.get(`/payments?email=${user.email}`)
            // console.log(response.data)
            return response.data;
        },

    })


    const handleCancel = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/reservations/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Canceled!",
                                text: "Your reservation has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }




    return (

        <div className='flex gap-10'> 
            <div className="overflow-x-auto p-2">
            <h2 className='text-4xl '>....RESERVATION HISTORY</h2>
                <table className="table border">

                    {/* head */}
                    <thead>
                        <tr>
                            <th> # </th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Number of people</th>
                            <th>Date and Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reservations.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {user.displayName}
                                </td>
                                <td>
                                    {item.number}
                                </td>
                                <td>
                                    {item.people}
                                </td>

                                <td >{item.date} {item.time}</td>

                                <td>
                                    <button onClick={() => handleCancel(item)} className="btn btn-ghost bg-red-600 text-white">Cancel</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <div className="overflow-x-auto">
                <h2 className='text-4xl'>ORDER HISTORY</h2>
                <table className="table border">
                    {/* head */}


                    <thead>



                        <tr>
                            <th> Order No. </th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Order Status</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            orders.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>

                                <td>
                                    {item.itemName}
                                </td>
                                <td >${item.price}</td>
                                <td >{item.status}</td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>



    );
};

export default UserHome;