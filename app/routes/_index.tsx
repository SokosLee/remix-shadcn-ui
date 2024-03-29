import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button"
import { Link } from "@remix-run/react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>UI Demo</CardTitle>
        <CardDescription>Welcome to Remix + Shadcn UI Block Demo.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Link to={"/login"}>
                <li>1. Go to Login Page</li>
              </Link>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Link to={"/dash"}>
                <li>2. Go to Dashborad</li>
              </Link>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Link to={"/order"}>
                <li>3. Go to Orders Page</li>
              </Link>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Link to={"/product"}>
                <li>4. Go to Products Page</li>
              </Link>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Link to={"/product/1"}>
                <li>5. Go to Product Detail</li>
              </Link>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Link to={"/settings"}>
                <li>6. Go to Settings Page</li>
              </Link>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Good Job!</Button>
      </CardFooter>
    </Card>
  )
}

export default function Index() {
  return (
    <div className="flex items-center justify-center h-screen">
        <CardWithForm />
    </div>
  );
}
