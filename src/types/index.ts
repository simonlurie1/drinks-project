export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface PostsState {
  selectedPostId: number | null;
}

export interface TODO {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
