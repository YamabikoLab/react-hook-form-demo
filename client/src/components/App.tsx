import { useForm, FormProvider, useFormContext } from "react-hook-form";
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
  const methods = useForm();
  const {
    control
  } = useForm<FormValues>({
    defaultValues: {
      cart: [{ name: "test", quantity: 1, price: 23 }]
    },
    mode: "onBlur"
  });

  const onSubmit: any = (data: FormValues) => console.log(data);

  return (
    <>
      <div>
      <FormProvider {...methods} > 
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <SectionList />
        </form>
      </FormProvider>
      </div>
      
      <DevTool control={control} />
    </>
  );
}
