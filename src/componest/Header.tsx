import { CreateTodo } from "./CreateTodo"
import { TodoTitle } from "../types";
interface HeaderProps {
    onAddTodo: (todo: TodoTitle) => void;
  }
export const Header :React.FC<HeaderProps> = ({ onAddTodo }) => {
    return (
        <header className="header">
            <h1>todo
                <img
                style={{ width: '60px',height:'auto' }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/768px-Typescript.svg.png" alt="" />

            </h1>
            <CreateTodo saveTodo={onAddTodo} />
            
        </header>
    )
}