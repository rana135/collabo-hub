"use client";


import { Input } from "antd";
const { TextArea } = Input;
import { useFormContext, Controller } from "react-hook-form";
interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  rows?: number
}


const FormTextArea = ({
  name,
  type,
  rows,
  size,
  value,
  placeholder,
  label,
}: IInput) => {
  const { control } = useFormContext();


  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
        <TextArea 
        rows={rows}
        size={size}
        placeholder={placeholder}
        {...field}
        value={value ? value : field.value} />
        }
      />
    </>
  );
};


export default FormTextArea;
