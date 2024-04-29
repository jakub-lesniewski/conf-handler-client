import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react";

export default function Login() {
  const formSchema = z.object({
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    password: z.string().min(2).max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="my-auto h-full w-[350px] text-sm">
      <CardHeader className="border-b py-2">
        <CardTitle className="text-lg">Login</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="profesor.gabka@gmail.com" {...field} />
                  </FormControl>
                  <FormDescription className="text-xs">
                    The email you provided the organiser with.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} />
                  </FormControl>
                  <FormDescription className="text-xs">
                    The token the organisers provided you with.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">submit</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-1 border-t px-4 py-2">
        <h4 className="scroll-m-20 font-semibold tracking-tight">
          Need a hand?
        </h4>
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <p>email: </p>
            <p>phone:</p>
          </div>
          <div className="flex flex-col">
            <a href="mailto:m.bluth@example.com">
              golarz.filip@apk.uni.nieborow.com
            </a>
            <a href="tel:+123456789" className="text-end">
              48 123 456 789
            </a>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
