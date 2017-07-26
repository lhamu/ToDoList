class Remove{
	constructor(){
		this.width='auto';
		this.height=20;
	}
	create(){
		this.element=document.createElement('button');
		this.element.style.width=this.width;
		this.element.style.height=this.height;
		//this.element.style.float='right';
		this.element.innerHTML="Remove";
		this.element.setAttribute("name","remove");
		this.element.setAttribute("value","remove");
	}
}
export default Remove;