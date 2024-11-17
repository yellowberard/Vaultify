import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <h1 className={"text-3xl text-brand-100"}>
          Vaultify - The storage solutions hello
        </h1>
      </div>
    </>
  );
}
