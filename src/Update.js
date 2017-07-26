class Update{
	constructor(){
		this.width='auto';
		this.height=20;
	}
	create(){
		this.element=document.createElement('button');
		this.element.style.width=this.width;
		this.element.style.height=this.height;
		//this.element.style.float='right';
		this.element.innerHTML="Update";
		this.element.setAttribute("name","update");
		this.element.setAttribute("value","update");
	}
}
export default Update;