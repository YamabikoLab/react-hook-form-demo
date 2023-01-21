import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button } from "@mui/material";

type Inputs = {
  example: string,
  exampleRequired: string,
};

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <TextField defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <TextField {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
      <div>
      <Button variant="contained">Hello World</Button>
    </div>
    </form>
  );
}