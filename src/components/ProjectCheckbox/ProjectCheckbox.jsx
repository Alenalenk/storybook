import { Checkbox, Label } from "flowbite-react"

export const ProjectCkeckbox = ({id, label, isChecked, checkHandler}) => {
    return (
        <div className="flex items-center gap-2">
            <Checkbox id={id} checked={isChecked} onChange={checkHandler}/>
            <Label htmlFor={id}>{label}</Label>
        </div>
    )
}