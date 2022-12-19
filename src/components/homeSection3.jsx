import project_management_pic from '../images/project_management.png'
import advanced_analytics_pic from '../images/advanced_analytics.png'
import marketing_and_dashboard_pic from '../images/marketing_dashboard.png'


export const HomeSection3 = () =>
{
    return (
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-8">
                    <h1>Ways to work with us</h1>
                    <button>Get Started</button>
                </div>

            </div>
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-3">
                    <img src={project_management_pic} alt="" />
                    <h4>Project Management</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                        Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                        a pulvinar mauris aliquam.</p>
                </div>
                <div className="col-sm-3">
                <img src={advanced_analytics_pic} alt="" />
                    <h4>Advanced Analytics</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                        Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                        a pulvinar mauris aliquam.</p>
                </div>
                <div className="col-sm-3">
                <img src={marketing_and_dashboard_pic} alt="" />
                    <h4>Marketing & Dashboard</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros.
                        Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus,
                        a pulvinar mauris aliquam.</p>
                </div>
            </div>

        </div>
    )
}