import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { authenticateUser } from "@/lib/api";
import { User, useAuth } from "@/lib/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { loggedUser, login } = useAuth();

  const formSchema = z.object({
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    password: z.string().min(2).max(50),
    serverError: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const user: User = await authenticateUser(values.email, values.password);
      login(user);
      navigate("/conference");
    } catch (error) {
      form.setError;
      console.error(error);
    }
  }

  if (loggedUser) {
    navigate("/conference");
  }

  return (
    <Card className="my-auto w-[350px] text-sm">
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
                    <Input placeholder="password" {...field} type="password" />
                  </FormControl>
                  <FormDescription className="text-xs">
                    The password the organisers provided you with.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
