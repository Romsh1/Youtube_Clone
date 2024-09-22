import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import Spinner from "../components/Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home () {

    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) => state.youtubeApp.videos);

    useEffect(() => {
        dispatch(getHomePageVideos(false));
    }, [dispatch])

    return (
        <div className="max-h-screen overflow-auto">
            <div style={{height:"7.5vh"}}>
                <Navbar />
            </div>
            <div className="flex" style={{height:"92.5vh"}}>
            <Sidebar />
            {
                videos.length ? (
                    <InfiniteScroll 
                    dataLength={videos.length} 
                    next={()=>dispatch(getHomePageVideos(true))}
                    hasMore={videos.length<500}
                    loader={<Spinner />}
                    height={650}>
                        <div>
                            {videos.map((item) => {
                                return <Card data= {item} key={item.videoId} />
                            })}
                        </div>
                    </InfiniteScroll>
                ) : (
                    <Spinner />
                )
            }
            </div>
        </div>
    )
}
