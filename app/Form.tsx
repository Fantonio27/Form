
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
//   } from "../src/components/ui/card";
//   import { Button } from "../src/components/ui/button";
//   import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
//   } from "../src/components/ui/select";
//   import { Label } from "@/";
  
//   import InputForm from "@/components/inputForm/input";
//   import '@fontsource/geist-sans/300.css';
  
//   function Form() {
//     return (
//       <div className={`h-screen flex items-center justify-center `}>
//         <Card className="w-[350px]">
//           <CardHeader>
//             <CardTitle>Create project</CardTitle>
//             <CardDescription>
//               Deploy your new project in one-click.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form>
//               <div className="grid w-full items-center gap-4">
  
//                 <InputForm name="Fullname"/>
  
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="framework">Framework</Label>
//                   <Select>
//                     <SelectTrigger id="framework">
//                       <SelectValue placeholder="Select" />
//                     </SelectTrigger>
//                     <SelectContent position="popper">
//                       <SelectItem value="next">Next.js</SelectItem>
//                       <SelectItem value="sveltekit">SvelteKit</SelectItem>
//                       <SelectItem value="astro">Astro</SelectItem>
//                       <SelectItem value="nuxt">Nuxt.js</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//             </form>
//           </CardContent>
//           <CardFooter className="flex justify-between">
//             <Button variant="outline">Cancel</Button>
//             <Button>Deploy</Button>
//           </CardFooter>
//         </Card>
//       </div>
//     );
//   }
  
//   export default Form;
  