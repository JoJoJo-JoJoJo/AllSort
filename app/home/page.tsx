import { Metadata } from "next";
import Header from "../_ui/home/header/Header";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <>
      <Header />
      <main></main>
      <footer className="fixed bottom-0 min-w-full flex flex-row justify-center">
        <p>text</p>
      </footer>
    </>
  );
}
