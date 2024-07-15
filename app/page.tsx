import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#2b2929] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2b2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-3xl font-bold">
            Welcome to Dropbox.
            <br />
            <br />
            Storing everything for you and your business needs. All in one place
          </h1>
          <p className="pb-20">
            Dropbox is a widely used cloud storage service that revolutionizes
            the way individuals and businesses manage their digital files.
            Offering a seamless and secure solution, Dropbox allows users to
            store, synchronize, and share files effortlessly across multiple
            devices. Its user-friendly interface and collaborative features make
            it a go-to platform for storing documents, images, videos, and more.
            With Dropbox, accessibility to your files is simplified, enabling
            you to work seamlessly from anywhere with an internet connection.
            Whether youre a professional looking to streamline collaboration or
            an individual seeking a reliable backup solution, Dropbox provides a
            versatile and efficient platform for organizing and managing your
            digital content.
          </p>

          <Link
            href={"/dashboard"}
            className="flex cursor-pointer bg-blue-500 p-5 w-fit"
          >
            Try it for free!
            <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className="bg-[#1e1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="flex rounded-lg ">
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">This is my work. Thanks</p>
    </main>
  );
}
