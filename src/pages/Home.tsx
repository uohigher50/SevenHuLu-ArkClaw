import { Link } from 'react-router-dom';
import gourdsImage from '../assets/gourds.jpg';
import '../styles/global.css';

export default function Home() {
  const recommendedStories = [
    {
      title: '2017 幼儿园相识',
      description: '九年缘分的起点',
      link: '/timeline#2017',
    },
    {
      title: '新疆 2026 毕业旅行',
      description: '中考毕业，全新起点',
      link: '/xinjiang-2026',
    },
    {
      title: '旅行地图看足迹',
      description: '从内蒙到新疆，我们走过的每一步',
      link: '/map',
    },
  ];

  return (
    <div className="container">
      <div className="text-center mt mb">
        <h1>七家同行 · 共同成长纪念馆</h1>
        <p className="text-secondary" style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
          从 2017 到 2026，再到未来<br />
          我们一起长大，一起远行
        </p>
        <div className="photo" style={{ maxWidth: '600px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden' }}>
          <img src={gourdsImage} alt="七颗葫芦" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <p className="text-secondary" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
          七个葫芦 → 七个孩子 → 七个家庭，完美寓意
        </p>
      </div>

      {/* 快捷导航 */}
      <div className="grid mt mb">
        <Link to="/timeline" className="card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
          <h3>🕒 成长时间轴</h3>
          <p className="text-secondary">按年份回看九年成长节点</p>
        </Link>
        <Link to="/map" className="card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
          <h3>🗺 旅行地图</h3>
          <p className="text-secondary">在地图上看我们去过的地方</p>
        </Link>
        <Link to="/xinjiang-2026" className="card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
          <h3>🎓 新疆 2026</h3>
          <p className="text-secondary">毕业旅行专题记录</p>
        </Link>
        <Link to="/families" className="card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
          <h3>👨‍👩‍👧‍👦 七家家庭</h3>
          <p className="text-secondary">从葫芦大娃到葫芦七娃</p>
        </Link>
        <Link to="/meetings" className="card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
          <h3>📋 活动会议</h3>
          <p className="text-secondary">筹备讨论决策在这里</p>
        </Link>
        <Link to="/qa" className="card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
          <h3>🤖 AI 记忆助手</h3>
          <p className="text-secondary">想问什么直接问</p>
        </Link>
      </div>

      {/* 推荐故事 */}
      {recommendedStories.length > 0 && (
        <div className="mt mb">
          <h2>推荐故事</h2>
          <div className="grid">
            {recommendedStories.map((story, idx) => (
              <Link
                key={idx}
                to={story.link}
                className="card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <h3>{story.title}</h3>
                <p className="text-secondary">{story.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <footer className="text-center text-secondary mt" style={{ padding: '3rem 0' }}>
        <p>照片会褪色，但记忆在这里永远新鲜</p>
      </footer>
    </div>
  );
}
