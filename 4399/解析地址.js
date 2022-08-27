function parseUrlParam(url) { 
    decodeURI(url);
    let queryInfo = '';
    const urlObject = {};
    if (url.indexOf('?') === url.lastIndexOf('?')) {
        //？后的是参数
        const arr = url.split('?');
        queryInfo = arr[arr.length - 1];
    } else {
        const index = url.indexOf('?');
        queryInfo = url.substr(index + 1);
    }
   
    queryInfo = queryInfo.split('&');
    queryInfo = queryInfo.map(item => item.split('='));
    
    queryInfo.forEach(item => urlObject[item[0]] = decodeURI(item[1]));
    if(urlObject.enabled) urlObject.enabled = true
    return urlObject;
} 
let url = 'http://www.4399.com/?user=candidate&id=43&id=99&city=%E5%B9%BF%E5%B7%9E&enabled'; 
console.log(parseUrlParam(url));
console.log(decodeURI('%E5%B9%BF%E5%B7%9E'))