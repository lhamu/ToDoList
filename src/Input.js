class Input{
	constructor(type, name, title, description){
		this.height=100;
		this.width=500;
		this.type=type;
		this.name=name;
		this.title=title;
		this.element;

	}
	create(){
		this.element=document.createElement('input');
		this.element.style.width=this.width+'px';
		this.element.style.height=this.height+'px';
		this.element.setAttribute("type","text");
		this.element.setAttribute("name","to-do");
	}

}
export default Input;