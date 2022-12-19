import modern_and_elegant from '../images/modern_and_elegant.png'
import opus_ui_kit_pic from '../images/opus_ui_kit.png'

export const HomeSection5 = () =>
{
    return (
        <div className="container-fluid my-5 py-5">
            <div className="row align-items-center justify-content-center mt-5 pt-5">
                <div className="col-sm-5 order-last order-sm-first">
                    <img className='img-fluid' src={modern_and_elegant} alt="" />
                </div>
                <div className="col-sm-5 px-sm-5">
                    <p className='text-uppercase pt-5 pt-sm-0'>Our Knowledge</p>
                    <h1 className='big_font_48'>A UI Kit that's Modern and Elegant</h1>
                    <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                        Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                        a pulvinar mauris aliquam.</p>
                </div>
            </div>
            <div className="row align-items-center justify-content-center  mt-1 mt-sm-5 pt-5">
                <div className="col-sm-6 text-center mt-5  font-weight-bold">
                    <p>stamps</p>
                    <p>The Opus UI Kit let's you <br/> showcase your work in style.<br/>
                        It's help take our business online
                    </p>
                    <p>ALEXA F.</p>
                    <p>DESIGNER @stamps</p>
                    <button>LEft <i class="fas fa-quote-right    "></i></button>
                </div>
                <div className="col-sm-4 mt-1 mt-sm-5 text-center">
                    <img className='img-fluid' src={opus_ui_kit_pic} alt="" />
                </div>
            </div>
        </div>
    )
}