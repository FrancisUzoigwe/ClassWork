import {BiLogoDeviantart} from "react-icons/bi"
import {Link } from "react-router-dom"
const FirstHeader = () => {
  return (
    <div className="w-full h-[60px] flex justify-center items-center bg-gray-200">
        <div className="w-[90%] h-[50px] flex items-center justify-between">
            <div><BiLogoDeviantart className="text-4xl"/></div>
            <div className="flex justify-between items-center">
               <Link to="/sign-in">
               <button className="px-6 py-2 rounded bg-purple-400 text-white mr-6">Signin</button>
               </Link>
                <Link to="/sign-up">
                <button className="px-6 py-2 rounded bg-purple-400 text-white">Signup</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FirstHeader