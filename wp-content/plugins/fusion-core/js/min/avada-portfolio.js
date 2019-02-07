jQuery.fn.fusionCalculatePortfolioEqualHeights = function() {
	var a = Math.round(1 / (jQuery(this).children(":visible").first()[0].getBoundingClientRect().width / jQuery(this).parent().width())),
		b = jQuery(this).find(".fusion-portfolio-post:visible").not(".invisible-after-ajax").length;
	jQuery(this).find(".invisible-after-ajax").hide().removeClass("invisible-after-ajax"), 1 < a && 1 < b && jQuery(this).find(".fusion-portfolio-post:visible").each(function(b) {
		var c = parseInt(jQuery(this).css("top"), 10),
			d = 0;
		d = 1 == (b + 1) % a ? jQuery(this).parent().find(".fusion-portfolio-post:visible:eq(" + (b + a) + ")").length ? parseInt(jQuery(this).parent().find(".fusion-portfolio-post:visible:eq(" + (b + a) + ")").css("top"), 10) - c : parseInt(jQuery(this).parent().height(), 10) - c : parseInt(jQuery(this).parent().find(".fusion-portfolio-post:visible:eq(" + (b - 1) + ")").css("height"), 10), jQuery(this).css("height", d + "px")
	})
}, jQuery(document).ready(function() {
	function a(a) {
		return null !== a.match("/.(jpeg|jpg|gif|png)$/")
	}
	window.portfolioEqualHeightsResizeTimer, jQuery(window).on("resize", function(a, b) {
		void 0 !== b && !0 !== b || (jQuery(".fusion-portfolio-equal-heights .fusion-portfolio-wrapper").each(function() {
			jQuery(this).find(".fusion-portfolio-post").css("height", "")
		}), jQuery(".fusion-portfolio-equal-heights").length && (clearTimeout(window.portfolioEqualHeightsResizeTimer), window.portfolioEqualHeightsResizeTimer = setTimeout(function() {
			jQuery(".fusion-portfolio-equal-heights").find(".fusion-portfolio-wrapper").isotope()
		}, 50)))
	}), jQuery(window).on("resize", function() {
		jQuery(".fusion-portfolio .fusion-portfolio-wrapper").each(function() {
			"fixed" === jQuery(this).data("picturesize") && jQuery(this).find(".fusion-placeholder-image").each(function() {
				jQuery(this).css({
					height: jQuery(this).parents(".fusion-portfolio-post").siblings().find("img").first().height(),
					width: jQuery(this).parents(".fusion-portfolio-post").siblings().find("img").first().width()
				})
			})
		})
	}), jQuery(".fusion-portfolio .fusion-filters a").click(function(a) {
		var b = jQuery(this).data("filter"),
			c = [],
			d = jQuery(this).parents(".fusion-portfolio").data("id");
		a.preventDefault(), d || (d = ""), jQuery(this).parents(".fusion-portfolio-equal-heights").find(".fusion-portfolio-post").css("height", ""), jQuery(this).parents(".fusion-portfolio").find(".fusion-portfolio-wrapper").isotope({
			filter: b
		}), jQuery(this).parents(".fusion-filters").find(".fusion-filter").removeClass("fusion-active"), jQuery(this).parent().addClass("fusion-active"), jQuery(this).parents(".fusion-portfolio").find(".fusion-portfolio-wrapper").find(".fusion-portfolio-post").each(function() {
			var a, e, f = "";
			"individual" === avadaPortfolioVars.lightbox_behavior && jQuery(this).find(".fusion-rollover-gallery").length && (f = jQuery(this).find(".fusion-rollover-gallery").data("id")), 1 < b.length ? (a = b.substr(1), e = "iLightbox[" + a + f + d + "]") : (a = "fusion-portfolio-post", e = "iLightbox[gallery" + f + d + "]"), (jQuery(this).hasClass(a) || 1 === b.length) && (1 < b.length && -1 === jQuery.inArray(a + f + d, c) ? c.push(a + f + d) : 1 === b.length && -1 === jQuery.inArray(f + d, c) && c.push("gallery" + f + d), jQuery(this).find(".fusion-rollover-gallery").attr("data-rel", e), jQuery(this).find(".fusion-portfolio-gallery-hidden a").attr("data-rel", e))
		}), "created" !== jQuery(this).data("lightbox") && (jQuery.each(c, function(a, b) {
			window.$ilInstances.push(jQuery('[data-rel="iLightbox[' + b + ']"], [rel="iLightbox[' + b + ']"]').iLightBox(window.avadaLightBox.prepare_options("iLightbox[" + b + "]")))
		}), jQuery(this).data("lightbox", "created")), window.avadaLightBox.refresh_lightbox()
	}), Modernizr.mq("only screen and (max-width: 479px)") && (jQuery(".fusion-portfolio .fusion-rollover-gallery").each(function() {
		var b = jQuery(this).attr("href");
		!0 === a(b) && jQuery(this).parents(".fusion-image-wrapper").find("> img").attr("src", b).attr("width", "").attr("height", ""), jQuery(this).parents(".fusion-portfolio-post").css("width", "auto"), jQuery(this).parents(".fusion-portfolio-post").css("height", "auto"), jQuery(this).parents(".fusion-portfolio-one:not(.fusion-portfolio-one-text)").find(".fusion-portfolio-post").css("margin", "0")
	}), jQuery(".fusion-portfolio").length && jQuery(".fusion-portfolio-wrapper").isotope())
}), jQuery(window).load(function() {
	jQuery(".sidebar").is(":visible") && jQuery(".post-content .fusion-portfolio").each(function() {
		var a = jQuery(this).data("columns");
		jQuery(this).addClass("fusion-portfolio-" + a + "-sidebar")
	}), jQuery().isotope && jQuery(".fusion-portfolio .fusion-portfolio-wrapper").length && jQuery(".fusion-portfolio .fusion-portfolio-wrapper").each(function() {
		var a, b, c, d, e, f, g, h, i, j, k, l, m;
		jQuery(this).next(".fusion-load-more-button").fadeIn(), "fixed" === jQuery(this).data("picturesize") ? jQuery(this).find(".fusion-placeholder-image").each(function() {
			jQuery(this).css({
				height: jQuery(this).parents(".fusion-portfolio-post").siblings().find("img").first().height(),
				width: jQuery(this).parents(".fusion-portfolio-post").siblings().find("img").first().width()
			})
		}) : jQuery(this).find(".fusion-placeholder-image").each(function() {
			jQuery(this).css({
				width: jQuery(this).parents(".fusion-portfolio-post").siblings().first().find("img").width()
			})
		}), m = "", a = jQuery(this).parents(".fusion-portfolio").find(".fusion-filters"), a.length && (b = a.find(".fusion-filter"), c = a.find(".fusion-active"), d = c.children("a"), e = d.length ? d.attr("data-filter").substr(1) : "", f = jQuery(this).find(".fusion-portfolio-post"), g = [], k = !0, b && b.each(function() {
			var b = jQuery(this),
				h = b.children("a").data("filter");
			f && (e.length && f.hide(), jQuery(".fusion-filters").show(), f.each(function() {
				var f, i = jQuery(this),
					j = i.find(".fusion-rollover-gallery").data("rel");
				i.hasClass(h.substr(1)) && b.hasClass("fusion-hidden") && (b.removeClass("fusion-hidden"), !0 === k && 0 === a.find(".fusion-filter-all").length && (a.find(".fusion-filter").removeClass("fusion-active"), b.addClass("fusion-active"), k = !1, c = a.find(".fusion-active"), d = c.children("a"), e = d.attr("data-filter").substr(1))), e.length && i.hasClass(e) && (i.show(), j && (f = j.replace("gallery", e), i.find(".fusion-rollover-gallery").attr("data-rel", f), "individual" === avadaPortfolioVars.lightbox_behavior && i.find(".fusion-portfolio-gallery-hidden a").attr("data-rel", f), -1 === jQuery.inArray(f, g) && g.push(f)))
			}))
		}), e.length && (m = "." + e, jQuery.each(g, function(a, b) {
			window.$ilInstances.push(jQuery('[data-rel="' + b + '"], [rel="' + b + '"]').iLightBox(window.avadaLightBox.prepare_options(b)))
		}), window.avadaLightBox.refresh_lightbox(), "individual" !== avadaPortfolioVars.lightbox_behavior && d.data("lightbox", "created"))), jQuery('[data-spy="scroll"]').each(function() {
			jQuery(this).scrollspy("refresh")
		}), h = jQuery(this), i = h.attr("id"), i && (h = jQuery("#" + i)), (jQuery(this).parent().hasClass("fusion-portfolio-masonry") || jQuery(this).parent().hasClass("fusion-portfolio-layout-masonry")) && !jQuery(this).parent().hasClass("fusion-masonry-has-vertical") && 0 < jQuery(this).find(".fusion-portfolio-post:not(.fusion-grid-sizer)").not(".fusion-element-landscape").length && jQuery(this).parent().addClass("fusion-masonry-has-vertical"), setTimeout(function() {
			var a, b;
			h.parent().hasClass("fusion-portfolio-one") ? (a = "vertical", b = !1) : (a = h.parent().hasClass("fusion-portfolio-equal-heights") ? "fitRows" : "packery", b = !0), window.$portfolio_isotope = h, window.$portfolio_isotope.isotope({
				itemSelector: ".fusion-portfolio-post",
				resizeable: b,
				layoutMode: a,
				transformsEnabled: !1,
				isOriginLeft: !jQuery(".rtl").length,
				filter: m,
				initLayout: !1
			}), window.$portfolio_isotope.parent().hasClass("fusion-portfolio-equal-heights") && window.$portfolio_isotope.on("layoutComplete", function(a) {
				setTimeout(function() {
					var b = jQuery(a.target);
					b.find(".fusion-portfolio-post").css("height", ""), b.fusionCalculatePortfolioEqualHeights()
				}, 10)
			}), window.$portfolio_isotope.isotope()
		}, 1), j = jQuery(this).find(".fusion-portfolio-post .fusion-placeholder-image"), j.each(function() {
			jQuery(this).parents(".fusion-portfolio-content-wrapper, .fusion-image-wrapper").animate({
				opacity: 1
			})
		}), l = jQuery(this).find(".fusion-portfolio-post .fusion-video"), l.each(function() {
			jQuery(this).animate({
				opacity: 1
			}), jQuery(this).parents(".fusion-portfolio-content-wrapper").animate({
				opacity: 1
			})
		}), l.fitVids(), window.$portfolio_images_index = 0, jQuery(this).imagesLoaded().progress(function(a, b) {
			1 <= jQuery(b.img).parents(".fusion-portfolio-content-wrapper").length ? jQuery(b.img, j).parents(".fusion-portfolio-content-wrapper").delay(100 * window.$portfolio_images_index).animate({
				opacity: 1
			}) : jQuery(b.img, j).parents(".fusion-image-wrapper").delay(100 * window.$portfolio_images_index).animate({
				opacity: 1
			}), window.$portfolio_images_index++
		}), setTimeout(function() {
			jQuery(window).trigger("resize", [!1])
		}, 250)
	}), jQuery(".fusion-portfolio-paging-infinite, .fusion-portfolio-paging-load-more-button").each(function() {
		var a = jQuery(this),
			b = "." + a.attr("class").replace(/\ /g, ".").replace(/.fusion\-portfolio\-[a-zA-Z]+\-sidebar/g, "").replace(".fusion-masonry-has-vertical", "") + " ",
			c = a.find(".fusion-portfolio-wrapper").data("pages");
		a.children(".fusion-portfolio-wrapper").infinitescroll({
			navSelector: b + ".fusion-infinite-scroll-trigger",
			nextSelector: b + ".pagination-next",
			itemSelector: b + "div.pagination .current, " + b + " .fusion-portfolio-post",
			loading: {
				finishedMsg: avadaPortfolioVars.infinite_finished_msg,
				msg: jQuery('<div class="fusion-loading-container fusion-clearfix"><div class="fusion-loading-spinner"><div class="fusion-spinner-1"></div><div class="fusion-spinner-2"></div><div class="fusion-spinner-3"></div></div><div class="fusion-loading-msg">' + avadaPortfolioVars.infinite_blog_text + "</div>")
			},
			maxPage: c || void 0,
			errorCallback: function() {
				a.find(".fusion-portfolio-post").css("height", ""), a.find(".fusion-portfolio-wrapper").isotope()
			}
		}, function(b) {
			var d;
			jQuery().isotope && (d = a.find(".fusion-filters").find(".fusion-filter"), b = jQuery(b), b.hide(), imagesLoaded(b, function() {
				var e, f, g, h, i, j;
				e = jQuery(b).find(".fusion-placeholder-image"), e.parents(".fusion-portfolio-content-wrapper, .fusion-image-wrapper").animate({
					opacity: 1
				}), f = jQuery(b).find(".fusion-video"), f.each(function() {
					jQuery(this).animate({
						opacity: 1
					}), jQuery(this).parents(".fusion-portfolio-content-wrapper").animate({
						opacity: 1
					})
				}), f.fitVids(), window.$portfolio_images_index = 0, jQuery(b).imagesLoaded().progress(function(a, b) {
					1 <= jQuery(b.img).parents(".fusion-portfolio-content-wrapper").length ? jQuery(b.img, e).parents(".fusion-portfolio-content-wrapper").delay(100 * window.$portfolio_images_index).animate({
						opacity: 1
					}) : jQuery(b.img, e).parents(".fusion-image-wrapper").delay(100 * window.$portfolio_images_index).animate({
						opacity: 1
					}), window.$portfolio_images_index++
				}), d && d.each(function() {
					var a, c, d, e = jQuery(this),
						f = e.children("a").data("filter");
					b && b.each(function() {
						d = jQuery(this), d.hasClass(f.substr(1)) && e.hasClass("fusion-hidden") && (Modernizr.mq("only screen and (max-width: " + avadaPortfolioVars.content_break_point + "px)") ? e.fadeIn(400, function() {
							e.removeClass("fusion-hidden")
						}) : (a = e.css("width"), c = e.css("margin-right"), e.css("width", 0), e.css("margin-right", 0), e.removeClass("fusion-hidden"), e.animate({
							width: a,
							"margin-right": c
						}, 400, function() {
							e.removeAttr("style")
						})))
					})
				}), a.find(".fusion-filters").length ? (g = a.find(".fusion-filters").find(".fusion-filter.fusion-active a"), h = g.attr("data-filter").substr(1), h.length ? (b.each(function() {
					var b = jQuery(this),
						c = b.find(".fusion-rollover-gallery").data("rel");
					b.hasClass(h) ? (b.fadeIn(), c && b.find(".fusion-rollover-gallery").attr("data-rel", c.replace("gallery", h))) : a.hasClass("fusion-portfolio-equal-heights") && b.addClass("invisible-after-ajax")
				}), "created" !== g.data("lightbox") && (window.$ilInstances.push(jQuery('[data-rel^="iLightbox[' + h + ']"]').iLightBox(window.avadaLightBox.prepare_options("iLightbox[" + h + "]"))), g.data("lightbox", "created")), window.avadaLightBox.refresh_lightbox()) : b.fadeIn()) : b.fadeIn(), a.find(".fusion-portfolio-post").css("height", ""), a.find(".fusion-portfolio-wrapper").isotope("appended", b), b.each(function() {
					jQuery(this).find(".full-video, .video-shortcode, .wooslider .slide-content").fitVids()
				}), jQuery('[data-spy="scroll"]').each(function() {
					jQuery(this).scrollspy("refresh")
				}), "individual" === avadaPortfolioVars.lightbox_behavior && jQuery(b).find(".fusion-rollover-gallery").length && (i = jQuery(b).find(".fusion-rollover-gallery"), i.each(function() {
					window.$ilInstances.push(jQuery('[data-rel^="' + jQuery(this).attr("data-rel") + '"]').iLightBox(window.avadaLightBox.prepare_options(jQuery(this).attr("data-rel"))))
				})), j = a.find(".current").html(), a.find(".current").remove(), c == j && (a.find(".fusion-loading-container").hide(), a.find(".fusion-load-more-button").hide()), "undefined" != typeof niceScrollReInit && niceScrollReInit()
			}))
		}), "1" == c && (a.find(".fusion-loading-container").hide(), a.find(".fusion-load-more-button").hide()), a.hasClass("fusion-portfolio-paging-load-more-button") && (a.find(".fusion-portfolio-wrapper").infinitescroll("unbind"), a.find(".fusion-load-more-button").on("click", function(b) {
			b.preventDefault(), a.find(".fusion-portfolio-wrapper").infinitescroll("retrieve")
		}))
	})
});