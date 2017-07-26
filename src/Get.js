class Get{
	constructor(){
		this.width="auto";
		this.height=100;
	}
	create(){
		this.element=document.createElement("button");
		this.element.style.width=this.width;
		this.element.style.height=this.height;
		this.element.innerHTML="GET";
		this.element.setAttribute("name","get");
		this.element.setAttribute("value","Get");
	}
}
export default Get;