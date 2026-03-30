import { useState } from 'react';
import '../styles/global.css';

const suggestedQuestions = [
  '我们第一次一起旅游是哪里？',
  '一共去过哪些地方？',
  '哪次旅行全员到齐？',
  '新疆这次最终路线是什么？',
  '谁负责订酒店？',
  '哪年最值得纪念？',
];

export default function QA() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuestionClick = (q: string) => {
    setQuestion(q);
  };

  const handleSubmit = async () => {
    if (!question.trim()) return;
    
    setLoading(true);
    // 这里后续连接到 OpenClaw 回忆问答 Agent
    // 暂时占位，等待后端对接
    setTimeout(() => {
      setAnswer(`收到你的问题："${question}"\n\nAI 回答功能正在对接 OpenClaw Agent，很快就能用了...`);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="container">
      <h1>问答 | AI 记忆助手</h1>
      <p className="text-secondary mb">
        想问什么关于共同成长和旅行的问题，直接问我
      </p>

      <div className="card mt mb">
        <div>
          <textarea
            value={question}
            onChange={e => setQuestion(e.target.value)}
            placeholder="输入你的问题..."
            style={{
              width: '100%',
              minHeight: '100px',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid var(--color-border)',
              fontSize: '1rem',
              fontFamily: 'inherit',
            }}
          />
        </div>
        <button
          className="btn mt"
          onClick={handleSubmit}
          disabled={loading}
          style={{ width: '100%' }}
        >
          {loading ? '思考中...' : '提问'}
        </button>
      </div>

      {/* 推荐问题 */}
      <div className="mb">
        <p className="text-secondary mb">推荐问题：</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {suggestedQuestions.map(q => (
            <button
              key={q}
              className="btn btn-outline"
              onClick={() => handleQuestionClick(q)}
              style={{ padding: '6px 12px', fontSize: '0.9rem' }}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* 回答 */}
      {answer && (
        <div className="card mt">
          <h3>回答</h3>
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              fontFamily: 'inherit',
              backgroundColor: 'var(--color-bg)',
              padding: '1rem',
              borderRadius: '8px',
              lineHeight: '1.7',
            }}
          >
            {answer}
          </pre>
        </div>
      )}
    </div>
  );
}
