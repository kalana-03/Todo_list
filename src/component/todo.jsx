import { Trash2 } from "lucide-react";

export default function Todo({todo, onToggle, onDelete}) {
    return(
        <div className = "flex items-center justify-between bg-accent-dark rounded-xl px-4 py-4 "> 
            <div className="flex items-center flex-1">
                <button onClick={() => onToggle(todo.id)}
                    className={`w-5 h-5 flex items-center justify-center rounded border mr-3
                    ${todo.completed
                    ? "bg-primary-light border-primary-light_gray"
                    : "border-neutral-600"}`
                }>
                    {todo.completed &&(
                        <span className = "text-primary-dark text-xs font-extrabold font-mono">
                            &#10003;
                        </span>
                    )} 
                </button>

                <span className = {`text-sm font-semibold px-2
                    ${todo.completed ? "text-neutral-600 line-through" :
                    "text-primary-light_gray"}`
                }>
                    {todo.text}
                </span>

            </div>
            
            <button onClick={() => onDelete(todo.id)}
                className="text-neutral-600 hover:text-red-500 transition-colors hover:scale-110">
                    <Trash2 className="w-5 h-5"/>
            </button>

        </div>
    );
}