import { Link, useLocation } from 'react-router-dom';
import '../styles/global.css';

export default function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', name: '首页' },
    { path: '/timeline', name: '成长时间轴' },
    { path: '/map', name: '旅行地图' },
    { path: '/xinjiang-2026', name: '新疆 2026' },
    { path: '/families', name: '七家家庭' },
    { path: '/meetings', name: '活动会议' },
    { path: '/qa', name: 'AI 记忆助手' },
  ];
  
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-brand">七家同行</Link>
        <div className="nav-links">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
