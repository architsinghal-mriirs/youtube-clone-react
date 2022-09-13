import { useState } from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({videos, direction}) => {
  // const [channels, setchannels] = useState([])
  // let channelArray = videos.filter(item=>item.id.channelId)
  // console.log(channel);
  if(!videos?.length) return 'Loading...'
  return (
    <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item,index)=>(
          <Box key={index}>
            {item.id.channelId && <ChannelCard channelDetail={item}/>} 
            {item.id.videoId && <VideoCard video={item} />}
          </Box>
))}
    </Stack>
  )
}

export default Videos

////{item.id.videoId && <VideoCard video={item} />}