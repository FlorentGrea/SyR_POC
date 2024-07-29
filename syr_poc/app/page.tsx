import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"
import { WarningIcon } from "@/components/ui/icons";

export default async function Home() {

  return (
    <main className="flex flex-col">
      <section className="flex flex-col mb-8">
        <h1 className="m-auto text-2xl font-bold mb-4">Welcome on the website of SHARE YOUR ROAD</h1>
        <Card className="flex flex-col sm:flex-row overflow-hidden m-auto">
          <div className="w-32 aspect-square m-auto flex justify-center">
            <WarningIcon className='h-20 w-20 m-auto' />
          </div>
          <div className="flex flex-col">
            <CardHeader className="pb-2 pl-6 sm:pl-0 pt-0 sm:pt-6">
              <CardTitle>
                Please be aware that this is not the final product.
              </CardTitle>
              <CardDescription className="">
                This site is temporary and exists solely to present our proof of concept.
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-6 sm:pl-0">
              <p>
                Everything here is just a sample of the solution we want to create.<br />
                All features are subject to change, both in terms of design and functionality.
              </p>
            </CardContent>
          </div>
        </Card>
        <Link href='/pocmainpage' className="mt-4 m-auto">
          <Button>
            Access POC
          </Button>
        </Link>
      </section>
      <section className="flex flex-col mb-8">
        <h1 className="m-auto text-2xl font-bold mb-4">About us</h1>
        <h2 className="m-auto text-xl font-semibold mb-3">this project is created by 3 persons</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-14 xl:gap-28">
          <Card className="overflow-hidden">
            <CardHeader className="p-0">
              <Image
                  src='/One-Does-Not-Simply.jpg'
                  width={1500}
                  height={1500}
                  alt='photo de Kevin'
                  className="object-cover w-full h-full pb-2"
              />
              <CardTitle className="px-6">
                Kevin Tucholski
              </CardTitle>
              <CardDescription className="px-6 pb-2">
                Co-founder & je sais pas quoi mettre
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                It&apos;s the place for your description, should you speak about your role or about yourself? I don&apos;t know ¯\_(ツ)_/¯
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardHeader className="p-0">
              <Image
                  src='/One-Does-Not-Simply.jpg'
                  width={1500}
                  height={1500}
                  alt='photo de Kevin'
                  className="object-cover w-full h-full pb-2"
              />
              <CardTitle className="px-6">
                Alexia Jconaipalenom
              </CardTitle>
              <CardDescription className="px-6 pb-2">
                Co-founder & je sais pas quoi mettre
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                It&apos;s the place for your description, should you speak about your role or about yourself? I don&apos;t know ¯\_(ツ)_/¯
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardHeader className="p-0">
              <Image
                  src='/One-Does-Not-Simply.jpg'
                  width={1500}
                  height={1500}
                  alt='photo de Kevin'
                  className="object-cover w-full h-full pb-2"
              />
              <CardTitle className="px-6">
                <a href="https://www.linkedin.com/in/florent-grea-3a9b13137/" target="_blank">Florent Gréa</a>
              </CardTitle>
              <CardDescription className="px-6 pb-2">
                Co-founder & je sais pas quoi mettre
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                It&apos;s the place for your description, should you speak about your role or about yourself? I don&apos;t know ¯\_(ツ)_/¯
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="flex flex-col mb-8">
        <h1 className="m-auto text-2xl font-bold mb-4">Contact us</h1>
      </section>
    </main>
)}