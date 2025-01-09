import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/metric/metrics');
        if (!response.ok) throw new Error('Veri çekilemedi');

        // Burada veri parse ediyorsunuz:
        const data = await response.json();

        // Bu satırla konsolda görebilirsiniz:
        console.log("Fetched metrics:", data);

        // Ardından state'e kaydediyorsunuz:
        setMetrics(data);
      } catch (error) {
        console.error('Metrik verileri alınamadı:', error);
      }
    };

    // useEffect içinde, bileşen yüklendiğinde veri çekilir
    fetchMetrics();
  }, []);

  if (!metrics) return <p>Yükleniyor...</p>;

const networkData = metrics.find((m) => m.name === 'network.bytesIn');
const connectionData = metrics.find((m) => m.name === 'connections.current');

//Eğer bulunmazsa veya dataPoints yoksa
if (!networkData || !networkData.dataPoints || !connectionData || !connectionData.dataPoints) {
  return <p className='text-white'>Gerekli veri bulunamadı veya eksik alan var.</p>;
}

const chartData = {
  labels: networkData.dataPoints.map((point) =>
    new Date(point.timestamp).toLocaleTimeString()
  ),
  datasets: [
    {
      label: 'Network Bytes In',
      data: networkData.dataPoints.map((point) => point.value),
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false,
    },
    {
      label: 'Current Connections',
      data: connectionData.dataPoints.map((point) => point.value),
      borderColor: 'rgba(255, 99, 132, 1)',
      fill: false,
    },
  ],
};

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: 'rgba(0, 128, 0, 1)', // X eksenindeki etiketlerin rengi (yeşil)
        },
      },
      y: {
        ticks: {
          color: 'rgba(128, 0, 128, 1)', // Y eksenindeki etiketlerin rengi (mor)
        },
      },
    },
  };

  return (
    <div className='flex flex-col w-screen items-center justify-center h-full bg-[#6b78ad]'>
      <div className='flex flex-col w-[50%] bg-white p-[2%] gap-10 rounded-md'>
      <h2 className='text-[#0e0c1b] text-[20px]'>Network ve Bağlantı Grafiği</h2>
      <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
