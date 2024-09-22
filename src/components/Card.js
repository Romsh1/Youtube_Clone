import React from "react";

export default function Card({data}) {
    return (
        <div>
            <div>
                <div>
                    <span>
                        {data.videoDuration}
                    </span>
                    <img src={data.videoThumbnail} />
                </div>
            </div>
        </div>
    )
}