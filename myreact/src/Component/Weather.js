import React, { Component } from 'react'
import {Button ,InputGroup ,FormControl,Form , Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class Weather extends Component {
   constructor(){
       super()
       this.state={
           cityName:'',
           showCity:false,
           data:[],
       }
   }

   changeCity(e){
      console.log(e.target.value);
      this.setState({
        cityName:e.target.value,
          showCity:false,
      })
    }
    
    eventHandler(e){
        
        let apiURL=`https://test-react-node-api.herokuapp.com/weather?city=${this.state.cityName}`;
           axios.get(apiURL).then(res=>{
               console.log(res.data);
               this.setState({
                 data:res.data.data,
                showCity:true,
            })

           }).catch(e=>{

           })

        
  
    }


    render() {
        return (
        <div style={{width:'20%' ,margin:'30px auto'}}>
            <Form >
            <InputGroup className="mb-3" >
                <FormControl
                placeholder="The City You Want To Know Weather In There"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e)=>this.changeCity(e)}
                name="city"
                
                />
            <Button variant="outline-secondary" id="button-addon2" onClick={(e)=>this.eventHandler(e)}>
                Click me
            </Button>
           </InputGroup>
           </Form>

           {(this.state.showCity) && this.state.data.map((item,index)=>{

           return (
            <Card border="dark" style={{ width: '18rem' }} key={index}>
            <Card.Header>Weather Today</Card.Header>
            <Card.Body>
           <Card.Title>{item.date}</Card.Title>
           <Card.Title>{item.des}</Card.Title>
             </Card.Body>
           </Card>



           )


           })
            
           
            }
        </div>
        )
    }
}

export default Weather
