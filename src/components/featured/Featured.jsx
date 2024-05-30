import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import  KeyboardArrowDownIcon  from "@mui/icons-material/KeyboardArrowDown";
import  KeyboardArrowUpOutlined  from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>
                < p className="title">Total sales made today</p>
                < p className="amount">R$420</p>
                < p className="desc">
                Processamento de transações anteriores. Os últimos pagamentos podem não estar incluídos.
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount"> R$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlined fontSize="small"/>
                            <div className="resultAmount"> R$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlined fontSize="small"/>
                            <div className="resultAmount"> R$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Featured