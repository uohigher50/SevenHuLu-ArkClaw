import { useState } from 'react';
import '../styles/global.css';

type Stage = 'prep' | 'during' | 'post';

export default function Xinjiang2026() {
  const [stage, setStage] = useState<Stage>('prep');

  return (
    <div className="container">
      <h1>毕业季 | 新疆 2026</h1>
      <p className="text-secondary mb">
        中考毕业，七家共同旅行，为九年初中生涯画上圆满句号
      </p>

      {/* 阶段切换 */}
      <div className="mb mt" style={{ display: 'flex', gap: '1rem' }}>
        <button
          className={stage === 'prep' ? 'btn' : 'btn btn-outline'}
          onClick={() => setStage('prep')}
        >
          行前筹备
        </button>
        <button
          className={stage === 'during' ? 'btn' : 'btn btn-outline'}
          onClick={() => setStage('during')}
        >
          旅行中
        </button>
        <button
          className={stage === 'post' ? 'btn' : 'btn btn-outline'}
          onClick={() => setStage('post')}
        >
          旅行后
        </button>
      </div>

      {/* 行前筹备 */}
      {stage === 'prep' && (
        <div className="mt">
          <div className="card">
            <h3>📋 行前筹备</h3>
            <p className="text-secondary">
              这里会存放行程方案、会议纪要、分工安排、准备清单
            </p>
            <div className="mt">
              <p>目前筹备进行中，内容逐步补充...</p>
            </div>
          </div>
        </div>
      )}

      {/* 旅行中 */}
      {stage === 'during' && (
        <div className="mt">
          <div className="card">
            <h3>🚶 旅行进行中</h3>
            <p className="text-secondary">
              每日行程和日报会在这里更新
            </p>
            <p className="mt text-secondary">
              旅行开始后，每日更新...
            </p>
          </div>
        </div>
      )}

      {/* 旅行后 */}
      {stage === 'post' && (
        <div className="mt">
          <div className="card">
            <h3>🎉 旅行完成</h3>
            <p className="text-secondary">
              总结纪念文、精选相册、专题总结会放在这里
            </p>
            <p className="mt text-secondary">
              旅行完成后生成...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
