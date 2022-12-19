import video_image from '../images/inform_users_with_video_sections.png'
export const HomeSection2 = () =>
{
    return (
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-8">
                    <h1>Inform users with video sections</h1>
                    <img src={video_image} alt="" />
                </div>  
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                        Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                        a pulvinar mauris aliquam.</p>
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-6">
                   <h1>Make your site better with Opus</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                        Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                        a pulvinar mauris aliquam.</p>

                    <button>Learn More</button>
                </div>
                <div className="col-sm-5">
                   <div>
                    <h3>Build or Customize a Website in Minutes</h3>
                   </div>
                   <div>
                    <h3>Our UI Kit was made for creativity</h3>
                   </div>
                </div>
            </div>
        </div>
    )
}