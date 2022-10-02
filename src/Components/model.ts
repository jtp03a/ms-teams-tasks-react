export interface Task {
  Title: string;
  Description: string;
  Status: string;
}

export interface Bucket {
  Title: string;
  Tasks: Task[];
}