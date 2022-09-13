import React ,{useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import Videos from './Videos'
import { fetchFromAPI } from '../utils/FetchFromAPI'

const VideoDetail = () => {
  const [videoDetail, setvideoDetail] = useState(null)
  const [relatedVideos, setrelatedVideos] = useState(null)
  const { id } = useParams();
 
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => setvideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data=>setrelatedVideos(data.items))

  },[id])
  return (
    <Box minHeight='95vh'>
        <Stack direction={{xs:'column', md: 'row'}}>
            <Box flex={1}>
              <Box sx={{
                width: '100%',
                position: 'sticky',
                top: '86px'
              }}>
                  <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                      className='react-player'
                      controls
                  />
                  <Typography color='#fff' fontWeight='bold' variant='h5' p={2}>
                    {videoDetail?.snippet?.title}
                  </Typography>
                  <Stack direction='row' justifyContent='space-between' sx= {{color: '#fff'}} py={1} px={2}>
                  <Link to={`channel/${videoDetail?.snippet?.channelId}`}>
                      <Typography color='#fff' variant={{sm : 'subtitles1', md: 'h6'}} >
                        {videoDetail?.snippet?.channelTitle}
                        <CheckCircle sx={{fontSize: '12px', color: 'green', ml: '5px'}}/>
                      </Typography>
                  </Link>
                  <Stack direction='row' alignItems='center' gap='20px'>
                    <Typography variant='body1' sx={{ opacity: 0.9}}>
                      {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} Views
                    </Typography>
                    <Typography variant='body1' sx={{ opacity: 0.9}}>
                      {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} Likes
                    </Typography>
                  </Stack>
                  </Stack>
              </Box>
            </Box>
            <Box px={2} py={{md: 1, sx: 5 }} justifyContent='center' alignItems='center'>
          <Videos videos={relatedVideos} direction='column'/>
        </Box>
        </Stack>
    </Box>
  )
}

export default VideoDetail