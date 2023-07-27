import Carousel from "./Carousel";
import CarouselCategory from "./CarouselCategory";
import CarouselProduct from "./CarouselProduct";
import HomePageCard from "./HomePageCard";
const Body = () => {
  return (
    <div className="">
      <Carousel />
      <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
        <HomePageCard title={"We have a gift for you"} 
        img={"../images/home_grid_1.jpg"}
        link={"See terms and condition"}/>
        <HomePageCard title={"Watch the Ring so Power"} 
        img={"../images/home_grid_2.jpg"}
        link={"Start streaming now"}/>
        <HomePageCard title={"Unlimited Streaming"} 
        img={"../images/home_grid_3.jpg"}
        link={"Browse Kindle Unlimited"}/>
        <HomePageCard title={"More titles to explore"} 
        img={"../images/home_grid_4.jpg"}
        link={"Find out more"}/>
        <HomePageCard title={"Shop Pet Supplies"} 
        img={"../images/home_grid_5.jpg"}
        link={"See more"}/>
        <HomePageCard title={"Spring Sale"} 
        img={"../images/home_grid_6.jpg"}
        link={"See more deals"}/>
        <HomePageCard title={"Echo Buds"} 
        img={"../images/home_grid_7.jpg"}
        link={"See more"}/>
        <HomePageCard title={"Family Plan: 3 months free"} 
        img={"../images/home_grid_8.jpg"}
        link={"learn more"}/>
        
        <div className="m-3 pt-8">
            <img  className="xl:hidden" src={"../images/banner_image_2.jpg"}/>
        </div>
        
        
      </div>
      <CarouselProduct/>
      <CarouselCategory/>
      <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src={"../images/banner_image.jpg"}
            alt="Banner 1"
          />
        </div>
    </div>
  );
};
export default Body;
