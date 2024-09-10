import icon1 from "../assets/icon1.png"

export default function Title(){
    return<div className="h-[100%] w-[100%]">
        <div className="h-[60%] relative"><img className="h-36 w-36 flex justify-start absolute right-10" src={icon1}></img></div>
        <div className="h-[40%]">
            <p className="font-semibold text-4xl text-left p-10 tracking-wider">Redefine the Look and Feel of your <i>WEBSITE</i>.</p>
        </div>
    </div>
}