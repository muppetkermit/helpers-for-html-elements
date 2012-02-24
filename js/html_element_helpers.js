/**
 * @author Yıldıray Mutlu
 */

		
HTMLInputElement.prototype.backspace = function(){
	var pp = this.selectionStart,d=(this.selectionEnd - this.selectionStart==0?-1: 0);
	this.value = this.value.substring(0,this.selectionStart + d)+this.value.substring(this.selectionEnd,this.value.length);
	if(this.setSelectionRange){
		this.focus();this.setSelectionRange(pp+d,pp+d);
	}
}
HTMLInputElement.prototype.space = function(){
	this.typeText(" ");
}
HTMLInputElement.prototype.typeText = function(s){
	var pp = this.selectionStart;
	this.value = this.value.substring(0,this.selectionStart)+s+this.value.substring(this.selectionEnd,this.value.length);
	if(this.setSelectionRange){
		this.focus();this.setSelectionRange(pp+1,pp+1);
	}
}
		