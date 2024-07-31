'use client'

import { LeftArrowIcon, RightArrowIcon } from "../ui/icons"
import { Button } from "../ui/button"

export default function TextPage({ newPoint, setNewPoint, setTextPage, setDatePage, setImagesPage }: any) {

    function returnFunction() {
        setTextPage(0)
        setDatePage(1)
    }

    function changeToImagesPage() {
        setTextPage(0)
        setImagesPage(1)
    }

    return (
        <section className='flex flex-col justify-center'>
            <h1 className='w-full text-center my-3 text-2xl font-bold text-macaroni-and-cheese-950'>Title</h1>
            <input 
                type='text' 
                defaultValue={newPoint.title} 
                className='my-3 w-[90%] h-10 lg:w-[60%] m-auto border rounded-lg border-macaroni-and-cheese-800 p-3' 
                onChange={(event) => setNewPoint((prevState: Object) => ({ ...prevState, title: event.target.value}))}
            />
            <h1 className='w-full text-center my-3 text-2xl font-bold text-macaroni-and-cheese-950'>Description</h1>
            <textarea 
                defaultValue={newPoint.description}
                className='my-3 w-[90%] h-60 lg:w-[60%] m-auto border rounded-lg border-macaroni-and-cheese-800 p-3' 
                onChange={(event) => setNewPoint((prevState: Object) => ({ ...prevState, description: event.target.value}))}
            />
            <div className='flex flex-row justify-between w-[90%] lg:w-[60%] m-auto'>
                <Button className='w-fit m-3 bg-macaroni-and-cheese-500 hover:bg-macaroni-and-cheese-600 text-macaroni-and-cheese-50' onClick={() => returnFunction()}>
                    <LeftArrowIcon className='w-5 h-5 filter-white' />
                </Button>
                {(newPoint.title == '' || newPoint.description == '') ?
                    <Button className='w-fit m-3 bg-macaroni-and-cheese-100 text-macaroni-and-cheese-400' variant={'secondary'}>
                        <RightArrowIcon className={'w-5 h-5 filter-mc-400'} />
                    </Button>
                :
                    <Button className='w-fit m-3 bg-macaroni-and-cheese-500 hover:bg-macaroni-and-cheese-600 text-macaroni-and-cheese-50' variant={'default'} onClick={() => changeToImagesPage()}>
                        <RightArrowIcon className={'w-5 h-5 filter-white'} />
                    </Button>
                }
            </div>
        </section>
)}