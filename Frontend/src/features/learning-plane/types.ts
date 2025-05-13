export type Resource = {
    id: string;
    title: string;
    url: string;
    type: 'video' | 'document' | 'link';
  };
  
  export type Topic = {
    id: string;
    title: string;
    completed: boolean;
  };
  
  export interface LearningPlanUser {
    id: string;
    name: string;
    username: string;
    profilePicture?: string;
  }
  
  export type LearningPlan = {
    id: string;
    title: string;
    description: string;
    subject: 'English' | 'Maths' | 'Science' | 'Technology';
    topics: Topic[];
    resources: Resource[];
    completionPercentage: number;
    estimatedDays: number;
    followers: number;
    createdAt: string;
    user: {
      id: string;
      name: string;
      username: string;
      profilePicture?: string;
    };
    following?: boolean;
  }; 