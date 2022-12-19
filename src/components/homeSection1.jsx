import wetransfer_pic from '../images/wetransfer.png'
import stamps_pic from '../images/stamps.png'
import manter_pic from '../images/manter.png'
import sugarcane_pic from '../images/sugarcane.png'


export const HomeSection1 = () =>
{
    return (
        <div className="container-fluid my-sm-5">
            <div className="row align-items-center justify-content-center text-center text-sm-left">
                <h3 className='px-4 px-sm-0 my-5 font-weight-bold '>Trusted and loved by the world's best teams</h3>
            </div>
            <div className="row align-items-center justify-content-center text-center mb-sm-5 pb-sm-5">
                <div className='col-sm-2 mt-5 mt-sm-0 mb-5 mb-sm-0'>
                    <img className='img-fluid' src={wetransfer_pic} />

                </div>
                <div className='col-sm-2 mt-5 mt-sm-0 '>
                    <img className='img-fluid' src={stamps_pic} />

                </div>
                <div className='col-sm-2 mt-5 mt-sm-0 '>
                    <img className='img-fluid' src={manter_pic} />

                </div>
                <div className='col-sm-2 mt-5 mt-sm-0 '>
                <img className='img-fluid' src={sugarcane_pic} />

                </div>
            

            </div>
            <div className="row align-items-center justify-content-center my-5 text-center py-sm-5">
                <div className="col-sm-2 mt-5 my-sm-0">
                    <h3 className='font-weight-bold m-sm-0'>99.95%</h3>
                    <div className='big_font_16'>
                        <p className='m-sm-0 p-sm-0'  style={{fontWeight: "500"}}>Accuracy rate</p>
                        <p>in fulfilling orders</p>
                    </div>
                </div>
                <div className="col-sm-2 mt-5 my-sm-0">
                    <h3 className='font-weight-bold'>5,000+</h3>
                  <div className='big_font_16'>
                        <p  className='m-sm-0 p-sm-0' style={{fontWeight: "500"}}>Ecommerce businesses</p>
                        <p>partner with opus</p>
                  </div>
                </div>
                <div className="col-sm-2 mt-5 my-sm-0">
                    <h3 className='font-weight-bold'>99.96%</h3>
                    <div className='big_font_16'>
                        <p  className='m-sm-0 p-sm-0'  style={{fontWeight: "500"}}>of orders ship on time</p>
                        <p>within SLA</p>
                    </div>
                </div>
                <div className="col-sm-3 mt-5 my-sm-0">
                    <h3 className='font-weight-bold'>#1</h3>
                  <div className='big_font_16'>
                        <p  className='m-sm-0 p-sm-0' style={{fontWeight: "500"}}>Best Fulfillment Technology</p>
                        <p>by AdWeek's Retail Awards</p>
                  </div>
                </div>


            </div>
        </div>
    )
}