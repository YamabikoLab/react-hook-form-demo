import { useFieldArray, useFormContext } from "react-hook-form"
import Section from "./Section"

const SectionList = () => {
  const { register, control, formState: { errors } } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    name: "cart",
    control
  });
    return (
        <>
        {fields.map((field, index) => {
            return <Section register={register} errors={errors} field={field} index={index} remove={remove} />
          })}

          <button
            type="button"
            onClick={() =>
              append({
                name: "",
                quantity: 0,
                price: 0
              })
            }
          >
            APPEND
          </button>
          <input type="submit" />
        </>
    )
}

export default SectionList