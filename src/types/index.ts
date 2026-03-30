// 数据类型定义

export interface Event {
  id: string;
  事件名称: string;
  事件类型: '聚会' | '旅行' | '里程碑' | '会议';
  年份: number;
  日期?: string;
  地点?: string;
  参与家庭?: string[];
  描述?: string;
  标签?: string[];
  AI摘要?: string;
}

export interface Place {
  id: string;
  地点名称: string;
  省份区域: string;
  经纬度?: string;
 首次旅行年份: number;
  描述?: string;
  AI生成故事?: string;
  标签?: string[];
}

export interface Family {
  id: string;
  家庭名称: string;
  孩子姓名: string;
  家庭简介?: string;
  共同回忆摘要?: string;
}

export interface Person {
  id: string;
  姓名: string;
  所属家庭: string;
  角色: '孩子' | '家长';
}

export interface Meeting {
  id: string;
  活动名称: string;
  活动时间: string;
  参与家庭: string[];
  原始聊天记录?: string;
  AI整理纪要?: string;
  决策摘要?: string;
  分工清单?: string;
  待办事项?: string;
  状态: '筹备中' | '已完成';
}

export interface Media {
  id: string;
  拍摄日期?: string;
  关联事件?: string;
  关联地点?: string;
  描述说明?: string;
  精选标记: boolean;
}
