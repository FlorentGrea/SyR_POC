'use client'

import { LeftArrowIcon, PlusIcon, UploadIcon } from "../ui/icons"
import LoadingWheel from "../ui/loadingWheel";
import { useRouter } from 'next/navigation'
import { revalidateTag } from "next/cache";
import { Button } from "../ui/button"
import PocketBase from 'pocketbase';
import { useState } from "react"
import Image from "next/image"

export default function ImagesPage({ newPoint, setNewPoint, setImagesPage, setTextPage }: any) {
    const router = useRouter()
    const [file, setFile] = useState(newPoint.images[0] ? process.env.NEXT_PUBLIC_DB_ADDR + 'api/files/' + newPoint.collectionId + '/' + newPoint.id + '/' + newPoint.images[0] : '')
    const [isLoading, setIsLoading] = useState(false)
    const [finishedPoint, setFinishedPoint] = useState(new FormData)

    function getFile(event: any) {
        if (!event.target.files[0]) 
            return
        finishedPoint.append('images', event.target.files[0])
        setFinishedPoint(finishedPoint)
        setFile(URL.createObjectURL(event.target.files[0]))
    }

    function returnFunction() {
        setImagesPage(0)
        setTextPage(1)
    }

    async function sendData() {
        const pb = new PocketBase(process.env.NEXT_PUBLIC_DB_ADDR)

        setIsLoading(true)
        finishedPoint.set('type', newPoint.type)
        finishedPoint.set('title', newPoint.title)
        finishedPoint.set('description', newPoint.description)
        finishedPoint.set('location', newPoint.location)
        finishedPoint.set('arrivalLocation', newPoint.arrivalLocation)
        finishedPoint.set('date', new Date(newPoint.date).toUTCString())
        finishedPoint.set('endDate', new Date(newPoint.endDate).toUTCString())
        finishedPoint.set('latitude', newPoint.latitude)
        finishedPoint.set('longitude', newPoint.longitude)
        finishedPoint.set('endLatitude', newPoint.endLatitude)
        finishedPoint.set('endLongitude', newPoint.endLongitude)
        try {
            await pb.collection('MapPoints').create(finishedPoint)
        } catch (error) {
            console.error('error adding file:', error)
        } finally {
            router.push('/pocmainpage')
        }
    }

    if (isLoading) {
        return (
            <LoadingWheel />
    )}

    return (
        <section className='flex flex-col justify-center'>
            <div className='relative w-[90%] sm:w-[50%] lg:w-[30%] aspect-square overflow-hidden border rounded-lg mt-3 m-auto'>
                    {/*<div className="absolute top-[50%] bottom-[50%] w-fit h-fit left-0 right-0 z-50 m-auto flex flex-col" />*/}
                    <div className="absolute -translate-y-1/2 rounded-full w-96 h-96 blur-3xl mix-blend opacity top-96 -left-56 bg-macaroni-and-cheese-400 z-10"/>
                    <div className="absolute -top-64 left-1/2 -translate-x-1/2 rounded-full w-96 h-96 blur-3xl mix-blend bg-macaroni-and-cheese-400 z-10"/>
                { file ?
                    <Image
                        src={file}
                        width={1500}
                        height={1500}
                        alt={newPoint.title ? newPoint.title : 'placeholder'}
                        className="object-cover w-full h-full"
                    />
                :
                   <div className="h-full w-full"/> 
                }
                <label className='absolute flex items-center justify-center top-0 w-full h-full'>
                    <input type="file" onChange={getFile} accept='image/*' className='hidden' />
                    { !file ?
                        <PlusIcon className='w-14 h-14' />
                    : 
                        <UploadIcon className='w-14 h-14' />
                    }
                </label>
            </div>
            <h1 className='w-full text-center my-3 text-2xl font-bold text-macaroni-and-cheese-950'>Add Image</h1>
            <div className='flex flex-row justify-between w-[90%] lg:w-[60%] m-auto'>
                <Button className='w-fit m-3 bg-macaroni-and-cheese-500 hover:bg-macaroni-and-cheese-600 text-macaroni-and-cheese-50' onClick={() => returnFunction()}>
                    <LeftArrowIcon className='w-5 h-5 filter-white' />
                </Button>
                {file == '' ?
                    <Button className='w-fit m-3 bg-macaroni-and-cheese-100 text-macaroni-and-cheese-400' variant={'secondary'}>
                        Créer
                    </Button>
                :
                    <Button className='w-fit m-3 bg-macaroni-and-cheese-500 hover:bg-macaroni-and-cheese-600 text-macaroni-and-cheese-50' variant={'default'} onClick={() => sendData()}>
                        Créer
                    </Button>
                }
            </div>
        </section>
)}