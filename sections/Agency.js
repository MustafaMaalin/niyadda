import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";
import ScrollToTopButton from "@/components/ScrollToTopButton";

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
              <h1 className="misson-p">
              “We beautifully digitise business owners’ genuine intentions.”              </h1>
              <br/>
             
            </div>
            
          </div>
         
        </div>
      </section>
      <section className='vision'>
        <div className='container'>
          <p>Past</p>
          <h1 className="vision-title">
            Stressing about what <strong className="develop">hashtags</strong> to pick
          </h1>
          <div className='sub-heading'>
            <TitleSm title='Business owners with little time on their hands had to impossibly stay up-to-date with the latest social media trends and events just to feel relevant.' />
          </div>
          </div>
        </section>

        <section className='vision'>
        <div className='container'>
          <p>The Future</p>
          <h1 className="vision-title">
            Leave <strong className="develop">digital matters</strong> to us so you can do you
          </h1>
          <div className='sub-heading'>
            <TitleSm title='Give yourself peace of mind by leaning into our digital expertise so we can simply make you look, feel, and be good online.' />
          </div>
          </div>
        </section>
      {/* <Brand /> */}
     
      <Banner />
      <ScrollToTopButton />
      
    </>
  );
};

export default Agency;
