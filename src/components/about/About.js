import './About.css';
import aboutimg from'../../assets/images/profile.jpg'

function About(){
    return(
        <>
        <section id="about">
      <div className="about grid-container">
        <img className="about-img" src={aboutimg} alt="milad" />
        <h2 className="title">About Me</h2>
        <p className="info">
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget
          tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
          porttitor volutpat. Vestibulum ac diam sit amet quam vehicula
          elementum sed sit amet dui. porttitor at sem. Nulla porttitor accumsan
          tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id
          enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit,
          eget tincidunt nibh pulvinar a.
        </p>
      </div>
    </section>
        </>
    )
}

export default About