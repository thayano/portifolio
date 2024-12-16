"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export const Profile = () => {
    const [imgProfile, setImgProfile] = useState(null)

    const getPhoto = async () => {
        const response = await fetch(`/api/github/`)
        const data = await response.json()
        setImgProfile(data)
    }

    useEffect(() => {
        getPhoto()
    }, [])

    return (
        <section className="flex gap-6 items-center">
            <div className="rounded-full size-24 flex justify-center items-center bg-slate-300">
                { imgProfile ? (
                    <Image
                        src={imgProfile}
                        height={100}
                        alt="teste"
                        width={100}
                        className="rounded-full"
                    >
                    </Image>
                ) : ``}
            </div>
            <div className="">
                <h1 className="text-xl font-bold uppercase">Thayano Davalo</h1>
                <p className="text-sm text-zinc-400">Desenvolvedor Full Stack</p>
            </div>
        </section>
    );
}