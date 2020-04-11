import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})
export class MethodsDefault {
    header = new HttpHeaders({ "content-type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` });
    constructor(public http: HttpClient) { }

    /* Method get Default */
    methodGet(url: string, params: any = "", token: boolean) {
        if (token) {
            let header = new HttpHeaders({ "content-type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` });
            if (params != "") {
                return this.http.get(url + "/" + params, {
                    responseType: "json", headers: header
                });
                // return this.cache.loadFromDelayedObservable(url, request, 'agnusChat', 60 * 60, delayType);
            } else {
                return this.http.get(url, { responseType: "json", headers: header });
                //  return this.cache.loadFromDelayedObservable(url, request, 'agnusChat', 60 * 60, delayType);
            }
        } else {
            let header = new HttpHeaders({ "content-type": "application/json" });
            if (params != "") {
                return this.http.get(url + "/" + params, {
                    responseType: "json"
                });
            } else {
                return this.http.get(url, { responseType: "json", headers: header });
            }
        }
    }
    /* Method default post */
    methodPost(url: string, body: any, params: any = "", token: boolean) {
        if (token == true) {
            let header = new HttpHeaders({ "content-type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` });
            if (params != "") {
                return this.http.post(url + "/" + params, body, {
                    responseType: "json", headers: header
                });
            } else {
                return this.http.post(url, body, { responseType: "json", headers: header });
            }
        } else {
            let header = new HttpHeaders({ "content-type": "application/json" });

            if (params != "") {
                return this.http.post(url + "/" + params, body, {
                    responseType: "json",
                    headers: header
                });
            } else {
                return this.http.post(url, body, { responseType: "json", headers: header });
            }
        }
    }
    /* Method default put */
    methodPut(url: string, body: any, params: any = "", token: boolean) {
        if (params != "") {
            return this.http.put(url + "/" + params, body, {
                responseType: "json", headers: this.header
            });
        }
    }
    /* Method default delete */
    methodDelete(url: string, params: any = "", token: boolean) {
        if (params != "") {
            return this.http.delete(url + "/" + params, {
                responseType: "json", headers: this.header
            });
        }
    }

}