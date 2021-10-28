/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux"
import ActionsUsers from "../../Storages/Actions/Users"
import midlewareAuth from "../../Utils/PagesAuth"

const Example = (props) => {
    
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-indigo-900 text-3xl md:text-6xl lg:text-7xl font-extrabold">Home ReactJs & Redux</h1>
            <button onClick={() => dispatch(ActionsUsers.AuthClear())} className="text-white text-lg font-bold bg-indigo-800 opacity-50 hover:opacity-100 px-20 py-5 mt-10 rounded-lg shadow-xl">Log Out</button>
        </div>
    )
}

export default midlewareAuth( Example )