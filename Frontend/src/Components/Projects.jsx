import icon3 from "../assets/icon3.png"
export default function Projects(){
    return <div className=" h-[100%] w-[90%] grid grid-rows-12 grid-cols-1 grid-flow-col divide-y-2 mx-auto  text-light-gray font-bold font-mono text-2xl">
        <div className="row-span-1 row-start-1 mt-4  text-xl font-semibold font-mono flex justify-between">
            <div><p>Projects</p></div>
            <div className="h-5 w-5"><img src={icon3} /></div>
            </div>
        <div className="row-span-5 row-start-2 w-[100%] m-auto h-[85%] bg-project1 bg-cover bg-no-repeat rounded-lg" style={{borderTopWidth:"0px"}}></div>
        <div className="row-span-2 row-start-7 py-6 "><p>Medvisor</p></div>
        <div className="row-span-2 row-start-9 py-6"><p>Excalidraw Clone</p></div>
        <div className="row-span-2 row-start-11 py-6"><p>Medvisor</p></div>


    </div>
}