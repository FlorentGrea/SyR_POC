import PocketBase from 'pocketbase';
import Image from 'next/image';

export default async function PointCard({ params }: any) {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_DB_ADDR);
    const point = await pb.collection('MapPoints').getOne(params.id)
    const imageSrc = point.images[0] ? process.env.NEXT_PUBLIC_DB_ADDR + 'api/files/' + point.collectionId + '/' + point.id + '/' + point.images[0] : ''

    return (
        <section className='flex flex-col border rounded-lg'>
            <div className='h-44 w-full'>
                { imageSrc ?
                    <Image
                        src={imageSrc}
                        width={1500}
                        height={1500}
                        alt={point.title}
                        className="object-cover w-full h-full"
                    />
                :
                    <div className='bg-red-300' />
                }
            </div>
            <div>
                <h1 className='font-extrabold text-2xl'>
                    {point.title}
                </h1>
                <h2 className='text-lg'>
                    {new Date(point.date).toDateString() + ' - ' + new Date(point.endDate).toDateString()}
                </h2>
                <h3 className='text-md'>
                    {point.location}
                </h3>
                <p className='text-md'>
                    {point.description}
                </p>
            </div>
        </section>
)}