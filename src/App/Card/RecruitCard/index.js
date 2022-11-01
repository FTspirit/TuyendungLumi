import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./RecruitCard.scss";

import copyicon from "../../../Asset/image/copyicon.png";
function RecruitCard({ heading, link }) {
  return (
    <>
      <div className="RecruitCard-Container">
        <Link to={link}>
          <p>{heading}</p>
        </Link>
        <div className="RecruitCard-ButtonGroup">
          <Button className="RecruitCard-CopyButton">
            <img src={copyicon} alt="Copy icon" />
            Copy link
          </Button>
          <Link to={link}>
            <Button className="bg-success RecruitCard-ApplyButton">
              Apply
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default RecruitCard;
