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

  // Yeni metric ekleme formu için state:
  const [newName, setNewName] = useState("");
  const [newTimestamp, setNewTimestamp] = useState("");
  const [newValue, setNewValue] = useState("");

  // Mesaj göstermek için
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/metric/metrics');
      if (!response.ok) throw new Error('Veri çekilemedi');
      const data = await response.json();
      console.log("Fetched metrics:", data);
      setMetrics(data);
    } catch (error) {
      console.error('Metrik verileri alınamadı:', error);
    }
  };

  // Yeni metric ekleme (ya da var olana dataPoints ekleme)
  const handleAddMetric = async (e) => {
    e.preventDefault();
    if (!newName || !newTimestamp || !newValue) {
      alert("Lütfen tüm alanları doldurun");
      return;
    }

    const payload = {
      name: newName,
      dataPoints: [
        {
          timestamp: newTimestamp,
          value: Number(newValue),
        },
      ],
    };

    try {
      const res = await fetch('http://localhost:3000/api/metric', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Ekleme/upsert başarısız");
      const result = await res.json();
      setMessage(result.message || "Ekleme/upsert başarılı");

      // Formu temizle
      setNewName("");
      setNewTimestamp("");
      setNewValue("");

      // Listeyi yeniden çek
      fetchMetrics();

    } catch (err) {
      console.error("handleAddMetric error:", err);
    }
  };

  if (!metrics) return <p>Yükleniyor...</p>;

  // networkData / connectionData bulma
  const networkData = metrics.find((m) => m.name === 'network.bytesIn');
  const connectionData = metrics.find((m) => m.name === 'connections.current');
  // Mevcut verileri çektikten sonra:
const opCounterData = metrics.find(m => m.name === 'opcounters');

// Eğer opCounterData yok veya dataPoints yoksa bir uyarı / boş dön
if (!opCounterData || !opCounterData.dataPoints || opCounterData.dataPoints.length === 0) {
  return <p>“opcounters” verisi bulunamadı</p>;
}

// Devamında chart verisini hazırlayın
const opChartData = {
  labels: opCounterData.dataPoints.map((dp) =>
    new Date(dp.timestamp).toLocaleTimeString()
  ),
  datasets: [
    {
      label: "Opcounters",
      data: opCounterData.dataPoints.map((dp) => dp.value),
      borderColor: "rgba(54, 162, 235, 1)",
      fill: false,
    },
  ],
};


  if (!networkData || !networkData.dataPoints || !connectionData || !connectionData.dataPoints) {
    return <p className='text-white'>Gerekli veri bulunamadı veya eksik alan var.</p>;
  }

  // network grafiği
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
      }
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { ticks: { color: 'rgba(0, 128, 0, 1)' } },
      y: { ticks: { color: 'rgba(128, 0, 128, 1)' } },
    },
  };

  // connections grafiği
  const chartData2 = {
    labels: connectionData.dataPoints.map((point) =>
      new Date(point.timestamp).toLocaleTimeString()
    ),
    datasets: [
      {
        label: 'Current Connections',
        data: connectionData.dataPoints.map((point) => point.value),
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
    ],
  };
  
  const options2 = {
    responsive: true,
    scales: {
      x: { ticks: { color: 'rgba(0, 128, 0, 1)' } },
      y: { ticks: { color: 'rgba(128, 0, 128, 1)' } },
    },
  };
  

  return (
    <div className='flex flex-col w-full items-start justify-start h-full bg-[#6b78ad] text-white px-5 py-5'>
      <h1 className='text-2xl mb-4 text-[#0e0c1b] font-semibold font-monserrat'>Dashboard</h1>

      <div className='flex w-full items-start justify-between'>
      <div className='w-[74%] grid grid-cols-2 mt-10 justify-center items-center gap-2'>
        <div className='flex flex-col w-[90%] bg-white p-[2%] gap-10 rounded-md text-[#0e0c1b]'>
          <h2 className='text-[#0e0c1b] text-[20px]'>Network Grafiği</h2>
          <Line data={chartData} options={options} />
        </div>
        
        <div className='flex flex-col w-[90%] bg-white p-[2%] gap-10 rounded-md text-[#0e0c1b]'>
          <h2 className='text-[#0e0c1b] text-[20px]'>Connections Grafiği</h2>
          <Line data={chartData2} options={options2} />
        </div>

        <div className='flex flex-col w-[90%] bg-white p-[2%] gap-10 rounded-md text-[#0e0c1b]'>
          <h2 className='text-[#0e0c1b] text-[20px]'>Opcounters Grafiği</h2>
          <Line data={opChartData} options={options2} />
        </div>
      </div>

      <div className='flex flex-col items-center justify-start w-[24%] gap-2 mt-10'>
        <div className='flex flex-col items-start justify-start w-[85%] p-[6%] font-monserrat bg-[#0e0c1b] text-white'>
          <span className='text-[25px] font-medium'>20</span>
          <p className='text-[18px] font-medium'>Sayfa</p>
        </div>
        <div className='flex flex-col items-start justify-start w-[85%] p-[6%] font-monserrat bg-[#0e0c1b] text-white'>
          <span className='text-[25px] font-medium'>80</span>
          <p className='text-[18px] font-medium'>Blog</p>
        </div>
        <div className='flex flex-col items-start justify-start w-[85%] p-[6%] font-monserrat bg-[#0e0c1b] text-white'>
          <span className='text-[25px] font-medium'>6</span>
          <p className='text-[18px] font-medium'>Kullanıcı</p>
        </div>
      </div>
      </div>

      {/* Yeni metric ekleme formu */}
      <div className='my-5 bg-[#0e0c1b] text-white p-4 rounded'>
        <h2 className='text-lg font-semibold mb-2'>Yeni Metric Ekle / Var Olanı Güncelle</h2>
        <form onSubmit={handleAddMetric} className='flex gap-4 items-center'>
          <div>
            <label>Metric Name:</label>
            <input 
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className='border px-2 py-1'
            />
          </div>
          <div>
            <label>Timestamp:</label>
            <input 
              type="datetime-local"
              value={newTimestamp}
              onChange={(e) => setNewTimestamp(e.target.value)}
              className='border px-2 py-1'
            />
          </div>
          <div>
            <label>Value:</label>
            <input 
              type="number"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              className='border px-2 py-1'
            />
          </div>
          <button type='submit' className='bg-[#6b78ad] text-white px-3 py-1 rounded'>Ekle/Upsert</button>
        </form>
        {message && <p className='mt-2 text-green-700'>{message}</p>}
      </div>
    </div>
  );
};

export default Dashboard;
