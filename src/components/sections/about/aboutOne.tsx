import SectionTitle from "@/components/ui/sectionTitle"
import { Link } from "react-router-dom"

const AboutOne = () => {
  return (
    <section id="about" className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-image-items">
                <div className="counter-shape float-bob-y">
                  <div className="icon">
                    <img src="/img/about/icon-1.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3><span className="count">900</span>+</h3>
                    <p>Customers</p>
                  </div>
                </div>
                <div className="about-image-1 bg-cover wow slideLeft" data-delay=".3" style={{ backgroundImage: 'url("/NewImgs/shutterstock_32619811-1024x671.jpg")' }}>
                  <div className="about-image-2 wow slideUp" data-delay=".5">
                    <img src="/NewImgs/service-interiors.jpg" alt="about-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="about-content">
                <SectionTitle>
                  <SectionTitle.SubTitle>About Us</SectionTitle.SubTitle>
                  <SectionTitle.Title> Leading Civil & Defence Aviation Company</SectionTitle.Title>
                </SectionTitle>
                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                  AeroChamp is a ISO9001 certified organisation. It is a testament to our commitment to excellence, attention to detail, and adherence to industry best practices in the aviation industry.
                </p>
                <div className="about-icon-items">
                  <div className="icon-items wow slideUp" data-delay=".7">
                    <div className="icon">
                      <img src="/img/about/icon-2.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>Global Reach</h4>
                      <p>
                        Strong relationship with OEMs, distributors across 30+ countries.
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow slideUp" data-delay=".9">
                    <div className="icon">
                      <img src="/img/about/icon-3.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>Quality Focused</h4>
                      <p>
                        Commitment to excellence and adherence to industry best practices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-author">
                  <div className="about-button wow slideUp" data-delay=".5">
                    <Link to="/" className="theme-btn">
                      Explore More
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                  <div className="author-image wow slideUp" data-delay=".7">
                    <img src="/img/about/author.png" alt="author-img" />
                    <div className="content">
                      <h6>Dr. Praveen Srivastava</h6>
                      <p>Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutOne