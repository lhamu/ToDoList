import * as httpUtil from './httpUtil';
class Submit{
	constructor(){
		this.width=100;
		this.height=100;
	}
	create(){
		this.element=document.createElement('input');
		//this.element.style.width=this.width;
		//this.element.style.height=this.height;
		this.element.setAttribute("type","submit");
		this.element.setAttribute("name","button");
		this.element.setAttribute("value","Submit");		
	}
}
export default Submit;