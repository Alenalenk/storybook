import { Button } from "flowbite-react"

export const ProjectButton = ({label, onClick}) => {
    return (
        <Button 
            type="submit" 
            onClick={onClick}
        >
            {label}
        </Button>
    )
}