import { create } from 'zustand'

type Task = {
    id: number,
    label: string,
    isDone: boolean,
}

const todos: Task[] = [
    {
        id: 1,
        label: 'Create a todo app',
        isDone: false,
    },
    {
        id: 2,
        label: 'Make a figma design',
        isDone: true,
    },
    {
        id: 3,
        label: 'Frontend tasks',
        isDone: false,
    },
    {
        id: 4,
        label: 'Backend tasks',
        isDone: false,
    },
]
const delay = (ms: number) => (new Promise(resolve => setTimeout(resolve, ms)))

type TodoState = {
    todos: Task[],
    filter: string,
    isLoading: boolean,
    hasError: boolean,
    fetch: () => void,
    addTodo: (todo: Task) => void,
    editTodo: (todo: Task) => void,
    toggleTodo: (todoId: number) => void,
    removeTodo: (todoId: number) => void,
    setFilter: (filter: string) => void,
}
const useTodosStore = create<TodoState>()((set) => ({
    todos: [],
    filter: 'all',
    isLoading: true,
    hasError: false,
    fetch: async () => {
        set({ isLoading: true })
        try {
            await delay(500)
            set(({
                todos: todos,
                isLoading: false,
            }))
        } catch (err) {
            set({ hasError: true, isLoading: false })
        }        
    },
    addTodo: async (todo: Task) => {
        set(state => ({
            todos: [
                ...state.todos,
                todo,
            ],
        }))
        // send to backend
    },
    editTodo: async (todo: Task) => {
        set(state => ({
            todos: state.todos.map(t => {
                return t.id == todo.id ? todo : t
            }),
        }))
        // send to backend
    },
    toggleTodo: async (todoId: number) => {
        set(state => ({
            todos: state.todos.map(todo => {
                return todo.id == todoId ? {
                    ...todo,
                    isDone: !todo.isDone,
                } : todo
            }),
        }))
        // send to backend
    },
    removeTodo: async (todoId: number) => {
        set(state => ({
            todos: state.todos.filter(todo => todo.id !== todoId),
        }))
        // send to backend
    },
    setFilter: (filter: string) => set({
        filter,
    }),
}))

export default useTodosStore