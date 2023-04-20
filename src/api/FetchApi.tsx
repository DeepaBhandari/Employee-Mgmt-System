import { useState, useEffect } from 'react';

interface DataItem {
  id: number;
  name: string;
  description: string;
}

export default function FetchApi(): JSX.Element {
  const [data, setData] = useState<DataItem[]>([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch('https:example.com/api/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
