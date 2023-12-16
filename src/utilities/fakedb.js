//CRUD Operation
//1.Creat 2.Read 3.Update 4.Delete
//লোকাল স্টোরেজের প্রোডাক্ট এড করার শর্ত:
//1st শর্ত: লোকাল স্টোরেজ একদম ফাঁকা কিছুই নেই এখন, key/shopping-cart এড করতে পারি|
//2nd শর্ত লোকাল স্টোরি যে কিছু প্রোডাক্ট কি আগে থেকেই আছে তাহলে,
//(a) কোন প্রোডাক্ট এড করলে সেটা আগে থেকেই থাকতে পারে মানে সেম প্রোডাক্ট বারবার এড করতেছি
//(b) অথবা নতুন আরেকটা প্রোডাক্ট এড হতে পারে মানে অন্য প্রোডাক্ট আছে সাথে আর একটা নতুন এড করতেছি আর কি
//localStorage a set korbo shopping-cart name mane key nam hobe shopping-cart

//Create Section
const addTodb(id){
    //এখন লোকাল স্টোরেজে প্রোডাক্ট আছে কি নাই কিভাবে বুঝব, এই জন্য গেট এলিমেন্ট এর সার্চ দিব শপিং কার্ড লিখে (localStorage.getItem(shopping-cart)) যদি থাকে তাহলে ভ্যালু দিবে না থাকলে নাল দিবে..যদি নাল দেয় তাহলে বুঝবো লোকাল স্টোরেজের কোন প্রোডাক্ট নাই তাই আমরা লোকাল স্টোরেজ শপিং কার্ড সেট করব
    const exist = getDb();
    const shopping_cart = {};
    //লোকাল storage যখন empty তখন প্রথম শর্ত এপ্লাই হবে অর্থাৎ লোকাল স্টোরেজ আমাকে null ভ্যালু দিবে
    if(!exist){
        shopping_cart[id] = 1;
    }
    else{
        const shopping_cart = JSON.parse(exist);
        if(shopping_cart[id]){
            const new_cart = shopping_cart[id] + 1;
            shopping_cart[id] = new_cart;
        }
        else{
            shopping_cart[id] = 1;
        }
        
    }
    updateDb(shopping_cart);
}

//Update Section

const updateDb = (cart) =>{
    localStorage.setItem('shopping_cart',JSON.stringify(cart))
}
//Read Section
const getDb = () => localStorage.getItem(shopping-cart);

//Delete Section
//ডিলিট করার শর্ত দুইটা
//প্রথম শর্ত আমার লোকাল স্টোরেজে কিছুই নেই তাহলে আর কি ডিলিট করব?
//দ্বিতীয় শর্ত ডিফারেন্ট টাইপ অফ ডাটা আছে
const removeFromDb = (id){
    const exist = getDb();
    if(!exist){return}
    else{
        const shopping_cart = JSON.parse(exist);
        delete shopping_cart[id];
        updateDb(shopping_cart);
    }
}

//সম্পূর্ণ লোকাল স্টোরেজ ডিলিট করতে হলে
const clearCart = ()=>{
    localStorage.removeItem('shopping_cart');
}

//পাঠানোর সময় parse করে পাঠাইছি এই আর কি
const getStoreCart = ()=>{
    const exist = getDb();
    return exist ? JSON.parse(exist): {};
}