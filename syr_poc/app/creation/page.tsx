'use client'

import MeetLocationPage from '@/components/creation/meetLocationPage';
import TripLocationPage from '@/components/creation/tripLocationPage';
import ImagesPage from '@/components/creation/imagesPage';
import DatePage from '@/components/creation/datePage';
import TextPage from '@/components/creation/textPage';
import TypePage from '@/components/creation/typePage';
import React, { useState } from 'react';

export default function CreationPage() {
    const [newPoint, setNewPoint] = useState({
        id: '',
        collectionId: '',
        type: '',
        title: '',
        description: '',
        location: '',
        arrivalLocation: '',
        date: new Date() as Date | null,
        endDate: null as Date | null,
        latitude: 0,
        longitude: 0,
        endLatitude: 0,
        endLongitude: 0,
        images: ['']
    })
    const [typePage, setTypePage] = useState(1)
    const [meetLocationPage, setMeetLocationPage] = useState(0)
    const [tripLocationPage, setTripLocationPage] = useState(0)
    const [datePage, setDatePage] = useState(0)
    const [textPage, setTextPage] = useState(0)
    const [imagesPage, setImagesPage] = useState(0)

    return (
        <main className="flex flex-col justify-center">
            { typePage ?
                <TypePage newPoint={newPoint} setNewPoint={setNewPoint} setTypePage={setTypePage} setMeetLocationPage={setMeetLocationPage} setTripLocationPage={setTripLocationPage} />
            : false}
            { meetLocationPage ?
                <MeetLocationPage newPoint={newPoint} setNewPoint={setNewPoint} setMeetLocationPage={setMeetLocationPage} setTypePage={setTypePage} setDatePage={setDatePage} />
            : false}
            { tripLocationPage == 1 ?
                <TripLocationPage newPoint={newPoint} setNewPoint={setNewPoint} setTripLocationPage={setTripLocationPage} setTypePage={setTypePage} setDatePage={setDatePage} />
            : false}
            { datePage ?
                <DatePage newPoint={newPoint} setNewPoint={setNewPoint} setDatePage={setDatePage} tripLocationPage={tripLocationPage} setTripLocationPage={setTripLocationPage} setMeetLocationPage={setMeetLocationPage} setTextPage={setTextPage} />
            : false}
            { textPage ?
                <TextPage newPoint={newPoint} setNewPoint={setNewPoint} setTextPage={setTextPage} setDatePage={setDatePage} setImagesPage={setImagesPage} />
            : false}
            { imagesPage ?
                <ImagesPage newPoint={newPoint} setNewPoint={setNewPoint} setImagesPage={setImagesPage} setTextPage={setTextPage} />
            : false}
        </main>
    )
}