import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PropTypes from "prop-types";
import "./tabs.scss";

import tabPic1 from "../../../assets/single-product/tab-pic-1.png";
import tabPic2 from "../../../assets/single-product/tab-pic-2.png";
const TabsSection = ({ product }) => {
  return (
    <section id="tabs">
      <div className="container2 tabs__container">
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Additional Information</Tab>
            <Tab>Reviews [{product.map((pr) => pr.review)}]</Tab>
          </TabList>

          <TabPanel>
            <div className="desc">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
            <div className="pics">
              <img src={tabPic1} alt="" />
              <img src={tabPic2} alt="" />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="desc">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.Weighing in under 7 pounds, the Kilburn is a lightweight
                piece of vintage styled engineering. Setting the bar as one of
                the loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced.
              </p>
            </div>
            <div className="pics">
              <img src={tabPic2} alt="" />
              <img src={tabPic1} alt="" />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="desc">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering.
              </p>
            </div>
            <div className="pics">
              <img src={tabPic1} alt="" />
              <img src={tabPic2} alt="" />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

TabsSection.propTypes = {
  product: PropTypes.array,
};

export default TabsSection;
