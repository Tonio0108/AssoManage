import { useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function Dashboard(){
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <Counter />
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-md-6 col-lg-6">
                        <Graph1 />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <Graph2/>
                    </div>
                </div>
            </div>

        </>
    )
}

function Counter(){

        const [member, setMember] = useState(0)
        const [coin, setCoin] = useState(0)
        const [up, setUp] = useState(0)
        const [down, setDown] = useState(0)

    return(
        <>
            <div id="count" className="row">
                <div id="member" className="col-6 col-md-5 col-lg-4 rounded-3 shadow text-center mx-auto">
                    <h4>
                        <i className="bi bi-people me-4"></i>
                        Membres
                    </h4>
                    <h5>{ member }</h5>
                </div>

                <div id="cash" className="col-6 col-md-5 col-lg-4 rounded-3 shadow text-center mx-auto my-auto">
                    <h4>
                        <i className="bi bi-cash-coin me-4"></i>
                        Caisse
                    </h4>
                    <h5>{ parseFloat(coin).toFixed(2) } MGA</h5>
                </div>
            </div>

            <div  className="row mt-5 text-center">
                <h4>Historique de transactions</h4>
                <div id="transaction" className=" row col-10 shadow rounded-3 mx-auto mt-3 my-auto">
                    <div className="col-6 text-success my-auto">
                        <h5>
                            <i className="bi bi-arrow-up me-2"></i>
                            { parseFloat(up).toFixed(2) } MGA
                        </h5>
                    </div>

                    <div className="col-6 text-danger my-auto">
                        <h5>
                            <i className="bi bi-arrow-down me-2"></i>
                            { parseFloat(down).toFixed(2) } MGA
                        </h5>
                    </div>
                </div>
            </div>

        </>
    )
}

function Graph1(){
    const data = {
        labels: ['Members', 'Coins'],
        datasets: [
          {
            label: 'Data',
            data: [100, 200],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 159, 64, 0.6)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1,
          },
        ],
      };
    
      return (
            <div className="graph">
              <Doughnut data={data} />
            </div>
      );
}

function Graph2(){
    const data = {
        labels: ['Members', 'Coins'],
        datasets: [
          {
            label: 'Data',
            data: [130, 100],
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 159, 64, 0.6)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1,
          },
        ],
      };
    
      return (
            <div className="graph">
              <Doughnut data={data} />
            </div>
      );
}


export default Dashboard;