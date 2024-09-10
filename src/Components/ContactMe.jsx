import icon2 from "../assets/icon2.png"
export default function ContactMe(){
    return<div className="w-[100%]">
        <div className="h-14 px-6 text-xs my-5 font-mono flex justify-between">
            <div> Lets have a <br/>Conversation!</div>
            <div className="h-5 w-5"><img src={icon2}/></div>
        </div>
        <div className="h-20"></div>
        <div className="h-20 my-auto text-5xl mx-5 font-serif"><p className="font-bold"><i>Contact</i> <span className="font-light"><i>me</i></span></p></div>
        <div></div>
    </div>
}