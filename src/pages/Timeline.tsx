import '../styles/global.css';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  type: 'milestone' | 'trip';
}

const events: TimelineEvent[] = [
  { year: 2017, title: '幼儿园相识', description: '七家孩子在幼儿园成为同班同学，九年缘分从此开始', type: 'milestone' },
  { year: 2018, title: '开始一起聚会', description: '家庭之间慢慢熟悉，开始定期聚会', type: 'milestone' },
  { year: 2020, title: '内蒙自驾游', description: '第一次长途集体自驾游，呼伦贝尔大草原留下美好回忆', type: 'trip' },
  { year: 2022, title: '青海甘肃大环线', description: '张掖丹霞，莫高窟，我们一路向西', type: 'trip' },
  { year: 2023, title: '陕西秦岭避暑', description: '西安古城看历史，秦岭山里避暑休闲', type: 'trip' },
  { year: 2024, title: '广西涠洲岛看海', description: '阳朔漓江漂流，涠洲岛海边度假', type: 'trip' },
  { year: 2026, title: '中考毕业', description: '九年初中生涯结束，孩子们毕业，一段旅程圆满', type: 'milestone' },
  { year: 2026, title: '新疆毕业旅行', description: '七家一起出发，去看更大的世界', type: 'trip' },
];

export default function Timeline() {
  return (
    <div className="container">
      <h1>时光 | 成长时间轴</h1>
      <p className="text-secondary mb">
        从 2017 到 2026，我们一步一步走来
      </p>

      <div className="mt" style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
        {/* 中心线 */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '3px',
            backgroundColor: 'var(--color-border)',
            top: 0,
            bottom: 0,
          }}
        />

        {events.map((event, idx) => (
          <div
            key={event.year}
            className="mb"
            style={{
              display: 'flex',
              position: 'relative',
              marginBottom: '3rem',
            }}
          >
            {/* 年份圆点 */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: event.type === 'milestone' ? 'var(--color-accent)' : '#94a3b8',
                zIndex: 1,
              }}
            />

            {/* 内容卡片 - 左右交错 */}
            <div
              style={{
                width: 'calc(50% - 30px)',
                ...(idx % 2 === 0
                  ? { marginRight: 'auto' }
                  : { marginLeft: 'auto' }),
              }}
            >
              <div className="card">
                <h3>
                  {event.year} — {event.title}
                </h3>
                <p className="text-secondary">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
