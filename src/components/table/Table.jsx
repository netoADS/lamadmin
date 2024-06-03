import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      produto: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      cliente: "Marcello Tuba",
      data: "1 Abril",
      quantia: 4100,
      metodo: "Pagamento em dinheiro",
      status: "Aprovado",
    },
    {
      id: 2235235,
      produto: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      cliente: "Rasanhii",
      data: "1 Abril",
      quantia: 3600,
      metodo: "Online",
      status: "Pendente",
    },
    {
      id: "",
      produto: "",
      img: "https://i.pinimg.com/736x/17/40/49/1740494055a69974380191b58af2ad6b.jpg",
      cliente: "Orlando Rosa",
      data: "Infinito",
      quantia: "Inestimável",
      metodo: "",
      status: "Orlando",
    },
    {
      id: 2357741,
      produto: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      cliente: "netoADS",
      data: "1 Abril",
      quantia: 7000,
      metodo: "Online",
      status: "Aprovado",
    },
    {
      id: 2342355,
      produto: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      cliente: "Pcastroneto",
      data: "1 Abril",
      quantia: 2000,
      metodo: "Online",
      status: "Pendente",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Produto</TableCell>
            <TableCell className="tableCell">Cliente</TableCell>
            <TableCell className="tableCell">Data</TableCell>
            <TableCell className="tableCell">Quantia R$</TableCell>
            <TableCell className="tableCell">Metodo de Pagamento</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.produto}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.cliente}</TableCell>
              <TableCell className="tableCell">{row.data}</TableCell>
              <TableCell className="tableCell">{row.quantia}</TableCell>
              <TableCell className="tableCell">{row.metodo}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;