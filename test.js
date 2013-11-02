

$(function () {
	$(".word")
		.droppable({
			drop: function (event, ui) {
				word = $(this);
				role = ui.draggable;
				role.addClass('assigned');
				var topDelta = word.offset().top - role.offset().top;
				var leftDelta = word.offset().left - role.offset().left;
				role.animate({
					width: word.width(),
					top: "+=" + topDelta,
					left: "+=" + leftDelta,
					zIndex: -1
				});
			}
		});
	var palette = $(".palette");
	var role_views = [];
	role_views[0] = new role_view_t('agent', true, palette);
	role_views[1] = new role_view_t('modal', true, palette);
	role_views[2] = new role_view_t('action', true, palette);
	role_views[3] = new role_view_t('negation', true, palette);
	role_views[4] = new role_view_t('experiencer', true, palette);
	role_views[5] = new role_view_t('benefactive', true, palette);
	role_views[6] = new role_view_t('locative', true, palette);
	role_views[7] = new role_view_t('temporal', true, palette);
	role_views[8] = new role_view_t('manner', true, palette);
	role_views[9] = new role_view_t('purpose', true, palette);
	role_views[10] = new role_view_t('extent', true, palette);
	for (var i = role_views.length - 1; i >= 0; i--) {
		role_views[i].draggable_copy();
	}
});