import React from "react";
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaYoutube} from 'react-icons/fa';
import {CiSearch} from 'react-icons/ci';
import {FaMicrophone} from 'react-icons/fa';
import {TbVideoPlus} from 'react-icons/tb';
import {CiBellOn} from 'react-icons/ci';

export default function Navbar() {
    return (
        <div className="flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky ">
            <div className="flex gap-8 items-center text-2xl ">
                <div>
                    <GiHamburgerMenu />
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <FaYoutube className="text-3xl text-red-600" />
                    <span className="text-2xl ">Youtube</span>
                </div>
            </div>
                <div className="flex items-center justigy-center gap-5">
                    <form>
                        <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl">
                            <div className="flex gap-5 items-center pr-5">
                                <input type="text" placeholder="Search" className="w-96 bg-zinc-900 focus:outline-none border-none" />
                            </div>
                            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
                                    <CiSearch className="text-xl" />
                            </button>
                        </div>
                    </form>
                    <div className="text-xl p-3 bg-zinc-900 rounded-full">
                        <FaMicrophone />
                    </div>
                </div>
                    <div className="flex gap-8 items-center text-xl">
                        <TbVideoPlus />
                        <div className="relative">
                            <CiBellOn />
                            <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">9+</span>
                        </div>
                        <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg"
                            alt="profile logo" className="w-9 h-9 rounded-full" />
                    </div>
        </div>
    )
}