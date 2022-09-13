import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl,demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from "../utils/constants"

const VideoCard = ({video : {id : {videoId}, snippet}}) => {
  return (
    <Card sx ={{
        width : {
            md: '320px',
            xs: '100%'
        },
        boxShadow: 'none',
        
        // border: '5px solid white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto'
    }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
            
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
            sx={{
                width: '358px',
                height: '180px'
            }}
            />
        </Link>
        <CardContent 
            sx ={{
                backgroundColor: "#1e1e1e",
                height: '90px'
            }}
            >
                 <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                 </Link>
                 <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color="gray">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx ={{fontSize: 12, color: "green", ml: "5px"}}/>
                    </Typography>
                 </Link>
            </CardContent>
    </Card>
  )
}

export default VideoCard