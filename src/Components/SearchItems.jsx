import React, { Component, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Skeleton } from '@mui/material';
import { Link as Linkee } from 'react-router-dom';

function SearchItems(props) {

    const[namme,setnamme]=useState(null)


  return (<div>
           <Card sx={{ maxWidth: 345 }}>
                 <CardActionArea>
                         <CardMedia
                         component="img"
                         height="140"
                         image={props.img}
                        alt="green iguana"
                        />
    
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.nmee}
                    </Typography>
    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Linkee to={`/user/${props.nmee}`}style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Button size="small" color="primary" >
                <Typography>visit profile</Typography>
              </Button>
              </Linkee>
                    
                    {/* <Button size="small" color="primary" onClick={()=>send(props.nmee)}>
                    visit profile
                    </Button> */}
                </CardActions>
            </Card>
        </div>
    
  )
}

export default SearchItems




