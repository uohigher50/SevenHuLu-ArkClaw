import '../styles/global.css';

interface TravelPlace {
  name: string;
  region: string;
  year: number;
  description: string;
}

const places: TravelPlace[] = [
  { name: '内蒙', region: '内蒙古', year: 2020, description: '第一次长途集体自驾游，呼伦贝尔大草原' },
  { name: '甘肃', region: '甘肃', year: 2022, description: '青海甘肃大环线，张掖丹霞、莫高窟' },
  { name: '陕西', region: '陕西', year: 2023, description: '西安古城壶口瀑布，秦岭避暑' },
  { name: '广西', region: '广西', year: 2024, description: '阳朔漓江，涠洲岛看海' },
  { name: '新疆', region: '新疆', year: 2026, description: '中考毕业旅行，即将出发' },
];

export default function Map() {
  return (
    <div className="container">
      <h1>足迹 | 旅行地图</h1>
      <p className="text-secondary mb">
        我们一起走过的地方，每一站都有故事
      </p>

      <div className="grid mt">
        {places.map(place => (
          <div key={place.name} className="card">
            <h3>{place.name}</h3>
            <p className="text-secondary">
              {place.region} · {place.year}
            </p>
            <p className="mt">{place.description}</p>
          </div>
        ))}
      </div>

      {/* 后续可添加交互式中国地图，点击地点弹详情 */}
    </div>
  );
}
