'use client'

import { LeftArrowIcon, RightArrowIcon } from "../ui/icons"
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker"
import { Button } from "../ui/button"

export default function DatePage({ newPoint, setNewPoint, setDatePage, tripLocationPage, setTripLocationPage, setMeetLocationPage, setTextPage }: any) {

    function returnFunction() {
        setDatePage(0)
        if (tripLocationPage == 2)
            setTripLocationPage(1)
        else
            setMeetLocationPage(1)
    }

    function changeToTextPage() {
        setDatePage(0)
        setTextPage(1)
    }

    return (
        <section className='flex flex-col justify-center'>
            <h1 className='w-full text-center my-3 text-2xl font-bold text-macaroni-and-cheese-950'>Start date</h1>
            <DatePicker
                selected={newPoint.date ? newPoint.date : new Date()} 
                dateFormat={"MM/dd/yyyy"}
                minDate={new Date()}
                onChange={(tmpDate) => setNewPoint((prevState: Object) => ({ ...prevState, date: new Date(tmpDate!)}))} 
                className='my-3 w-[90%] h-10 lg:w-[60%] m-auto text-center border rounded-lg' 
            />
            <h1 className='w-full text-center my-3 text-2xl font-bold text-macaroni-and-cheese-950'>End date</h1>
            <DatePicker 
                selected={newPoint.endDate ? newPoint.endDate : null} 
                dateFormat={"MM/dd/yyyy"}
                minDate={new Date()}
                onChange={(tmpDate) => setNewPoint((prevState: Object) => ({ ...prevState, endDate: new Date(tmpDate!)}))} 
                className='w-[90%] h-10 lg:w-[60%] m-auto text-center border rounded-lg' 
            />
            <div className='flex flex-row justify-between w-[90%] lg:w-[60%] m-auto'>
                <Button className='w-fit m-3 bg-macaroni-and-cheese-500 hover:bg-macaroni-and-cheese-600 text-macaroni-and-cheese-50' onClick={() => returnFunction()}>
                    <LeftArrowIcon className='w-5 h-5 filter-white' />
                </Button>
                {(!newPoint.date || !newPoint.endDate) ?
                    <Button className='w-fit m-3 bg-macaroni-and-cheese-100 text-macaroni-and-cheese-400' variant={'secondary'}>
                        <RightArrowIcon className={'w-5 h-5 filter-mc-400'} />
                    </Button>
                :
                    <Button className='w-fit m-3 bg-macaroni-and-cheese-500 hover:bg-macaroni-and-cheese-600 text-macaroni-and-cheese-50' variant={'default'} onClick={() => changeToTextPage()}>
                        <RightArrowIcon className={'w-5 h-5 filter-white'} />
                    </Button>
                }
            </div>
        </section>
)}