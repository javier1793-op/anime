import "../css/details.scss";
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";

import Head from "./Head";

const Details = () => {
  return (
    <>
      <div className="container">
        <Head />
        <div className="contentDetail">
          <div className="btnSection">
            <button className="btn back">
              <TbArrowBigLeftLinesFilled /> back to list
            </button>
          </div>

          <div className="detailSection">
            <div className="imgDetail borderSection">
                <div className="backColor">
                    <img src="" alt="portada" />
                </div>
            </div>
            <div className="infoDetail borderSection">
                <div className="backColor">

                informacion
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
