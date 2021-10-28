/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux"
import ActionsUsers from "../../Storages/Actions/Users"
import midlewareAuth from "../../Utils/PagesAuth"

const Login = (props) => {

    const dispacth = useDispatch()

    /**
     * contoh menyimpan token ke dalam storage 
     * contoh menyimpan data user ke dalam storage 
     */
    const setRedux = () => {
        dispacth(ActionsUsers.AuthSet('token1234'))
        dispacth(ActionsUsers.UserSet({ name: 'xample' }))
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-indigo-900 text-3xl md:text-6xl lg:text-7xl font-extrabold">Boilerplate ReactJs & Redux</h1>
                <button onClick={setRedux} className="text-white text-lg font-bold bg-indigo-800 opacity-50 hover:opacity-100 px-20 py-5 mt-10 rounded-lg shadow-xl">Login</button>
            </div>
        </>
    )
}

export default midlewareAuth( Login )