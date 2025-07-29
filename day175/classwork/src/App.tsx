import {Form , useForm , zodResolver} from "react-hook-form"
import {z} from "zod"
import { FormControl, FormField, FormItem, FormLabel } from "./components/ui/form"

function App() {
  const formSchema = z.object({
    username: z.string().min(8,{
      message: "user name must be atleast 8 characters long"
    }),
    mobileNumber: z.number().min(9,{
      message: "incorrect mobile number"
    }),
    email: z.string().email(),
    rememberMe: z.boolean(),
    password: z.string().min(8 ,{
      message: "password must be atleast 8 characters long"
    })
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      username: "",
      mobileNumber: 0,
      email: "",
      rememberMe: false,
      password: ""
    }
  })
  function onSubmit(data: z.infer<typeof formSchema>){
    console.log(data)
  }
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField 
          control={form.control}
          name="username"
          render={ ({field}) => (
            <FormItem className="h-[75px] w-[350px]">
              <FormLabel>Username:</FormLabel>
              <FormControl>
                <input placeholder="Username" {...field}/>

              </FormControl>
            </FormItem>
          )} />
        </form>
      </Form>
    </div>
  )
}

export default App