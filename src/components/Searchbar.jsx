import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'

const Searchbar = () => {
  const [searchTerm, setsearchTerm] = useState('')
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`)

      setsearchTerm('')
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        // borderRadius: 10,
        border: '1px solid #e3e3e3',
        p1: 2,
        boxShadow: 'none',
        mr: {sm: 5}
      }}
    >
      <input
        className="search-bar"
        placeholder='SEARCH'
        value={searchTerm}
        onChange={(e)=>setsearchTerm(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{
            p: '10px',
            color: 'red'
          }}>
            <SearchIcon />
          </IconButton>
    </Paper>
  )
}

export default Searchbar