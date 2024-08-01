  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
  import { WarningIcon } from "@/components/ui/icons";
  import Image from "next/image";

  export default async function Home() {

    return (
      <main className="flex flex-col">
        <section className="flex flex-col mb-8">
          <div className="relative border rounded-lg overflow-hidden w-full aspect-square sm:aspect-video md:aspect-[32/9] my-3">
            <Image
              src={'/vanlifers.jpg'}
              height={1500}
              width={1500}
              alt='vanlifers'
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 w-full h-full bg-[linear-gradient(transparent_0%,rgb(156,35,16)_500%)]"/>
            <div className="absolute bottom-6 left-4 flex flex-wrap">
            <h1 className="text-4xl font-extrabold text-macaroni-and-cheese-50">
              The solution that brings <span className="text-4xl font-extrabold text-macaroni-and-cheese-200">travelers </span>together
            </h1>
            </div>
          </div>
          {/*
          <div className="grid grid-cols-1 sm:grid-cols-2 p-5 border rounded-lg overflow-hidden w-full my-3 bg-macaroni-and-cheese-200">
            <div className="relative sm:order-last w-full aspect-video">
              <div className="absolute w-[400%] -top-[620%] -right-[160%] sm:w-[170%] sm:-top-[100%] sm:-right-[80%] aspect-square rounded-full overflow-hidden">
                <Image
                  src={'/backpacker-3.jpg'}
                  height={1500}
                  width={1500}
                  alt='backpacker-3'
                  className="absolute w-[50%] h-[50%] -bottom-[10%] right-[35%] sm:right-[20%] sm:bottom-[5%] md:bottom-[15%] sm:w-full sm:h-full object-cover"
                />
                <div className="absolute top-0 w-full h-full bg-[linear-gradient(transparent_0%,rgb(156,35,16)_300%)]"/>
              </div>
            </div>
            <div className="m-auto">
              <p className="text-lg md:text-xl font-extrabold text-macaroni-and-cheese-950 text-pretty">
                Digital nomads, backpackers, van lifers, and skippers are <span className="text-macaroni-and-cheese-600">all looking to meet up or travel together.</span><br />
                Unfortunatly, all the tools at their disposal suffer from the same problems:
              </p>
              <ul className="text-lg md:text-xl font-extrabold text-macaroni-and-cheese-600 pl-3">
                <li>- Not comprehensive enough</li>
                <li>- Not enough users</li>
                <li>- Deplorable user experience</li>
              </ul>
            </div>
          </div>
          */}
          <div className="w-full sm:h-96 grid grid-cols-1 sm:grid-cols-2 gap-5 my-3">
            <div className="relative w-full h-96 sm:order-last aspect-square rounded-lg overflow-hidden">
              <Image
                src={'/backpacker-3.jpg'}
                height={1500}
                width={1500}
                alt='backpacker-3'
                className="h-full object-cover"
              />
              <div className="absolute top-0 w-full h-full bg-[linear-gradient(transparent_0%,rgb(156,35,16)_500%)]"/>
            </div>
            <div className="m-auto px-2">
              <p className="text-lg md:text-xl font-extrabold text-macaroni-and-cheese-950 text-pretty">
                Digital nomads, backpackers, van lifers, and skippers are <span className="text-macaroni-and-cheese-600">all looking to meet up or travel together.</span><br />
                Unfortunatly, all the tools at their disposal suffer from the same problems:
              </p>
              <ul className="text-lg md:text-xl font-extrabold text-macaroni-and-cheese-600 pl-3">
                <li>- Not comprehensive enough</li>
                <li>- Not enough users</li>
                <li>- Deplorable user experience</li>
              </ul>
            </div>
          </div>
          {/*
          <div className="p-2 border rounded-lg overflow-hidden w-full h-fit my-3">
            <div className="relative h-full w-full z-[-1]">
              <div className="absolute -translate-y-1/2 rounded-full w-[60%] aspect-square blur-3xl mix-blend opacity top-96 -left-56 bg-macaroni-and-cheese-400 z-[-1]"/>
              <div className="absolute bottom-0 -right-56 -translate-x-1/2 rounded-full w-[60%] aspect-square blur-3xl mix-blend bg-macaroni-and-cheese-400 z-[-1]"/>
            </div>
            <div className="w-full h-fit z-50 m-auto flex flex-col">
              <h1 className="text-4xl text-pretty font-bold text-macaroni-and-cheese-950  mt-3 mb-7">Millions of <span className="text-macaroni-and-cheese-600">travelers</span>, not a single good <span className="text-macaroni-and-cheese-600">solution</span></h1>
              <p className="text-lg md:text-xl font-extrabold text-macaroni-and-cheese-950 text-pretty">
                The only way for travelers to gather right now is through Facebook groups.<br />
                Over <span className="text-macaroni-and-cheese-600">400 groups worldwide</span>, each having <span className="text-macaroni-and-cheese-600">thousands of unique users.</span><br />
                This multiplicity of groups is a real headache for travelers, and <span className="text-macaroni-and-cheese-600">greatly reduces the potential for meeting and communicating</span> with each other.
              </p>
            </div>
          </div>
          */}
          <div className="w-full sm:h-96 grid grid-cols-1 sm:grid-cols-2 gap-5 mt-3 mb-8">
            <div className="relative w-full h-96 aspect-square rounded-lg overflow-hidden">
              <Image
                src={'/backpacker-2.jpg'}
                height={1500}
                width={1500}
                alt='backpacker-2'
                className="h-full object-cover"
              />
              <div className="absolute top-0 w-full h-full bg-[linear-gradient(transparent_0%,rgb(156,35,16)_500%)]"/>
            </div>
            <div className="m-auto px-2">
              <p className="text-lg md:text-xl font-extrabold text-macaroni-and-cheese-950 text-pretty">
                The only way for travelers to gather right now is through Facebook groups.<br />
                Over <span className="text-macaroni-and-cheese-600">400 groups worldwide</span>, each having <span className="text-macaroni-and-cheese-600">thousands of unique users.</span><br />
                This multiplicity of groups is a real headache for travelers, and <span className="text-macaroni-and-cheese-600">greatly reduces the potential for meeting and communicating</span> with each other.
              </p>
            </div>
          </div>
          <div className="relative border rounded-lg overflow-hidden w-full aspect-square sm:aspect-video md:aspect-[32/9] my-3">
            <Image
              src={'/vanlifers.jpg'}
              height={1500}
              width={1500}
              alt='vanlifers'
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 w-full h-full bg-[linear-gradient(transparent_0%,rgb(156,35,16)_500%)]"/>
            <div className="absolute bottom-6 left-4 flex flex-wrap">
              <h1 className="text-4xl font-extrabold text-macaroni-and-cheese-50">
                Our <span className="text-4xl font-extrabold text-macaroni-and-cheese-200">solution </span>
              </h1>
            </div>
          </div>
          <div className="w-full sm:h-96 grid grid-cols-1 sm:grid-cols-2 gap-5 my-3">
            <div className="relative w-full h-96 sm:order-last aspect-square rounded-lg overflow-hidden">
              <Image
                src={'/backpacker-3.jpg'}
                height={1500}
                width={1500}
                alt='backpacker-3'
                className="h-full object-cover"
              />
              <div className="absolute top-0 w-full h-full bg-[linear-gradient(transparent_0%,rgb(156,35,16)_500%)]"/>
            </div>
            <div className="m-auto px-2">
              <p className="text-lg md:text-xl font-extrabold text-macaroni-and-cheese-950 text-pretty">
                We are excited to introduce our new <span className="text-macaroni-and-cheese-600">web and app-based product designed to unite travelers from all corners of the globe.</span><br />
                Our platform allows users to effortlessly discover and organize travel and meeting proposals with ease.<br />
                Featuring an intuitive <span className="text-macaroni-and-cheese-600">map system,</span> users can quickly locate opportunities that align perfectly with their <span className="text-macaroni-and-cheese-600">geographical preferences.</span>
              </p>
            </div>
          </div>
          <div className="w-full sm:h-96 grid grid-cols-1 sm:grid-cols-2 gap-5 mt-3 mb-8">
            <div className="relative w-full h-96 aspect-square rounded-lg overflow-hidden">
              <Image
                src={'/backpacker-2.jpg'}
                height={1500}
                width={1500}
                alt='backpacker-2'
                className="h-full object-cover"
              />
              <div className="absolute top-0 w-full h-full bg-[linear-gradient(transparent_0%,rgb(156,35,16)_500%)]"/>
            </div>
            <div className="m-auto px-2">
              <p className="text-lg md:text-xl font-extrabold text-macaroni-and-cheese-950 text-pretty">
                Initially, our focus will be on facilitating three types of events:
              </p>
              <ul className="text-lg md:text-xl font-extrabold text-macaroni-and-cheese-950 pl-3 text-pretty">
                <li><span className="text-macaroni-and-cheese-600">- Meetings:</span> Connect with fellow travelers for enriching encounters.</li>
                <li><span className="text-macaroni-and-cheese-600">- Trips:</span> Plan and embark on journeys together.</li>
                <li><span className="text-macaroni-and-cheese-600">- Co-sleeping:</span> Find and share accommodations for a more immersive experience.</li>
              </ul>
              <p className="text-lg md:text-xl font-extrabold text-macaroni-and-cheese-950 text-pretty">
                Our list of features will continue to expand, as <span className="text-macaroni-and-cheese-600">we have an extensive pipeline of exciting functionalities</span> in store!
              </p>
            </div>
          </div>
          <Card className="flex flex-col sm:flex-row overflow-hidden m-auto my-3 bg-macaroni-and-cheese-50 text-macaroni-and-cheese-950">
            <div className="w-32 aspect-square m-auto flex justify-center">
              <WarningIcon className='h-20 w-20 m-auto filter-mc-950' />
            </div>
            <div className="flex flex-col">
              <CardHeader className="pb-2 pl-6 sm:pl-0 pt-0 sm:pt-6">
                <CardTitle className="font-extrabold">
                  Please be aware that this is not the final product.
                </CardTitle>
                <CardDescription className="text-macaroni-and-cheese-600 font-extrabold">
                  This site is temporary and exists solely to present our proof of concept.
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-6 sm:pl-0 font-extrabold">
                <p>
                  Everything here is just a sample of the solution we want to create.<br />
                  All features are subject to change, both in terms of design and functionality.
                </p>
              </CardContent>
            </div>
          </Card>
        </section>
        <section className="flex flex-col mb-8">
          <h1 className="m-auto text-4xl font-extrabold mb-4 text-macaroni-and-cheese-950">About us</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-14 xl:gap-28">
            <div>
              <div className='relative w-full aspect-square border rounded-lg overflow-hidden'>
                <Image
                    src='/One-Does-Not-Simply.jpg'
                    width={1500}
                    height={1500}
                    alt='photo de Kevin'
                    className="object-cover w-full h-full"
                />
              </div>
              <div className='flex flex-col p-2 w-full'>
                <h3 className='truncate font-bold text-lg leading-none text-macaroni-and-cheese-950'>Kevin Tucholski</h3>
                <h4 className='truncate text-sm text-macaroni-and-cheese-600'>Co-founder & je sais pas quoi mettre</h4>
                <p>
                  It&apos;s the place for your description, should you speak about your role or about yourself? I don&apos;t know ¯\_(ツ)_/¯
                </p>
              </div>
            </div>
            <div>
              <div className='relative w-full aspect-square border rounded-lg overflow-hidden'>
                <Image
                    src='/One-Does-Not-Simply.jpg'
                    width={1500}
                    height={1500}
                    alt='photo de Kevin'
                    className="object-cover w-full h-full"
                />
              </div>
              <div className='flex flex-col p-2 w-full'>
                <h3 className='truncate font-bold text-lg leading-none text-macaroni-and-cheese-950'>Alexia Jconaipalenom</h3>
                <h4 className='truncate text-sm text-macaroni-and-cheese-600'>Co-founder & je sais pas quoi mettre</h4>
                <p>
                  It&apos;s the place for your description, should you speak about your role or about yourself? I don&apos;t know ¯\_(ツ)_/¯
                </p>
              </div>
            </div>
            <div>
              <div className='relative w-full aspect-square border rounded-lg overflow-hidden'>
                <Image
                    src='/One-Does-Not-Simply.jpg'
                    width={1500}
                    height={1500}
                    alt='photo de Kevin'
                    className="object-cover w-full h-full"
                />
              </div>
              <div className='flex flex-col p-2 w-full'>
                <h3 className='truncate font-bold text-lg leading-none text-macaroni-and-cheese-950'><a href="https://www.linkedin.com/in/florent-grea-3a9b13137/" target="_blank">Florent Gréa</a></h3>
                <h4 className='truncate text-sm text-macaroni-and-cheese-600'>Co-founder & je sais pas quoi mettre</h4>
                <p>
                  It&apos;s the place for your description, should you speak about your role or about yourself? I don&apos;t know ¯\_(ツ)_/¯
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
  )}