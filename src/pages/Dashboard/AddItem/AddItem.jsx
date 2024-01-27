import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure()
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=3cb2343243aaad4f4735f75347953570`;

  const onSubmit = data => {
    const formData = new FormData();
    formData.append('image', data.image[0])

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgResponse => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL };
          console.log(newItem);
          axiosSecure.post('/menu', newItem)
          .then(data => {
            console.log('after posting new item', data.data)
            if(data.data.insertedId){
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Menu item added succesfully",
                showConfirmButton: false,
                timer: 1500
              });
            }
          })
        }
      })

  };

  return (
    <div className='w-full px-10'>
      <SectionTitle subHeading="Whats new" heading="Add an item"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full mb-4">
          <div className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </div>
          <input type="text" placeholder="Recipe Name" className="input input-bordered w-full"  {...register("name", { required: true, maxLength: 120 })} />

        </label>
        <div className='flex my-4'>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category*</span>

            </div>
            <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
              <option disabled >Pick One</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drinks</option>
              <option>Dessert</option>
            </select>
          </label>
          <label className="form-control w-full ml-4">
            <div className="label">
              <span className="label-text font-semibold">Price*</span>
            </div>

            <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details</span>
          </div>
          <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
        </label>
        <label className="form-control w-full my-4">
          <div className="label">
            <span className="label-text">Item Image*</span>
          </div>
          <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full" />
        </label>
        <input className='btn btn-sm mt-4' type="submit" value="Add Item" />

      </form>
    </div>
  );
};

export default AddItem;






