import high_converting_pic from '../images/high_converting_template.png'
import clean_look_pic from '../images/clean_minimal_professional_look.png'
import journey_possible_pic from '../images/opus_made_our_journey_possible.png'


export const HomeSection6 = () =>
{
    return (
        <div className="container-fluid">
            <div class="row align-items-center justify-content-center">
                <h3>Resources</h3>
                <button>Get started</button>
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-3">
                    <img src={high_converting_pic} alt="" />
                    <h4>A high-converting, high-performing template</h4>
                    <p>Turpis senectus amet tortor in sodates odio tettus.
                        Pretium id amet, euismod sceteriscue vetit.</p>
                    <button>Read Article</button>
                </div>
                <div className="col-sm-3">
                    <img src={clean_look_pic} alt="" />

                    <h4>With a clean, minimal and professional look</h4>
                    <p>Turpis senectus amet tortor in sodates odio tettus.
                        Pretium id amet, euismod sceteriscue vetit.</p>
                    <button>Read Article</button>
                </div>
                <div className="col-sm-3">
                    <img src={journey_possible_pic} alt="" />

                    <h4>Opus made our journey possible</h4>
                    <p>Turpis senectus amet tortor in sodates odio tettus.
                        Pretium id amet, euismod sceteriscue vetit.</p>
                    <button>Read Article</button>
                </div>
            </div>


        </div>
    )
}