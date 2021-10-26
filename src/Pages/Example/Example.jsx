/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import ActionsUsers from "../../Storages/Actions/Users"
import midlewareAuth from "../../Utils/PagesAuth"

const Example = (props) => {

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-indigo-900 text-3xl md:text-6xl lg:text-7xl font-extrabold">Home ReactJs & Redux</h1>
            <button onClick={props.Logout} className="text-white text-lg font-bold bg-indigo-800 opacity-50 hover:opacity-100 px-20 py-5 mt-10 rounded-lg shadow-xl">Log Out</button>
        </div>
    )
}

// get redux
const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}
// set redux
const mapDispatchToProps = (dispacth) => {
    return {
        Logout: bindActionCreators(ActionsUsers.AuthClear, dispacth)
    }
}

export default midlewareAuth( connect(mapStateToProps,mapDispatchToProps)(Example) )