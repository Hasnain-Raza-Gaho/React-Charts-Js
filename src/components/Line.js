import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'c 1',
            data: [12, 19, 30, 5, 2, 3],
           
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'c 2',
            data: [122, 39, 34,152, 21, 32],
          
            borderColor: "red",
            backgroundColor: 'yellow',
        },
        {
            label: 'c 3',
            data: [123, 139, 3, 50, 12, 30],
           
            borderColor: 'green',
            backgroundColor: 'rgba(255, 99, 12, 0.5)',
        },
        {
            label: 'c 2',
            data: [22, 39, 134, 52, 21, 132],
            borderColor: 'rgb(153, 162, 235)',
            backgroundColor: 'rgba(153, 162, 235, 0.5)',
        },
    ],
};



function LineChart(){
    return(
      <>
      <Container>
        <Row>
        <Col md={6} sm={12} xs={12}>
      <Line data={data} />
        </Col>
        </Row>
      </Container>
      </>
        
    )

}
export default LineChart;