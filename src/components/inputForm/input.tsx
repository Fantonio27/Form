import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type InputForm = {
    name: string,
}
export default function InputForm ({name} : InputForm) {
    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
            cacsac
        </div>
    )
}