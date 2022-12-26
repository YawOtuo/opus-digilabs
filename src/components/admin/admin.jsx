import Navbar from "../navbar"

export const Admin = () =>
{
    return (
        <div>
            <Navbar />
            <div className="bg-primary py-5">
                <div className="row align-items-center justify-content-center">
                  <div className="col-sm-10" >  
                  <p>Header Content</p>
                  <div className="row align-items-center justify-content-center">
                   <div className="col-sm-8">
                        
                        <button className="btn btn-success">Edit header title</button>

                   </div>
                      
                </div>
                <div className="row align-items-center justify-content-center">
                   <div className="col-sm-8">
                        
                   <button className="btn btn-success">Edit header Image</button>

                   </div>
                      
                </div>



                  </div>
                    </div>


            </div>
        </div>

    )
}