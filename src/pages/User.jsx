import React, { Component } from 'react';
import { Button, Grid} from '@mui/material';
import { Avatar } from '@mui/material';
import axios from 'axios';
import { PeopleAlt, ThreeDRotation } from '@mui/icons-material';
import { Chip } from '@mui/material';
import AlternateEmail from '@mui/icons-material/AlternateEmail';
import Twitter from '@mui/icons-material/Twitter';
import { Paper } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from '@mui/material';
import { Link as Linkee } from '@mui/icons-material';
import { Email } from '@mui/icons-material';

import { height, width } from '@mui/system';
import { Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



export default class User extends Component {
    state={
        forurl:null,
        avatar:null,
        name:null,
        followers:null,
        following:null, 
        type: null,
        email:null,
        hireable:'no info',
        twitter_username:null,
        bio:null,
        repos:[],
        

    };

    
    componentDidMount() {

        axios.get(`https://api.github.com/users/${this.props.theuser}`)
          .then(res => {

            
            this.setState({avatar:res.data.avatar_url})
            this.setState({followers:res.data.followers})
            this.setState({following:res.data.following})
            this.setState({type:res.data.type})
            this.setState({forurl:res.data.html_url})
            this.setState({bio:res.data.bio})
            if (res.data.email!== null){
                this.setState({email:res.data.email})
            }
            if (res.data.hireable!= null){
                if(res.data.hireable==true){
                    this.setState({hireable:'hireable'})

                }else{
                    this.setState({hireable:'not hireable'})
                    
                }
                
    
            }
            if (res.data.twitter_username!==null){
                this.setState({twitter_username:res.data.twitter_username})

            }
            
            this.setState({name:res.data.name});
          })
        axios.get(`https://api.github.com/users/${this.props.theuser}/repos`)
          .then(res => {
              
            
            
            
            res.data.map((x)=>{this.setState({ repos: [...this.state.repos, ...[[x.name,x.language,x.watchers,x.description,x.clone_url]] ] }) })
            
            
        });
      };

    



    
  render() {

    return(
        
        <Grid container rowSpacing={3}columnSpacing={{ xs: 0, sm: 2, md: 2 }}> 

            <Grid item xs={0} sm={12} md={12}>
                
            </Grid>
            <Grid item xs={0.5} sm={1} md={3}>
                
            </Grid>
            <Grid item  xs={6} sm={4} md={2}>
            <Avatar sx={{ width: 160, height: 160 }}  src={this.state.avatar} />
            </Grid>
            <Grid item  xs={5} sm={5} md={4}>
                
                <Typography variant='h4' >
                    {this.state.name}
                    
                </Typography>
                <Chip label={this.state.type} color="success" variant="outlined"/>
                <Chip label={this.state.hireable} color="primary" variant="outlined"/>
                <Typography>
                <Link href={this.state.forurl}>
                <Button >
                                    
                <Linkee />
                </Button>
                </Link>
                    {this.state.bio}
                </Typography>
            </Grid>
            <Grid item xs={0.5} sm={2} md={0.5}>


                
            </Grid>
            <Grid item xs={0.5} md={4}>
                
            </Grid>

            <Grid item  xs={1} sm={2} md={1}>
                
             
            </Grid>
            <Grid item  xs={4} sm={2} md={1}>
                <PeopleAlt sx={{ width: 100, height: 100 }}/>
             
            </Grid>
            <Grid item   xs={5} sm={0.5} md={0}>

                <Typography variant='h5' >
                    <Chip label={ `followers : ${this.state.followers}`}/> 
                   
                </Typography>
                <Typography variant='h5' >
                <Chip label={ `following : ${this.state.following}`}/> 
                </Typography>
            </Grid>
            <Grid item xs={0.5} sm={ 0}md={0}>
                
            </Grid>
            <Grid item xs={3} sm={1} md={1} >
                
            </Grid>
            <Grid item container direction='column' xs={9} sm={2} md={4}>
                <div><Email/>  <Chip label={this.state.email || this.state.email == null && 'no info'}/> </div>
                <div><Twitter/>  <Chip label={this.state.twitter_username|| this.state.twitter_username == null && 'no info'}/> </div>
        
                
            </Grid>
            <Grid item container xs={12} sm={12} md={12}  alignItems='center' justifyContent='center'>
                <Grid item={true} xs={5.5} sm={5.5} md={5.5}></Grid>
                <Grid item xs={6.5} sm={6.5} md={6.5} >
                <Button variant="contained">repository</Button>


                </Grid>


                
            </Grid>
            <Grid item container alignItems='center' justifyContent='center' rowSpacing={2}>
            {this.state.repos.map((i,index)=>{
                    
                    
                        
                    return(
                        
                       
                        <Grid item={true} key={index}  container >
                        
                                <Grid item={true} xs={0} sm={2} md={3}></Grid>
                              
                                <Grid item={true} xs={12} sm={8} md={6}>
                                <Paper>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}>
                                    <Typography >
                                            {i[0] || i[0]==null && 'no info'}
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Chip label={i[1] || i[1]==null && 'no info'} color="success" />
                                    <Chip label={i[2]} color="primary" />
                                    <Typography >
                                    <Link href={i[4]}>
                                    <Button >
                                    
                                    <Linkee />
                                    </Button>
                                    </Link>
                                    {i[3] || i[3]==null && 'no info'}

                                    </Typography>
                                    

                                    </AccordionDetails>
                                </Accordion>
                                </Paper>



                                </Grid>
                                
                            
                            
                            <Grid item={true} xs={0}sm={2}md={3}></Grid>
                    


                        </Grid>
                    )
                  })}
                

                

            </Grid>
            

            
            
            
        </Grid>
        
    ) 
    ;
  }
}
