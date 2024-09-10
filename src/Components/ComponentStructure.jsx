import ContactMe from "./ContactMe";
import Nevbar from "./Nevbar";
import Profile from "./Profile";
import Projects from "./Projects";
import Socials from "./Socials";
import Summary from "./Summary";
import Title from "./Title";

function ComponenetStructure(){

    return<div>
        <div class="grid grid-rows-12 grid-cols-12 grid-flow-col gap-4 bg-black h-screen">
            <div class="row-span-1 col-span-12 row-start-1 bg-Light-orange rounded-lg  text-light-gray" ><Nevbar></Nevbar></div>
            <div class="row-span-7 col-span-5 row-start-2  bg-Light-orange rounded-lg  text-light-gray"><Title></Title></div>
            <div class="row-span-7 col-span-3 row-start-2 bg-light-gray rounded-lg text-Light-orange"><Profile></Profile></div>
            <div class="row-span-9 col-span-4 row-start-2  bg-Light-orange rounded-lg  text-light-gray"><Projects></Projects></div>
            <div class="row-span-4 col-span-4 row-start-9 col-start-1  bg-Light-orange rounded-lg  text-light-gray"><Summary></Summary></div>
            <div class="row-span-4 col-span-4 row-start-9 col-start-5  bg-light-gray rounded-lg text-Light-orange"><ContactMe></ContactMe></div>
            <div class="row-span-2 col-span-4 row-start-11 col-start-9  bg-Light-orange rounded-lg  text-light-gray"><Socials></Socials></div>
            
            
        </div>
    </div>
}
export default ComponenetStructure;