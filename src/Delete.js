class Remove{
	constructor(){
		this.width=100;
		this.height=100;
	}
	create(){
		this.element=document.createElement('button');
		this.element.style.width=this.width;
		this.element.style.height=this.height;
		this.element.setAttribute('type','button');
		this.element.setAttribute('name','delete');
		this.element.setAttribute('value','Delete');
	}
}
export default Remove;