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
            <div className="row align-items-center justify-content-center text-center">
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
            <div className="row align-items-center justify-content-center my-5 text-center text-sm-left">
                <div className="col-sm-2 mt-5 my-sm-0">
                    <p className='font-weight-bold'>99.95%</p>
                    <p>Accuracy rate</p>
                    <p>in fulfilling orders</p>
                </div>
                <div className="col-sm-2 mt-5 my-sm-0">
                    <p className='font-weight-bold'>5,000+</p>
                    <p>Ecommerce businesses</p>
                    <p>partner with opus</p>
                </div>
                <div className="col-sm-2 mt-5 my-sm-0">
                    <p className='font-weight-bold'>99.96%</p>
                    <p>of orders ship on time</p>
                    <p>within SLA</p>
                </div>
                <div className="col-sm-2 mt-5 my-sm-0">
                    <p className='font-weight-bold'>#1</p>
                    <p>Best Fulfillment Technology</p>
                    <p>by AdWeek's Retail Awards</p>
                </div>


            </div>
        </div>
    )
}