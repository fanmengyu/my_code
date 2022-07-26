//Ajax返回的是一个promise对象
//1.创建对象
//2.初始化，设置请求方法和url
//3.事件绑定 处理服务端返回的结果
//4.发送

function ajax(url) {
	const p = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onreadystatechange = function () {
			if(xhr.readyState === 4) {
				if(xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				} else if (xhr.status === 404) {
					reject(new Error('404 not found'));
				}
			}
		}
		xhr.send(null);
	})
	return p;
}
