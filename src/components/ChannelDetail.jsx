import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/FetchFromAPI'

const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setvideos] = useState([])
  console.log(channelDetail, videos);


  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then(data=>setchannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then(data=>setvideos(data?.items))

  }, [id])

  return (
    <Box minHeight="95vh" >
      <Box>
        <div 
          style={{
          background: 'radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 70%, rgba(2,0,36,1) 100%)',
          zIndex: 10,
          height: '300px'
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-93px'/>
      </Box>
          <Box display='flex' p='2'>
            <Box sx = {{ mr: { sm: '100px'}}} />
              <Videos videos={videos}/>
          </Box>
    </Box>
  )
}

export default ChannelDetail