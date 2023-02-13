import Section from "./Section"
interface SectionListProps {
    register: any
    errors: any
    fields: any[]
    append: any
    remove: any
  }


const SectionList = ({register, errors, fields, append, remove}: SectionListProps) => {
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