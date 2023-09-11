export interface postState {
    posts:Posts[]
}



export interface Posts{
    userId: string,
    it:string,
    title: string,
    body:string
}