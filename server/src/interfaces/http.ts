export interface APIResponse<T>{
    success : boolean,
    message : string ,
    data? : T
}

export function Responser<T>(success : boolean,message : string ,data? : T ) : APIResponse<T>{
    return {success, message,data}

}