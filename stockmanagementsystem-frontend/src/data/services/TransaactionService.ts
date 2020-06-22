import { getBaseUrl, JOSEPH_URL } from "../../configs/api";
import { Observable } from "rxjs";
import Axios from "axios-observable";
import { IIndexTransactionRequest, IUpsertTransactionRequest } from "../interfaces";

const baseUrl = getBaseUrl()

export const serviceIndexTransaction = (dataPayload: IIndexTransactionRequest) : Observable<any>=> {
    return Axios.post(
        baseUrl+JOSEPH_URL.TRANSACTION.INDEX,
        dataPayload
    )
}

export const serviceDeleteTransaction = (dataPayload:string) : Observable<any> => {
    return Axios.delete(
        baseUrl+JOSEPH_URL.TRANSACTION.DELETE+dataPayload
    )
}

export const serviceAddTransaction = (dataPayload:IUpsertTransactionRequest) : Observable<any> => {
    return Axios.post(
        baseUrl+JOSEPH_URL.TRANSACTION.ADD,
        dataPayload
    )
}

export const serviceEditTransaction = (dataPayload:IUpsertTransactionRequest) : Observable<any> => {
    return Axios.put(
        baseUrl+JOSEPH_URL.TRANSACTION.EDIT,
        dataPayload
    )
}

export const serviceDownloadPdfTransaction = (dataPayload: IIndexTransactionRequest) : Observable<any> => {
    return Axios.request({
        method:'post',
        url:baseUrl+JOSEPH_URL.TRANSACTION.DOWNLOAD_PDF,
        data: dataPayload,
        responseType:'blob'
    })
}