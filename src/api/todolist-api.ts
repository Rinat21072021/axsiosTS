import axios from "axios";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.1/',
	withCredentials: true,
	headers: {
		'API-KEY': 'ff93b3ea-e4dd-4fd8-99af-ef77ec15da18'
	}
})
export const TodolistApi = {
	getTodos() {
		return instance.get<TodoType[]>(`todo-lists`)
	},
	createTodo(title: string) {
		return instance.post<CommonResponseType<{item: TodoType}>>('todo-lists', {title})
	},
	deleteTodo(todolistId: string) {
		return instance.delete<CommonResponseType>(`todo-lists/${todolistId}`)
	},
	updateTodoTitle(todolistId: string, title: string) {
		return instance.put<CommonResponseType>(`todo-lists/${todolistId}`, {title})
	}
}
export type TodoType = {
	addedDate: string
	id: string
	order: number
	title: string
}
export type CommonResponseType<T={}> = {
	data: T
	fieldsErrors: string[]
	messages: string[]
	resultCode: number
}
// export type CreateTodoType = {
// использовал джинерики export type CommonResponseType<T>
// 	data: {
// 		item: TodoType
// 	}
// 	fieldsErrors: string[]
// 	messages: string[]
// 	resultCode: number
// }
// export type RemoveTodoType = {
// 	data: {}
// 	fieldsErrors: string[]
// 	messages: string[]
// 	resultCode: number
// }
