/**
 * @author Yıldıray Mutlu
 */

		
HTMLInputElement.prototype.backspace = function(){
	var pp = this.selectionStart,d=(this.selectionEnd - this.selectionStart==0?-1: 0);
	this.value = this.value.substring(0,this.selectionStart + d)+this.value.substring(this.selectionEnd,this.value.length);
	if(this.setSelectionRange){
		this.focus();this.setSelectionRange(pp+d,pp+d);
	}else if (this.createTextRange) {
		var range = this.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pp+d);
		range.moveStart('character', pp+d);
		range.select();
	}
}
HTMLInputElement.prototype.space = function(){
	var pp = this.selectionStart;
	this.value = this.value.substring(0,this.selectionStart)+" "+this.value.substring(this.selectionEnd,this.value.length);
	if(this.setSelectionRange){
		this.focus();this.setSelectionRange(pp+1,pp+1);
	}else if (this.createTextRange) {
		var range = this.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pp+1);
		range.moveStart('character', pp+1);
		range.select();
	}
}
HTMLInputElement.prototype.typeText = function(s){
	var pp = this.selectionStart;
	this.value = this.value.substring(0,this.selectionStart)+s+this.value.substring(this.selectionEnd,this.value.length);
	if(this.setSelectionRange){
		this.focus();this.setSelectionRange(pp+1,pp+1);
	}else if (this.createTextRange) {
		var range = this.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pp+1);
		range.moveStart('character', pp+1);
		range.select();
	}
}
		