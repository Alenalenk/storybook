import { Label, TextInput } from "flowbite-react"

export const ProjectInput = ({id, label, type, required, onChange, value, name}) => {
    return (
              <div>
                <div className="mb-2 block">
                  <Label htmlFor={id}>{label}</Label>
                </div>
                <TextInput 
                  id={id} 
                  type={type} 
                  required={required} 
                  onChange={onChange}
                  value={value}
                  name={name}
                />
              </div>
    )
}