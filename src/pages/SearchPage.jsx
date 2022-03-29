import { Grid } from '@mui/material';
import axios from 'axios';
import React, { Component } from 'react';
import { Input , Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import SearchItems from '../Components/SearchItems';
import { motion, MotionConfig } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { CircularProgress } from '@mui/material';
import {Alert} from '@mui/material'
import { TextField } from '@mui/material';





export default class SearchPage extends Component {
  constructor(props) {
    super(props);

    
    
  } 
  state={
    nme:null,
    users:[],
    final:null,
    warn:0,
    found:1
  }
  
  fsubm=(event)=>{
    event.preventDefault();
    if(!event.target[0].value){

      this.setState({warn:1})
 

    }else{
      axios.get(`https://api.github.com/search/users?q=${this.state.nme}`).then(res=>res.data.items.map((x)=>{this.setState({ users:[...this.state.users,[x.login,x.avatar_url] ]}) }))
      axios.get(`https://api.github.com/search/users?q=${this.state.nme}`).then(res=>{if(res.data.total_count==0){this.setState({found:0});this.setState({nme:'z@@'})}})
     
 
      event.target[0].value=''

      this.setState({warn:0})
    
      this.setState({nme:'@@z@@'})

    }
    

    
 
  }

  handleclear=()=>{
    this.setState({users:[]})
    this.setState({warn:0})
    this.setState({nme:null})
  }

  send=(x)=>{
    

    
    if(x!=null){
  
      this.props.realname(x)
      
    }
  }


  load=()=>{

    if(this.state.nme=='@@z@@' && this.state.users.length==0){
      return(<>
                <Grid item container  direction="row" justifyContent="center" alignItems="center" md={12}>
                <CircularProgress />

                </Grid>
            </>)

    }if(this.state.warn==1){
      return(
        <>
        <Grid container item  direction="row" justifyContent="center" alignItems="center" md={12}>
          <Alert variant="filled" severity="error">
            warning — enter somthing!
          </Alert>
        </Grid>

        </>
      )

    
    }if(this.state.found==0 && this.state.nme=='z@@'){
      return(
        <>
        <Grid container item  direction="row" justifyContent="center" alignItems="center" md={12}>
          <Alert variant="filled" severity="error">
            404 — no user found!
          </Alert>
        </Grid>

        </>
      )

    }
    else{
      return(
        <>
        <Grid item md={3}>

        </Grid>
        <Grid item container >
          <Grid item md={2}></Grid>
          <Grid item container  columnSpacing={2} rowSpacing={2} md={8}>
              {this.state.users.map((i , index)=>{
                return(
                    <AnimatePresence key={index}>
                      <Grid item key={index} md={3}>
                        <motion.div
                        key={index}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}>
                          <SearchItems key={index} img={i[1]} nmee={i[0]} name={(x)=>this.send(x)}/>
                        </motion.div>
                      </Grid>
                    </AnimatePresence>


                    

                )})}
          </Grid>
          <Grid item md={2}></Grid>
        </Grid>
        </>
      )

    }
  }
  
  


  render() {
    return (<div>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 2, md: 2 }}>
          <Grid item md={12}>

          </Grid>
          <Grid item md={3}>

          </Grid>
          <Grid item md={6} >
            <form onSubmit={this.fsubm} >
 
            <TextField fullWidth label="search" id="search" onChange={e=>this.setState({nme:e.target.value})} color='primary' />
            <Button variant="outlined" startIcon={<Search />} type="submit"> 
              search
            </Button>
            <Button  variant="outlined" onClick={this.handleclear} > 
              clear
            </Button>


            </form >

          </Grid>

          {this.load()}
         
      </Grid>
    </div>);
  }
}
