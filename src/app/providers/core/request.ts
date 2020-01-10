import { Injectable,OnInit } from '@angular/core';
import { url } from '../../config/config';

@Injectable()

export class RequestProvider implements OnInit
{
  jwt:string = (!sessionStorage.getItem("token")) ? null : sessionStorage.getItem("token") ;
  headers:any = null;
  constructor() { 
    this.checkForJwt();
  }

  ngOnInit() {

  }

  getUserData = () => {
    if(sessionStorage.getItem("userdata")) {
      // this.getRequest('accounts/auth/' + JSON.parse(sessionStorage.getItem("userdata")).authid)
      // .then((res) => {
      //   // sessionStorage.setItem("userdata", JSON.stringify(res.response));
      // })
      // .catch((err) => {
      //   sessionStorage.clear();
      // });
    }
  }

  checkForJwt = async ():Promise<any> =>
  {
    if(!sessionStorage.getItem('token'))
    {
      return await new Promise((resolve, reject) => {
        this.getRequest("authorise")
        .then((res:any) => {
          sessionStorage.setItem("token", res.response.jwt);
          this.jwt = sessionStorage.getItem("token");
          resolve(res.response.jwt);
        })
        .catch((err:any) => reject(err))
      })
    }
  }

  getRequest = (routes:string) => 
  {
    try
    {
    // Default options are marked with *
      return fetch(url + routes, {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        headers: {
          "Authorization": "JWT " + this.jwt
        },
        credentials: 'same-origin'
      })
      .then(response => response.json()) // parses response to JSON
      .catch(error => error);
    }
    catch(ex)
    {
      console.info(ex);
      return ex;
    }
  }

  postRequest = (routes: string, data) => 
  {
    try
    {
      return fetch(url + routes, {
          method: "POST",
          headers: {
            "cache-control": "no-cache",
            "Accept-language": "en",
            "Authorization": "JWT " + this.jwt
          },
          mode: "cors",
          cache: "no-cache", 
          credentials: "same-origin", 
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: data, // body data type must match "Content-Type" header
      })
      .then(response => response.json()) // parses response to JSON
      .catch(error => error);
    }
    catch(ex)
    {
      return ex;
    }
  };

  transformRequest(obj)
  {
      var $res = [];
      for(var key in obj)
      {
          $res.push(key + '=' + encodeURIComponent(obj[key]));
      }
      return $res.join('&');
  }

  updateRequest = (routes: string, data) => 
  {
    try
    {
      data = this.transformRequest(data);
      return fetch(url + routes, {
          method: "PUT",
          headers: {
            "Accept": "application/json",
            "Accept-language": "en",
            "Authorization": "JWT " + this.jwt
          },
          mode: "cors",
          cache: "no-cache", 
          credentials: "same-origin", 
          body: data, // body data type must match "Content-Type" header
      })
      .then(response => response.json()) // parses response to JSON
      .catch(error => error);
    }
    catch(ex)
    {
      return ex;
    }
  }

  deleteRequest = (routes: string) => 
  {
    try
    {
      return fetch(url + routes, {
        method: 'delete',
        headers: {
          "cache-control": "no-cache",
          "Accept-language": "en",
          "Authorization": "JWT " + this.jwt
        },
      })
      .then(response => response.json()) // parses response to JSON
      .catch(error => error);
    }
    catch(ex)
    {
      return ex;
    }
  }
}
