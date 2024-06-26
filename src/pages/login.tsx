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
import { useAuth } from "@/lib/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { User } from "@/types/User";

export default function Login() {
  const navigate = useNavigate();
  const { loggedUser, login } = useAuth();

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const user: User = await authenticateUser(values.email, values.password);
      login(user);
      navigate("/conference");
    } catch (error) {
      form.setError("password", {
        message: "Failed to authenticate, please check your email and password",
      });
      console.error(error);
    }
  }
  if (loggedUser) {
    return <Navigate to="/conference" />;
  }

  return (
    <Card className="my-auto w-[350px] shrink-0 pb-4 text-sm">
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
                    <Input {...field} />
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
                    <Input {...field} type="password" />
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
