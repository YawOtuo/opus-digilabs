import life_pic from '../images/youre_doing_life.png'
export const HomeSection4 = () =>
{
    return (
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-3">
                    <div>
                        <h4>Choose your sections</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                            Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                            a pulvinar mauris aliquam.</p>
                    </div>
                    <div>
                        <h4>Choose your sections</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                            Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                            a pulvinar mauris aliquam.</p>
                    </div>
                </div>
                <div className="col-sm-7">
                    <h3>Create pages using beautiful components</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                            Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                            a pulvinar mauris aliquam.</p>
                        <button>Learn More</button>
                </div>

            </div>
            <div className="row align-items-center justify-content-center ">
                <div col-sm-4>
                    <p>Features</p>
                    <h3>You're not just doing business. You're doing life</h3>
                    <p>Responsive Components</p>
                    <p>Over 50 sections</p>
                    <p>Handcrafted pages</p>
                </div>
                <div className="col-sm-6">
                    <img src={life_pic}/>
                </div>
            </div>
        </div>
    )
}