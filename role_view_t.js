function role_view_t(role_type, stationary, parent) {
	var self = this;
	this.role_type_m = role_type;
	this.element_m = $('<div class="role" role="' + role_type + '"></div>');
	this.text_element_m = $('<p></p>');

	this.element_m.append(this.text_element_m);

	switch (role_type) {
		case 'agent':
		this.text_element_m.text('who');
		break;
		case 'modal':
		this.text_element_m.text('maybe');
		break;
		case 'action':
		this.text_element_m.text('did');
		break;
		case 'negation':
		this.text_element_m.text('not do');
		break;
		case 'experiencer':
		this.text_element_m.text('what to');
		break;
		case 'benefactive':
		this.text_element_m.text('whom');
		break;
		case 'locative':
		this.text_element_m.text('where');
		break;
		case 'temporal':
		this.text_element_m.text('when');
		break;
		case 'manner':
		this.text_element_m.text('in what way');
		break;
		case 'purpose':
		this.text_element_m.text('why');
		break;
		case 'extent':
		this.text_element_m.text('how much');
		break;
	}

	if (stationary) {
		this.element_m.addClass('stationary');
		if (parent) {
			parent.append(this.element_m);
		}
		this.element_m.on('mousedown touchstart', function(event) {
			var draggable_copy = self.draggable_copy();
			draggable_copy.element_m.trigger(event);
			return false;
		});
	} else {
		this.element_m.css('position', 'absolute');
		this.element_m.draggable({
			revert:"invalid",
			zIndex:2
		});
	}
}

role_view_t.prototype.parent = function (new_parent) {
	if (new_parent) {
		new_parent = $(new_parent);
		var current_parent = this.parent();
		this.element_m.detach();
		this.element_m.css({
			top: '+=' + current_parent.offset().top - new_parent.offset().top,
			left: '+=' + current_parent.offset().left - new_parent.offset().left
		});
		new_parent.append(this.element_m);
	} else {
		return $(this.element_m.parent()[0]);
	}
};

role_view_t.prototype.draggable_copy = function () {
	var copy = new role_view_t(this.role_type_m);
	var offsetParent = this.element_m.offsetParent();
	copy.element_m.css({
		top: this.element_m.offset().top - offsetParent.offset().top,
		left: this.element_m.offset().left - offsetParent.offset().left
	});
	this.parent().append(copy.element_m);
	return copy;
};





















