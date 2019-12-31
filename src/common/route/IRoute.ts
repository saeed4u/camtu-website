import {FC, Component} from 'react'

export interface IRoute {
    path: string
    component: FC | Component
    title: string
}