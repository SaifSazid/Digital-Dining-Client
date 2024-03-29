import { useQuery } from '@tanstack/react-query'

import useAxiosSecure from './useAxiosSecure';

import useAuth from './useAuth';


const useCart = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure.get(`/carts?email=${user.email}` )
            return response.data;
        }
    })
    console.log(cart);
    return [cart, refetch]

}

export default useCart;