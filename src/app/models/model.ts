

export interface appConfig {
    walkthrough: boolean,
    login: boolean,
    access: string,
    fcm: string,
};

export interface fileModel {
    name: string,
    size: string,
    path: string,
    data: any
}

export interface fcmModel {
    uid: string,
    email: string,
    device: Array<any>
}

export interface authModel {
    email: string,
    number: string,
    password: string
}

export interface userProfile {
    email: string,
    displayName: string,
    phoneNumber: String,
    photoURL: string,
    providerId: string,
    uid: string
};



export interface accountsInfoModel {
    firstname: string,
    lastname: string,
    middlename: string,
    uid: string,
    email: string,
    sex: string,
    mobile: string,
    address: string,
    image: string,
    fcm: any,
    dateofbirth: any,
    username: string,
};

export interface shareModel {
    message: string,
    subject: string,
    image: string,
    url: string,
}



export interface transactionModel {
    reference_no: string,
    type: string,
    amount: number,
    status: string,
    transactionBy: string,
    transactionInfo: {
        accountNumber: string,
        gateway: string,
    };
}

export interface Signup {
    _id: number,
    firstname:string,
    lastname: string,
    phone: number,
    email: string,
    password: string,
};

export interface Login {
    _id: number,
    token:string,
    verified: string,
    type:string,
    email: string,
    password: string,
};

export interface VendorSign {
    _id: number,
    firstname:string,
    lastname: string,
    username: string,
    shop_name: string,
    address: string,
    phone: number,
    email: string,
    password: string,
};

export interface Product {
    vendor_id: number,
    photo:File,
    product_name: string,
    quantity: number,
    color: string,
    sku: string,
    price: number,
    previous_price: number,
   
};
export const states = []