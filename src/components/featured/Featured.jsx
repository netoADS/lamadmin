import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


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
                < p className="title">Total slaes made today</p>
                < p className="amount">R$420</p>
                < p className="desc">
                Processamento de transações anteriores. Os últimos pagamentos podem não estar incluídos.
                </p>
            </div>
        </div>

    )
}

export default Featured