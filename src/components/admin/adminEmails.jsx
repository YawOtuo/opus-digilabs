import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../navbar"
import { url } from "../weburl"

export const AdminEmails = () =>
{
    const [emails, setEmails] = useState([])

    useEffect(() =>
    {
        axios
            .get(`${url}api/emails`)
            .then((res) =>
            {
                setEmails(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const displayEmails = () =>
    {
        return Object.keys(emails).map((item) =>
        {
            console.log(emails[item].emails)
            return <p>{emails[item].id} : {emails[item].emails}</p>
        }

        )
    }
    return (


        <div className="">
            <Navbar />
            <div className="container-fluid py-5">
                <div className="row align-items-center justify-content-center py-5 blue_bg text-white">
                    <div className="col-sm-4">
                        <Link to='/admin' className="text-white">Go to Header Content</Link>
                    </div>
                    <div className="col-sm-4">
                        <Link to='/admin-emails' className="text-white">Go to Emails Section</Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-6 pb-3">
                        <h4>Registered Emails</h4>
                        {displayEmails()}
                    </div>
                </div>
            </div>
        </div>
    )
}