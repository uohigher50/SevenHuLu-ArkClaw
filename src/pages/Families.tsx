import '../styles/global.css';

interface Family {
  name: string;
  childName: string;
  description: string;
  order: number;
}

const families: Family[] = [
  { order: 1, name: '一鸣家', childName: '一鸣', description: '大葫芦，七家之首' },
  { order: 2, name: '小虎家', childName: '小虎', description: '二葫芦' },
  { order: 3, name: '王子家', childName: '王子', description: '三葫芦' },
  { order: 4, name: '又又家', childName: '又又', description: '四葫芦' },
  { order: 5, name: '满满家', childName: '满满', description: '五葫芦' },
  { order: 6, name: 'RR家', childName: 'RR', description: '六葫芦' },
  { order: 7, name: '晨晨家', childName: '晨晨', description: '七葫芦' },
];

export default function Families() {
  return (
    <div className="container">
      <h1>我们 | 七家家庭</h1>
      <p className="text-secondary mb">
        从幼儿园同班到初中毕业，九个春秋，我们一直在一起
      </p>

      <div className="grid mt">
        {families.map(family => (
          <div key={family.name} className="card">
            <h3>
              {family.order}葫芦 · {family.name}
            </h3>
            <p className="text-secondary">
              孩子：{family.childName}
            </p>
            <p className="mt">{family.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
