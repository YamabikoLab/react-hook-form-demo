import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import SectionList from "./SectionList";


export type FormValues = {
  cart: {
    name: string;
    price: number;
    quantity: number;
  }[];
};

export default function App() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      cart: [{ name: "test", quantity: 1, price: 23 }]
    },
    mode: "onBlur"
  });
  const { fields, append, remove } = useFieldArray({
    name: "cart",
    control
  });
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SectionList register={register} errors={errors} fields={fields} append={append} remove={remove}/>
        </form>
      </div>
      <DevTool control={control} />
    </>
  );
}
