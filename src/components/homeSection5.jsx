import modern_and_elegant from '../images/modern_and_elegant.png'
import opus_ui_kit_pic from '../images/opus_ui_kit.png'

export const HomeSection5 = () =>
{
    return (
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-5">
                    <img src={modern_and_elegant} alt=""/>                
                    </div>
                <div className="col-sm-5">
                    <p>Our Knowledge</p>
                    <h3>A UI Kit that's Modern and Elegant</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                        Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                        a pulvinar mauris aliquam.</p>
                </div>
            </div>
            <div className="row align-items-center justify-content-center ">
                <div col-sm-4>
                    <p>Stamps</p>
                    <p>The Opus UI Kit let's you showcase your work in style.
                        It's help take our business online
                    </p>
                    <p>ALEXA F.</p>
                    <p>DESIGNER @stamps</p>
                    <button>LEft <i class="fas fa-quote-right    "></i></button>
                </div>
                <div className="col-sm-6">
                <img src={opus_ui_kit_pic} alt=""/>  
                </div>
            </div>
        </div>
    )
}