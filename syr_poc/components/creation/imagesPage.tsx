'use client'

import { LeftArrowIcon, PlusIcon, UploadIcon } from "../ui/icons"
import LoadingWheel from "../ui/loadingWheel";
import { useRouter } from 'next/navigation'
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
            router.push('/')
        }
    }

    if (isLoading) {
        return (
            <LoadingWheel />
    )}

    return (
        <section className='flex flex-col justify-center'>
            <div className='relative w-[90%] sm:w-[70%] lg:w-[50%] aspect-square overflow-hidden border rounded-lg m-auto'>
                { file ?
                    <Image
                        src={file}
                        width={1500}
                        height={1500}
                        alt={newPoint.title ? newPoint.title : 'placeholder'}
                        className="object-cover w-full h-full"
                    />
                :
                   <div className="h-full w-full bg-red-300"/> 
                }
                <label className='absolute flex items-center justify-center top-0 w-full h-full'>
                    <input type="file" onChange={getFile} accept='image/*' className='hidden' />
                    { !file ?
                        <PlusIcon className='w-14 h-14 filter-white' />
                    : 
                        <UploadIcon className='w-14 h-14 filter-white' />
                    }
                </label>
            </div>
            <h1 className='w-full text-center mb-3 text-xl font-bold'>Add Image (this is not mandatory)</h1>
            <div className='flex flex-row justify-between w-[90%] lg:w-[60%] m-auto'>
                <Button className='w-fit m-3' onClick={() => returnFunction()}>
                    <LeftArrowIcon className='w-5 h-5 filter-white' />
                </Button>
                {file == '' ?
                    <Button className='w-fit m-3' variant={'secondary'}>
                        Créer
                    </Button>
                :
                    <Button className='w-fit m-3 text-white' variant={'default'} onClick={() => sendData()}>
                        Créer
                    </Button>
                }
            </div>
        </section>
)}