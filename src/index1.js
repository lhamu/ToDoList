import axios from 'axios';
import * as httpUtil from './httpUtil';
import Form from './Form'
import Input from './Input'
import Submit from './Submit'
import Remove from './Remove'
import Update from './Update'
// callback hell
// request('something', (response) => {
//   request(responst.data, (response) => {
//     request(responst.data, (response) => {
//       request(responst.data, (response) => {
//         request(responst.data, (response) => {
//           request(responst.data, (response) => {
//             request(responst.data, (response) => {
//               request(responst.data, (response) => {
//                 request(responst.data, (response) => {

//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// })

// // Promise = Things to study
// request('something').then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).then(() => {
//   //do something;
// }).catch(err => {

// })

// const BASE_URL = 'https://todo-simple-api.herokuapp.com';

// const TODO_URL = `${BASE_URL}/todos`;

// httpUtil.get(TODO_URL).then(response => {

//   response.data.data.forEach((todo) => {
//     let div = document.createElement('div');
//     div.innerHTML = todo.title;
//     document.getElementsByTagName('body')[0].appendChild(div);
//   })
// })

class Index{

	constructor(e){
		this.element=document.getElementById(e);
		let form=new Form();
		form.create();

		let input=new Input();
		input.create();

		let submit=new Submit();
		submit.create();


		// let remove=new Remove();
		// remove.create();

		this.element.appendChild(form.element);
		form.append(input.element);
		form.append(submit.element);

		// console.log(input.element.value);

		const BASE_URL = 'https://todo-simple-api.herokuapp.com';

		const TODO_URL = `${BASE_URL}/todos?page=1&page_size=2000`;

		form.element.addEventListener("submit", (e) => {
			console.log(this);
			e.preventDefault();
			let data = {

				"title": input.element.value,
				"description":"Mudita"

			}
			this.postData(TODO_URL, data);

		})

		// .element.addEventListener("", (e)=>{
		// 	e.preventDefault();

		// 	this.removeData(TODO_URL)
		// 	}
			

		// })

		httpUtil.get(TODO_URL).then(response => {
  		response.data.data.forEach((todo) => {
  			if(todo.description=="Mudita"){
  			let remove=new Remove();
				remove.create();
				let update=new Update();
				update.create();
    		let div = document.createElement('div');
    		let container=document.createElement('div');
    // 		div.style.width='auto';
				// div.style.height='auto';
				// div.style.border="solid 1px black";
    		div.setAttribute("id","div"+todo.id);
    		container.innerHTML = todo.title;
    		container.setAttribute("id","container"+todo.id);
    		div.appendChild(container.element);
    		div.appendChild(remove.element);
    		div.appendChild(update.element);
    		update.element.addEventListener('click', (e)=>{
    			let column=new Input();
    			column.create();
    			div.appendChild(column.element);
					let contribute=new Submit();
					contribute.create();
					div.appendChild(contribute.element);
					contribute.element.addEventListener('click', (e)=>{
						let data={
							"title":column.element.value,
							"description":"Mudita"
						}
						this.updateData(TODO_URL, todo.id, data);

					})
    		})
    		remove.element.addEventListener('click', (e) => {
    			this.removeData(TODO_URL, todo.id);
    		//div.setAttribute("id", "div-$(todo.id)")
    		})
    		document.getElementsByTagName('body')[0].appendChild(div);
    	}
  		})
		})
	}
	postData(TODO_URL, data) {
		httpUtil.post(TODO_URL, data).then(response => {	
			console.log(response);
			let remove=new Remove();
			remove.create();
			let update=new Update();
			update.create();
			var div=document.createElement('div');
			var container=document.createElement('div');
			div.setAttribute("id","div"+response.data.data.id);
			container.innerHTML=response.data.data.title;
			container.setAttribute("id","container"+response.data.data.id);
			div.appendChild(container.element);
			div.appendChild(remove.element);
			div.appendChild(update.element);
    		update.element.addEventListener('click', (e)=>{
    			update.element.style.display='none';
    			let column=new Input();
    			column.create();
    			container.appendChild(column.element);
					let contribute=new Submit();
					contribute.create();
					div.appendChild(contribute.element);
					contribute.element.addEventListener('click', (e)=>{
						let data={
							"title":column.element.value,
							"description":"Mudita"
						}

						this.updateData(TODO_URL, response.data.data.id, data);

					})
    	})
			remove.element.addEventListener('click', (e) => {
    			this.removeData(TODO_URL, response.data.data.id);
    		//div.setAttribute("id", "div-$(todo.id)")
    		})
			let x=document.getElementsByTagName('body')[0].appendChild(div);
		});
	}

	removeData(TODO_URL, id){
	
		httpUtil.remove('https://todo-simple-api.herokuapp.com/todos/'+id ).then(response=>{
			console.log(response);
			document.getElementsByTagName('body')[0].removeChild(document.getElementById("div"+id));
		});
	}

	updateData(TODO_URL, id, data){
		httpUtil.put('https://todo-simple-api.herokuapp.com/todos/'+id, data).then(response=>{
			console.log(response);
			document.getElementsByTagName('body')[0].appendChild(document.getElementById("div"+id));
			document.getElementById("container"+id).innerHTML=data.title;

		})
	}
}
let index=new Index("todo");