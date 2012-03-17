/**
 * @author Yıldıray Mutlu
 */

var YM = YM || {};


/**
 * @method backspace Lets you trigger backspace button in your input field.
 *
 */
HTMLInputElement.prototype.backspace = function(){
	var pp = this.selectionStart,d=(this.selectionEnd - this.selectionStart==0?-1: 0);
	this.value = this.value.substring(0,this.selectionStart + d)+this.value.substring(this.selectionEnd,this.value.length);
	if(this.setSelectionRange){
		this.focus();this.setSelectionRange(pp+d,pp+d);
	}
}

/**
 * @method space Lets you trigger space button in your input field.
 *
 */
HTMLInputElement.prototype.space = function(){
	this.typeText(" ");
}

/**
 * @method typeText Lets you type specified text in inputfield.
 * @param s {String|Number} The text that will be typed in input field.
 */
HTMLInputElement.prototype.typeText = function(s){
	var pp = this.selectionStart;
	this.value = this.value.substring(0,this.selectionStart)+s+this.value.substring(this.selectionEnd,this.value.length);
	if(this.setSelectionRange){
		this.focus();this.setSelectionRange(pp+1,pp+1);
	}
}


YM.Select = YM.Select || {};
/**
 * @method createSelectList This function create a select box.
 * @param document Base document class.
 * @param element {HTMLSelectElement} Pass select element to customize existed element or null to create new select object.
 * @param pairs {Array} Parameters to set options. Usage: [{value:2,text:'two',className:"option_className"},...]
 * @param className {String} to set select object's class
 * @param style {String} to set select object's style
 * @param id {String} to set select object's id to be able to reach same return object with getElementById()
 * @param override {Boolean} Enables to override prev values on select object.
 * @return {HTMLSelectElement} returns the custom select object.
 */
YM.Select.createSelectList = function (document,element,pairs,className,style,id,override){
                var select = (element?element:document.createElement("select")),option;
                className && (select.className += " "+className);
                id && (select.id = id);
                if(style){
                    for(var v in style){
                        select.style[v] = style[v];
                    }
                }
                if(override){
                	select.options.length = 0;
                }
                override = select.options.length;
                for(var i=0;i<pairs.length;i++){
                    option = document.createElement("option");
                        option.value = pairs[i].value;
                        option.text = pairs[i].text;
                        pairs[i].className && (option.className += pairs[i].className);
                        select.options[i+override] = option;
                }
                return select;
            }
		