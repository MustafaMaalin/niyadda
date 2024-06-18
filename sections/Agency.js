import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT AGENCY" /> <br />
            <br />
            <Title
              title="Unmatched Services to Propel Your Digital Transformation!"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Transforming Your Digital Intentions into Reality since 2018." />
              <p className="desc-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                rhoncus eleifend magna, molestie iaculis sem pulvinar eu. Etiam
                non dui felis. Proin posuere dapibus magna laoreet posuere.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                dignissim, sem eget sollicitudin tempor, libero velit aliquam
                enim, vel egestas tortor ante quis sem.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">5+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">10+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">:)</h1>
                  <h3>Internationally Available </h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/s1.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/niyaddaa.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                At Niyadda Digital Agency, we blend creativity and integrity to deliver exceptional value and customer satisfaction. Rooted in our Somali heritage, we build fulfilling partnerships that create long-lasting positive experiences. We strive for fairness, never over-promise, and always aim to exceed expectations with our modern, professional approach.
              </p>
              <br/>
             
            </div>
            
          </div>
        </div>
      </section>
      
      {/* <Brand /> */}
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
