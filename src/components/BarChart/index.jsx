import './global.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Bar } from 'react-chartjs-2';
  import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const BarChart = () => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Agendamentos da semana',
        
            color: '#fff',
            font: {
                family:'Roboto',
                size: 18
            }
            
          },
        },  
        scales: {
            y: {
            grid: {
                color: '#ffffff21',
            }
            },
            x: {
            grid: {
                color: '#ffffff21'
            }
            }
        }
        
        
      };
      
      const labels = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
      
    const data = {
        labels,
        datasets: [
            {
                label: 'Agendamentos',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 70 })),
                backgroundColor: '#3f4af1',
                borderRadius: 7
            }
        ],
      };
      
    return (
            <div className='barChart-container'>
                <Bar options={options} data={data} />
            </div>
    )
}

export default BarChart