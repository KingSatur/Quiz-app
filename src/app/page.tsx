import { SignInButton } from "@/components/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    return redirect("/dashboard");
  }
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to QuizAI</CardTitle>
          <CardDescription>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
            voluptatibus? At quasi, enim odio facilis corrupti dignissimos rerum
            praesentium esse vel voluptate necessitatibus quod voluptatem
            reprehenderit molestias? Deserunt, impedit harum!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <SignInButton text="Sign in"></SignInButton>
        </CardContent>
      </Card>
    </div>
  );
}
