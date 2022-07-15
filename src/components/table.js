import Table from 'react-bootstrap/Table';

function TableGrid({contributions}) {
    let sNo = 1;
  return (
    <>
        {
            (contributions && contributions.length > 0)? 
                <Table striped>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Contributed Date</th>
                        <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contributions[0].map((element, i) => {
                                return (
                                <tr key={i}>
                                    <td>{sNo++}</td>
                                    <td>{element.contributedDate}</td>
                                    <td>{element.amount}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
             : <><h2>Start contributing to the temple by clicking here .. </h2> </>
        }
  </>   
  );
}

export default TableGrid;