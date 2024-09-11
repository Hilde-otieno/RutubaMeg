import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen pb-20 gap-24 font-[family-name:var(--font-geist-sans)]">
     <div className="flex text-2xl gap-20 mt-16">
     <img src="/images/Rutubalogo.png" className="ml-4 font-bold text-yellow-500 font-serif	text-2xl mr-96 mb-4" width={50}></img>
                    <a className="text-amber-900 ml-96">Home</a>
                    <a className=" ml-2">Products</a>
                    <a className=" ml-24">Mission</a>
                    <a className=" ml-24">Team</a>
                </div>
                <div className="flex">
                  <div className="block">
                   <p className="text-7xl font-semibold mt-52 ml-8">Join us in protecting our soil.</p>
                   <p className="text-2xl mt-8 ml-20">Create a sustainable future for generations to come. </p>
                   <p className="text-2xl ml-60">Get to explore with us.</p>
                   <button className="bg-yellow-200 rounded-lg text-black p-3 mt-16 text-2xl ml-72">
            <p>Get started</p>
          </button>
                  </div>
                <img src="/images/Farmer-photo.png" className="mb-24 h-screen -mt-16" width={1050}></img>
                </div>
                <div className="h-52 bg-yellow-200 -mt-64 mb-16">
                  <h1 className="text-5xl font-bold text-center mt-20">What is RutubaFarm?</h1>
                </div>
                <p className="text-3xl text-justify w-fit -mt-32">
                RutubaFarm is an innovative, portable gadget designed specifically for rural farmers, providing an affordable and convenient solution for monitoring soil health. 
                Equipped with three advanced sensors. RutubaFarm allows farmers to easily assess key soil parameters such as pH levels, moisture content, and nutrient concentration
                 directly from the comfort of their homes. By offering real-time insights into soil conditions, RutubaFarm empowers farmers to make informed decisions about crop 
                 management, ensuring optimal growth and productivity. The device is designed with simplicity in mind, making it accessible to users with varying levels of technical expertise.
                </p>
                <h1 className="text-4xl font-bold text-center">About Us</h1>
                <div className="flex -mt-12">
                  <div className="bg-yellow-200 w-fit ml-36 rounded-3xl">
                <img src="/images/fertile soil.png" className="mb-24 " width={500}></img>
                <p className="text-3xl font-bold text-center -mt-12">Our mission</p>
                <p className="w-96 text-2xl ml-16 mt-4">"Our mission is to provide small-scale farmers with innovative 
                  soil health gadgets that offer accurate insights into soil 
                  conditions. We aim to enhance agricultural productivity and 
                  sustainability by equipping farmers with tools to monitor soil 
                  pH, nutrients, and moisture. Our technology supports data-driven 
                  decisions, fostering healthier soils and achieving crop success."
                </p>
                </div>
                <div className="bg-yellow-200 w-fit ml-4 rounded-3xl">
                <img src="/images/healthy tree .png" className="mb-24 h-80 " width={500}></img>
                <p className="text-3xl font-bold text-center -mt-12">Our vision</p>
                <p className="w-96 text-2xl ml-16 mt-4">"Our ultimate vision is to empower small-scale
                farmers by providing them with cutting-edge soil health technology that is not 
                only accessible but also affordable. Our goal is to revolutionize the agricultural
                 sector by offering a comprehensive solution that enables farmers make 
                 informed decisions, optimizing crop yields and contributing to sustainable
                farming practices."</p>
                </div>
                <div className="bg-yellow-200 w-fit ml-4 rounded-3xl">
                <img src="/images/soil gadget.png" className="mb-24 " width={500}></img>
                <p className="text-3xl font-bold text-center -mt-12">Our Objectives</p>
                <p className="w-96 text-2xl ml-16 mt-4">"Our objective  is to  develop and 
                distribute  advanced soil health technology that enables small-scale farmers
                 to efficiently monitor and manage soil conditions By focusing on accuracy ,
                  affordability and ease of use , we aim to provide farmers with tools 
                  necessary to asses soil PH , nutrients and moisture levels .Our goal is 
                  support sustainable farming practices"</p>
                </div>
                </div>
                <p className="text-4xl font-bold text-center">Product</p>
                <p className="text-3xl font-bold text-center -mt-32">RutubaFram Gadget</p>
                <div className="flex">
                <div className="block -mt-28">
                <div className="flex">
                <img src="/images/Sideview Rutuba.png" className="mb-24 ml-36" width={150}></img> 
                <p className="font-bold w-52 mt-16">Sideview of charging system</p>
                </div>
                <div className="flex">
                <img src="/images/Topview Rutuba.png" className="mb-24 ml-36" width={150}></img> 
                <p className="font-bold w-52 mt-16">Topview of the gadget</p>
                </div>
                <div className="flex">
                <img src="/images/Frontview Rutuba .png" className="mb-24 ml-36" width={150}></img> 
                <p className="font-bold w-52 mt-16">View of the three sensors</p>
                </div>
                <div className="flex">
                <img src="/images/Inside Rutuba.png" className="mb-24 ml-36" width={150}></img> 
                <p className="font-bold w-52 mt-16">Inside the gadget</p>
                </div>
                </div>
                <img src="/images/Frontview Rutuba .png" className="mb-24 ml-36 h-auto object-contain -mt-36 ml-96" width={750}></img> 
                </div>
                <div className=" bg-yellow-200 -mt-12">
                <p className="text-4xl font-bold text-center bg-yellow-200 mt-8">Our Team</p>
                <div className="flex ml-8 mt-12 gap-28">
                  <div className="block">
                <img src="/images/Faith.jpg" className="mb-24 ml-36 rounded-full h-80" width={320}></img>  
                <p className="text-2xl font-bold ml-52 -mt-20">Faith Munyao</p>
                <p className="text-2xl ml-44">Software Developer</p>
                </div>
                <div className="block">
                <img src="/images/jango.jpg" className="mb-24 ml-36 rounded-full h-80" width={320}></img>  
                <p className="text-2xl font-bold ml-48 -mt-20">Maureen Njango</p>
                <p className="text-2xl ml-44">Software Developer</p>
                </div>
                <div className="block">
                <img src="/images/Megan.jpg" className="mb-24 ml-36 rounded-full h-80" width={320}></img>  
                <p className="text-2xl font-bold ml-52 -mt-20">Megan Otieno</p>
                <p className="text-2xl ml-48">Software Developer</p>
                </div>
                </div>
                <div className="flex ml-80 mt-12 gap-28">
                  <div className="block">
                <img src="/images/Cynthia.png" className="mb-24 ml-36 rounded-full h-80" width={320}></img>  
                <p className="text-2xl font-bold ml-52 -mt-20">Cynthia Nthenya</p>
                <p className="text-2xl ml-48">Software Developer</p>
                </div>
                <div className="block">
                <img src="/images/Loice.png" className="mb-24 ml-36 rounded-full h-80" width={320}></img>  
                <p className="text-2xl font-bold ml-60 -mt-20">Loice Staice</p>
                <p className="text-2xl ml-48">Software Developer</p>
                </div>
                </div>
                </div>
                <div className="flex">
                  <div className="block">
                <img src="/images/Rutubalogo.png" className="mb-24 ml-36 " width={100}></img> 
                <div className="flex ml-12">
                <img src="/images/facebooklogo.svg" className="h-12" width={80}></img> 
                <img src="/images/googlelogo.svg" className="h-12" width={110}></img>
                <img src="/images/youtubelogo.svg" className="ml-8 h-12" width={50}></img>   
                <img src="/images/linkedinlogo.svg" className="ml-16 h-12" width={40}></img>   
                </div>
                </div>
                <div className="block ml-56">
                  <p className="font-bold text-2xl leading-10">Information</p>
                  <p className="text-2xl leading-10">About Us</p>
                  <p className="text-2xl leading-10">Product</p>
                  <p className="text-2xl leading-10">Mission</p>
                  <p className="text-2xl leading-10">Team</p>
                </div>
                <div className="block ml-56 leading-10">
                  <p className="font-bold text-2xl leading-10">Services</p>
                  <p className="text-2xl leading-10">Contact Us</p>
                  <p className="text-2xl leading-10">Resources</p>
                  <p className="text-2xl leading-10">Data Privacy</p>
                </div>
                <div className="block ml-56 leading-10">
                  <p className="font-bold text-2xl leading-10">Contact Us</p>
                  <div className="flex">
                  <img src="/images/Telephone.png" className="mr-8 h-12 leading-10" width={40}></img>  
                  <p className="text-2xl leading-10">+254 790902921</p>
                  </div> 
                  <div className="flex">
                  <img src="/images/Message.png" className="mr-8 h-12 leading-10" width={40}></img> 
                  <p className="text-2xl leading-10">violambira@gmail.com</p>  
                  </div>
                </div>
                </div>
                

    </div>
  );
}
