import React from 'react'
import { useForm, Controller } from "react-hook-form";
import Select from "react-select"

const ContactUs = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues:{
      Nombre:"",
      select:{}
    }
  });
  const onSubmit = data => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Nombre' {...register("firstName", { required: true, maxLength: 20 })} />
        <input type="date"  placeholder='Fecha servicio' {...register("date")} />
        <input type="tel" pattern='[0-9]{3}-[0-9]{7}' placeholder='Numero celular' {...register("phonenumber", { required:true})} />
        <Controller
          placeholder="Horario"
          name="select"
          control={control}
          render={({ field }) => <Select 
            {...field} 
           options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" }
            ]} 
        />}
      />
      <input type="submit" />
    </form>
    </>
  )
}

export default ContactUs