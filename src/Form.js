class Form{
	create(){
		this.element=document.createElement('form');
		this.element.setAttribute("action", "");
		this.element.setAttribute("method","post");
		this.element.setAttribute("name", "myForm");
	}

	append(e){
		this.element.appendChild(e);
	};
}
export default Form;