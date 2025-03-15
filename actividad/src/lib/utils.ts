import { data } from "../stores/store";
export function del(id:any,d:any){
    let result = d.filter((e:any) => e.id!==id);
    data.set(result);
}
export function add(body:any,d:any){
    let result = [...d,body];
    data.set(result);
}
export function update(id:any,body:any,d:any){
    let i:any;
    d.forEach((e:any, index:any) => {
        if(e.id==id){
            body.id=e.id;
            i = index;
        }
    });
    d[i] = body;
    data.set(d);
}