import { Link } from 'react-router-dom';
import '../styles/global.css';

interface MeetingItem {
  name: string;
  date: string;
  status: 'preparing' | 'done';
  description: string;
}

const meetings: MeetingItem[] = [
  {
    name: '新疆旅行筹备会议',
    date: '2026-03',
    status: 'preparing',
    description: '新疆行程讨论、分工安排',
  },
];

export default function Meetings() {
  return (
    <div className="container">
      <h1>在路上 | 活动会议</h1>
      <p className="text-secondary mb">
        活动筹备、会议讨论、分工待办，都在这里
      </p>

      <div className="grid mt">
        {meetings.map(meeting => (
          <div key={meeting.name} className="card">
            <h3>{meeting.name}</h3>
            <p className="text-secondary">
              {meeting.date} · {meeting.status === 'preparing' ? '筹备中' : '已完成'}
            </p>
            <p className="mt">{meeting.description}</p>
            <Link to={`/meetings/${meeting.name}`} className="btn mt" style={{ display: 'inline-block' }}>
              查看详情
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
