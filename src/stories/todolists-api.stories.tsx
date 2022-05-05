import React, {useEffect, useState} from 'react'
import {TodolistApi} from "../api/todolist-api";

export default {
	title: 'API'
}


export const GetTodolists = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		TodolistApi.getTodos()
			.then((res) => {
				setState(res.data)
			})
	}, [])

	return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
	const [state, setState] = useState<any>(null)
	const title = 'warLAMOV'
	useEffect(() => {
		TodolistApi.createTodo(title)
			.then((res) => {
				setState(res.data)
			})
	}, [])

	return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
	const [state, setState] = useState<any>(null)
	const todolistId = 'fd45da58-59fe-4cc5-aa35-9e58912e09fa'
	useEffect(() => {
		TodolistApi.deleteTodo(todolistId)
			.then((res) => {
				setState(res.data)
			})
	}, [])

	return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
	const [state, setState] = useState<any>(null)
	const todolistId = '6815c2a3-794a-4328-ba22-c8ce6f5f51bf'
	const title = 'update'
	useEffect(() => {
		debugger
		TodolistApi.updateTodoTitle(todolistId,title)
			.then((res) => {
				setState(res.data)
			})
	}, [])

	return <div> {JSON.stringify(state)}</div>
}
