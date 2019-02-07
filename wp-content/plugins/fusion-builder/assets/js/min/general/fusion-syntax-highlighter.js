! function(n) {
	"use strict";
	var r = function(t) {
		var e, i;
		(i = {}).readOnly = void 0 !== n(t).data("readonly") && n(t).data("readonly"), i.lineNumbers = void 0 !== n(t).data("linenumbers") && n(t).data("linenumbers"), i.lineWrapping = void 0 !== n(t).data("linewrapping") && n(t).data("linewrapping"), i.theme = void 0 !== n(t).data("theme") ? n(t).data("theme") : "default", i.mode = void 0 !== n(t).data("mode") ? n(t).data("mode") : "text/html", e = wp.CodeMirror.fromTextArea(t, i), n(t).addClass("code-mirror-initialized"), e.setSize("100%", "auto"), n(document).trigger("resize"), n(t).parents(".fusion-syntax-highlighter-container").css("opacity", "1")
	};
	n(document).ready(function() {
		var e, i, a, t = n(".fusion-syntax-highlighter-textarea");
		n.each(t, function(t, e) {
			i = n(e).parents(".fusion-tabs"), a = n(e).parents(".fusion-panel"), i.length ? 0 === i.find(".nav-tabs li.active").index() && i.find(".nav-tabs li.active .tab-link").attr("href") === "#" + n(e).parents(".tab-pane").attr("id") ? r(e) : i.find(".tab-link").click(function() {
				n(this).attr("href") !== "#" + n(e).parents(".tab-pane").attr("id") || n(e).hasClass("code-mirror-initialized") || setTimeout(function() {
					r(e)
				}, 200)
			}) : a.length ? (a.find(".panel-title a.active").length && (e = a.find(a.find(".panel-title a.active").attr("href")).find(".fusion-syntax-highlighter-textarea")[0], r(e)), a.find(".panel-title a").click(function() {
				n(this).attr("href") !== "#" + n(e).parents(".panel-collapse").attr("id") || n(e).hasClass("code-mirror-initialized") || setTimeout(function() {
					r(e)
				}, 200)
			})) : r(e)
		}), n(".syntax-highlighter-copy-code-title").click(function() {
			var t = n(this);
			e = document.getElementById(n(this).data("id")), t.parent(".syntax-highlighter-copy-code").addClass("syntax-highlighter-copying"), n(e).removeAttr("style").css({
				position: "absolute",
				left: "-1000%"
			}), n(e).select(), document.execCommand("Copy", !1, null), setTimeout(function() {
				t.parent(".syntax-highlighter-copy-code").removeClass("syntax-highlighter-copying")
			}, 200)
		})
	})
}(jQuery);