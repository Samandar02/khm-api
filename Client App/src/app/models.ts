export interface Novetly{
    id: number
    title: string
    body: string
    img:File
    createdAt:Date
    viewed: number
    tags?:string
}
export interface NovetlyModel{
    id: number
    title: string
    body: string
    imgUrl:string
    createdAt:Date
    viewed: number
    tags?:string
}
export class NovetlyModel{
    public static impilementEmptyNovetly:NovetlyModel = 
    {
        id:0,
        body:'',
        createdAt:new Date(),
        imgUrl:'',
        title:'',
        viewed:0,
        tags:''
    }
}
export interface Carusel{
    path:string
}