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
                <h1 className="title">Receita</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={67} text={"67%"} strokeWidth={5}/>
                </div>
                <p className="title">Total de Vendas Hoje</p>
                <p className="amount">R$12.461,56</p>
                <p className="desc">
                Processamento de transações anteriores. Os últimos pagamentos podem não estar incluídos.
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Objetivo</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount"> R$12,4 mil</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Semana Anterior</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlined fontSize="small"/>
                            <div className="resultAmount"> R$11,9 mil</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Mês Anterior</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlined fontSize="small"/>
                            <div className="resultAmount"> R$73,2 mil</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Featured