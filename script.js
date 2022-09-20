


 const breweries = [
        {
            name: "10-56 Brewing Company",
            brewery_type:"micro", 
            city: "Knox",
            state: "Indiana",
            country :"United States",
            street: "400 Brown Cir",
            website_url: "http://www.10barrel.com",
        },
    
        {
            name: "10-56 Brewing Company",
            brewery_type:"micro", 
            city: "Knox",
            state: "Indiana",
            country :"United States",
            street: "400 Brown Cir",
            website_url: "http://www.10barrel.com",
        },
    
        {
            name: "10-56 Brewing Company",
            brewery_type:"micro", 
            city: "Knox",
            state: "Indiana",
            country :"United States",
            street: "400 Brown Cir",
            website_url: "http://www.10barrel.com",
        },
       ];


               
            

    function createBreweries(breweries){
    
      breweries.forEach((breweries)=> {
        
        document.body.innerHTML += `<div class = "breweries-container">        
        <div class = "content-container">        
            <h2 class="name"> ${breweries.name}</h2>
            <p> <span> Brewery Type:</span> ${breweries.brewery_type} </p>
            <p> <span> ID :</span> ${breweries.id} </p>
            <p> <span> Latitude :</span> ${breweries.latitude} </p>
            <p> <span> Longitude :</span> ${breweries.longitude} </p>
            <p> <span> Street :</span> ${breweries.street} </p>
            <p> <span> City :</span> ${breweries.city}  </p>
            <p> <span> Phone Number :</span> ${breweries.phone}  </p>
            <p> <span> State:</span> ${breweries.state}  </p>
            <p> <span> country:</span> ${breweries.country}  </p>
            <p> <span> website URL:</span> ${breweries.website_url} </p>
         </div>
    </div>`;
    });
}




fetch("https://api.openbrewerydb.org/breweries") 
    .then((data)=>data.json()) 
    .then((breweries) => createBreweries(breweries))
    .catch((errMsg)=>console.log("An error Occured : ", errMsg));

       
        








   