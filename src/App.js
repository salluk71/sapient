import React, { Component } from 'react'

export default class App extends Component {

   launch_success = '';
   landing_success = '';
   launch_year = '';
   constructor(){
      super();
      this.state = {
         data:null,
         isLoaded:false,     
         notFound:true      
      }
   }

   componentDidMount(){
     const url = 'https://api.spaceXdata.com/v3/launches?limit=100';
      fetch(url , {
         method : 'GET'
         }).then(response => {
            response.json().then(result => {              
            this.setState({
               data:result,
               isLoaded:true,
               notFound:false   
            })  
         })
      })
   }


   filterData(e , key , value){    
      console.log(key , value)
      this.setState({
         data:null,
         isLoaded:false,  
         notFound:true
            
      })
      var param = '?limit=100';

      if(key === 'launch_year' ){
         this.launch_year = `&${key}=${value}`
      }else  if(key === 'land_success' ){
         this.landing_success = `&${key}=${value}`          
      }else  if(key === 'launch_success' ){
         this.launch_success = `&${key}=${value}`         
      }        

      param += this.launch_year + this.landing_success + this.launch_success;    
      
      const  url = 'https://api.spaceXdata.com/v3/launches'+ param;            
      fetch(url , {
         method : 'GET'
         }).then(response => {
            response.json().then(result => { 
               if(result.length >0){
                  this.setState({
                     data:result,
                     isLoaded:true,
                     notFound:false
                  })  
               }else{
                  this.setState({
                     notFound:true,
                     isLoaded:true
                  })  
               }         
               
         })
      })
   }

   
   render() {
      return (
         <>
         <main id="page-wrapper">
            <h1>SpaceX Launch Programs</h1>
            <div className="filters-content-list">
               <div className="filters">
                  <h3>Filters</h3>
                  <div className="launch-year common-filter-styling">
                     <h4>Launch Year</h4>
                     <ul>
                        <li>
                           <div>
                              <input type="radio" name="years"   onClick={ ()=> {this.filterData(this, 'launch_year' , 2006)}} id="year2006" />
                              <label htmlFor="year2006"> 2006 </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio" name="years"  onClick={ ()=> {this.filterData(this, 'launch_year',2007)}} id="year2007" />
                              <label htmlFor="year2007"> 2007 </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio" name="years" onClick={ ()=> {this.filterData(this, 'launch_year',2008)}} id="year2008" />
                              <label htmlFor="year2008"> 2008 </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio" name="years" onClick={ ()=> {this.filterData(this, 'launch_year',2009)}} id="year2009" />
                              <label htmlFor="year2009"> 2009 </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio" name="years" onClick={ ()=> {this.filterData(this, 'launch_year' , 2010)}} id="year2010" />
                              <label htmlFor="year2010"> 2010 </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio" name="years" onClick={ ()=> {this.filterData(this, 'launch_year' , 2011)}} id="year2011" />
                              <label htmlFor="year2011"> 2011 </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio" name="years" onClick={ ()=> {this.filterData(this, 'launch_year' , 2012)}} id="year2012" />
                              <label htmlFor="year2012"> 2012 </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio" name="years" onClick={ ()=> {this.filterData(this, 'launch_year' , 2013)}} id="year2013" />
                              <label htmlFor="year2013"> 2013 </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio" name="years" onClick={ ()=> {this.filterData(this, 'launch_year' , 2014)}} id="year2014" />
                              <label htmlFor="year2014"> 2014 </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio" name="years" onClick={ ()=> {this.filterData(this, 'launch_year' , 2015)}} id="year2015" />
                              <label htmlFor="year2015"> 2015 </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio" name="years" onClick={ ()=> {this.filterData(this, 'launch_year' , 2016)}} id="year2016" />
                              <label htmlFor="year2016"> 2016 </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio" name="years" onClick={ ()=> {this.filterData(this, 'launch_year' , 2017)}} id="year2017" />
                              <label htmlFor="year2017"> 2017 </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio" name="years" onClick={ ()=> {this.filterData(this, 'launch_year' , 2018)}} id="year2018" />
                              <label htmlFor="year2018"> 2018 </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio" name="years" onClick={ ()=> {this.filterData(this, 'launch_year' , 2019)}} id="year2019" />
                              <label htmlFor="year2019"> 2019 </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio" name="years" onClick={ ()=> {this.filterData(this, 'launch_year' , 2020)}} id="year2020" />
                              <label htmlFor="year2020"> 2020 </label>                                 
                           </div>
                        </li>
                     </ul>
                  </div>
                  <div className="successful-launch common-filter-styling">
                     <h4>Successful Launch</h4>
                     <ul>
                        <li>
                           <div>
                              <input type="radio"  onClick={ ()=> {this.filterData(this, 'launch_success' , true)}}  name="launch" id="success-true" />
                              <label htmlFor="success-true"> True </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio"  onClick={ ()=> {this.filterData(this, 'launch_success' , false)}}  name="launch" id="success-false" />
                              <label htmlFor="success-false"> False </label>                                 
                           </div>
                        </li>                        
                     </ul>
                  </div>
                  <div className="successfull-landing common-filter-styling">
                     <h4>Successful Landing</h4>
                     <ul>
                        <li>
                           <div>
                              <input type="radio"  onClick={ ()=> {this.filterData(this, 'land_success' , true)}}  name="landing" id="landing-true" />
                              <label htmlFor="landing-true"> True </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio"  onClick={ ()=> {this.filterData(this, 'land_success', false)}} name="landing" id="landing-false" />
                              <label htmlFor="landing-false"> False </label>                                 
                           </div>
                        </li>                        
                     </ul>
                  </div>
               </div>
               <div className="content-list">
                  {
                  (this.state.isLoaded) ?
                  this.state.notFound== false ?
                     this.state.data.map((data , i) => 
                           <div className="spaceBox" key={i}>
                           <figure>
                              <img src={data.links.mission_patch} alt={data.mission_name} />                        
                           </figure>
                           <h3>{data.mission_name}</h3>
                           <ul>
                              <li>Mission IDS:
                                 {data.mission_id? 
                                 <ul className="mission_id_list">{
                                    data.mission_id.map((mission_id , id_i)=> 
                                       <li key={id_i} >{mission_id }</li>
                                    )
                                 }
                                 </ul>
                                 :
                                 ''   
                              }
                              </li>
                              <li>Launch Year: <span> {data.launch_year} </span> </li>
                              <li>Successful Launch:  <span> {data.launch_success? 'True' : 'False' } </span> </li>
                              <li>Successful Landing: <span> {data.rocket.first_stage.cores[0].land_success == null || data.rocket.first_stage.cores[0].land_success == false? 'False' :'True'}</span> </li>
                           </ul>
                        </div>

                     )
                     :
                     <div >not found </div>
                 
                  :                             
                     <div>Please Wait...</div>
                  }
               </div>
            </div>
               
            <span className="developed-by"><strong>Developed By:</strong> Salman Khan</span>
         </main>
         </>
      )
   }
}
