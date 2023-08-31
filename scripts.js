const universalLoader = async()=>{
    const res =await fetch(' https://openapi.programming-hero.com/api/ai/tools');
    const data =await res.json()
    showUniversal(data)
    
}

const showUniversal = (data)=>{
    const cardContainer =document.getElementById('card-container');
     const dataArray = data.data.tools
     dataArray.forEach(tools => {
        console.log(tools)
       
        const newDiv =document.createElement('div');
        newDiv.innerHTML=`
        <div class="card  bg-base-100 shadow-xl">
        <figure><img src="${tools.image? tools.image:'no photo Available'}" alt="No photo" /></figure>
        <div class="card-body">
          <h2 class="card-title "></h2>
          <p class="text-2xl font-bold">Features</p>
        <ol class ="list-decimal font-semibold">
        ${tools.features.map((features)=>`<li class ="">${features}</li>`).join("")}
        </ol>
       
        <p class= "text-xl font-bold">${tools.name}<p/>
        <p class= "text-xl font-bold"> <span><a href="#"><i class="fa-solid fa-calendar-days"></i></a></span> Date:${tools.published_in} <span class="ml-16"><i class="fa-solid fa-arrow-right"></i></span><p/>
          </div>
        </div>
      </div>

        `
        cardContainer.appendChild(newDiv)
       
     });

 
         
}

// data shorting



const shortButton = async()=>{
  const cardContainer =document.getElementById('card-container');
  cardContainer.innerText =''
    const res =await fetch(' https://openapi.programming-hero.com/api/ai/tools');
    const data =await res.json()
  
    const shortData =(data.data.tools)
    shortData.sort((a,b)=>new Date (b.published_in )-new Date (a.published_in));
   
    const shortContainer =document.getElementById('short-container')
      shortData.forEach(tools=>{
       const div =document.createElement('div');
       div.innerHTML=`
       
       <div class="card  bg-base-100 shadow-xl">
       <figure><img src="${tools.image? tools.image:'no photo Available'}" alt="No photo" /></figure>
       <div class="card-body">
         <h2 class="card-title ">Shorting start</h2>
         <p class="text-2xl font-bold">Features</p>
       <ol class ="list-decimal font-semibold">
       ${tools.features.map((features)=>`<li class ="">${features}</li>`).join("")}
       </ol>
      
       <p class= "text-xl font-bold">${tools.name}<p/>
       <p class= "text-xl font-bold"> <span><a href="#"><i class="fa-solid fa-calendar-days"></i></a></span> Date:${tools.published_in} <span class="ml-16"><i class="fa-solid fa-arrow-right"></i></span><p/>
         </div>
       </div>
     </div>   
    `
    cardContainer.appendChild(div);
      }) 

}
// shorting()
universalLoader()
// shortButton()