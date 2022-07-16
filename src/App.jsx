import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Luís Netto"
        content="xDxDxD"
      />
      <Post 
        author="Luís teste"
        content="xDxDxD teste"
      />
    </div>
  );
}
