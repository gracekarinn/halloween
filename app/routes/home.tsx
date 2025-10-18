import type { Route } from "./+types/home";
import { MainPage } from "~/main/main-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HEX" },
    { name: "description", content: "Welcome to HEX!" },
  ];
}

export default function Home() {
  return <MainPage />;
}
