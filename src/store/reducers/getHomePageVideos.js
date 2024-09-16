import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/homePageVideos",
    async(isNext, { getState }) => {
        const {
            youtubeApp : {nextPageToken: nextPageTokenFromState, videos},
        } = getState();
        const {
            data: {items, nextPageToken},
        } = await axios.get();
    }
)