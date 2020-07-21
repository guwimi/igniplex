function otherScript() {
    //-----START -----//
  
    //-----STOP -----//
  }

// SATU -   FACEBOOK
var defer = false;
window.addEventListener("scroll", function() {
  if (0 != document.documentElement.scrollTop && false === defer || 0 != document.body.scrollTop && false === defer) {
    !function() {
      !function(window, doc, s, twitterWidgetURL, facebookEvents, js, editorElem) {
        if (window.fbq) {
          return;
        }
        facebookEvents = window.fbq = function() {
          if (facebookEvents.callMethod) {
            facebookEvents.callMethod.apply(facebookEvents, arguments);
          } else {
            facebookEvents.queue.push(arguments);
          }
        };
        if (!window._fbq) {
          window._fbq = facebookEvents;
        }
        facebookEvents.push = facebookEvents;
        facebookEvents.loaded = true;
        facebookEvents.version = "2.0";
        facebookEvents.queue = [];
        js = doc.createElement(s);
        js.async = true;
        js.src = twitterWidgetURL;
        editorElem = doc.getElementsByTagName(s)[0];
        editorElem.parentNode.insertBefore(js, editorElem);
      }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
      fbq("init", "1062327703843698");
      fbq("track", "PageView");
    }();
    defer = true;
  }
}, true);

// DUA -ALL CUSTOM
if (localStorage.getItem("igniplexDark") === "1") {
  document.querySelector(".igniplexSwitch .check").setAttribute("checked", "checked");
} else {
  document.querySelector(".igniplexSwitch .check").removeAttribute("checked");
}
var parts = window.location.hostname.split(".");
var subdomain = parts.shift();
var parent = parts.join(".");
var except = ["blogger.com", "google.com", "googleusercontent.com", "google-analytics.com", "thinkwithgoogle.com", "googletagmanager.com", "gstatic.com", "googleapis.com", "doubleclick.net", "bing.com", "yahoo.com", "web.dev", "gtmetrix.com", "pingdom.com", "histats.com", "neilpatel.com"];
var hit = 0;
var imgSlider = document.querySelectorAll("#igniplexSlider img");
var Width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
cK = {
  a : function() {
    let expDate = new Date;
    expDate.setTime(expDate.getTime() + 24 * 60 * 60 * 1000);
    let _0x1b24x9 = Date.parse(expDate.toUTCString());
    let _0x1b24xa = "expires=" + expDate.toUTCString();
    document.cookie = "_ign=" + _0x1b24x9 + "; " + _0x1b24xa + "; path=/";
  },
  b : function(s) {
    let componentsStr = "; " + document.cookie;
    let parts = componentsStr.split("; " + s + "=");
    if (parts.length == 2) {
      return parts.pop().split(";").shift();
    }
  },
  c : function() {
    document.cookie = "_ign=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
}, gL = function() {
  $(document).scroll(function() {
    return $(document).scrollTop() > 300 ? $(".totop").addClass("show") : $(".totop").removeClass("show");
  });
  $(".totop").click(function() {
    return $("html,body").animate({
      scrollTop : "0"
    }, 650);
  });
  let shiftedDate = new Date;
  let attributeTemplate = shiftedDate.getFullYear();
  let template = document.getElementById("cpr");
  if (template) {
    template.innerHTML = attributeTemplate;
  }
  let lastAvarage = window.pageYOffset;
  let storyContainerDiv = document.getElementById("igniplexHeader");
  let v_height_diff = document.getElementById("igniplexHeader").offsetHeight;
  let elem = document.getElementById("middlebar");
  let canvas = document.getElementById("sidebarSticky");
  if (elem) {
    ff = window.getComputedStyle(elem).getPropertyValue("top");
  }
  if (canvas) {
    gg = gg = window.getComputedStyle(canvas).getPropertyValue("top");
  }
  window.onscroll = function() {
    let avarage = window.pageYOffset;
    if (lastAvarage > avarage) {
      storyContainerDiv.removeAttribute("class");
      if (elem) {
        elem.style.top = parseInt(ff) + v_height_diff + "px";
      }
      if (canvas) {
        canvas.style.top = parseInt(gg) + v_height_diff + "px";
      }
    } else {
      storyContainerDiv.classList.add("hide");
      if (elem) {
        elem.removeAttribute("style");
      }
      if (canvas) {
        canvas.removeAttribute("style");
      }
    }
    lastAvarage = avarage;
  };
  let navTitleA = $("#igniplexHeader .header-inner .igniplexMenu .MenuList ul li a:not(:only-child)");
  navTitleA.next("ul").hide();
  navTitleA.click(function(event) {
    event.preventDefault();
    $(this).next("ul").slideToggle(100);
    $(this).parent().toggleClass("open");
  });
  $(".igniplexMenu .check").change(function() {
    if ($(this).is(":checked")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").removeAttr("style");
    }
  });
  window.addEventListener("scroll", Lz);
  window.addEventListener("resize", Lz);
}, hT = function() {
  if (document.querySelector("#igniplexSlider .widget-content")) {
    document.querySelector("#igniplexSlider .igniplexLoading").remove();
    document.querySelector("#igniplexSlider .PopularPosts .widget-content").classList.add("lazyloaded");
  }
}, Lz = function(canCreateDiscussions) {
  let elements = document.querySelectorAll("*[data-src]");
  var i = 0;
  for (; i < elements.length; i++) {
    let rect = elements[i].getBoundingClientRect();
    if (elements[i].hasAttribute("data-src") && rect.top < window.innerHeight) {
      elements[i].setAttribute("src", elements[i].getAttribute("data-src"));
      elements[i].removeAttribute("data-src");
      elements[i].classList.remove("lazy");
      elements[i].classList.add("lazyloaded");
      hit++;
      if (Width <= 768) {
        if (hit === 1) {
          hT();
        }
      } else {
        if (hit === imgSlider.length + 1) {
          hT();
        }
      }
    }
  }
}, rC = {
  a : function(data) {
    let entriesHTML = "<ul>";
    var i = 0;
    for (; i < data.feed.entry.length; i++) {
      var j = 0;
      for (; j < data.feed.entry[i].link.length && "alternate" != data.feed.entry[i].link[j].rel; j++) {
      }
      entriesHTML = entriesHTML + ("<li><a href=" + ("'" + data.feed.entry[i].link[j].href + "'") + '">' + data.feed.entry[i].title["$t"] + "</a> </li>");
    }
    $(".Feed .widget-content").html(entriesHTML + "</ul>");
  },
  b : function() {
    if ($(".Feed .widget-content").length !== 0) {
      let _0x1b24x1b = $(".Feed .widget-content").attr("data-num");
      $.ajax({
        url : "/feeds/posts/summary/?max-results=" + _0x1b24x1b + "&alt=json-in-script&callback=rC.a",
        type : "GET",
        dataType : "jsonp"
      });
    }
  }
}, Dk = function() {
  $(".igniplexSwitch .check").change(function() {
    if ($(this).is(":checked")) {
      $(this).attr("checked", "checked");
      localStorage.setItem("igniplexDark", "1");
      $("body").addClass("igniplexDark");
    } else {
      $(this).removeAttr("checked", "checked");
      localStorage.removeItem("igniplexDark");
      $("body").removeClass("igniplexDark");
    }
  });
}, nV = function() {
  let mockNavigationService = window.matchMedia("(max-width: 950px)");
  let screenCoverLayer = $(".igniplexNavigation .NavMenu");
  let postLi = $(".igniplexNavigation .NavMenu .head");
  let cmd_arg_element = $(".igniplexNavigation .NavMenu nav");
  let j_frames = $(".igniplexNavigation .NavMenu .social");
  let jQFooter = $(".MenuList .head");
  let allAttParams = $(".MenuList nav");
  let $visual = $(".MenuList .social");
  let _changeCalendarMonth = function() {
    screenCoverLayer.detach();
    if (!jQFooter.html() && !allAttParams.html() && !$visual.html()) {
      $(".MenuList").addClass("NavMenu");
      $(".MenuList").prepend(postLi.clone());
      $(".MenuList > ul").parent().append(cmd_arg_element.clone());
      $(".MenuList").append(j_frames.clone());
      Dk();
    }
  };
  let renderDocumentHTML = function() {
    $(".igniplexNavigation").append(screenCoverLayer);
    $(".MenuList").removeClass("NavMenu");
    $(".MenuList .head").remove();
    $(".MenuList nav").remove();
    $(".MenuList .social").remove();
    $("body").removeAttr("style");
    $("#igniplexMenu").prop("checked", false);
  };
  mockNavigationService.addListener(function(recogs) {
    if (recogs.matches) {
      _changeCalendarMonth();
    } else {
      renderDocumentHTML();
    }
  });
  if (Width <= 950) {
    _changeCalendarMonth();
  } else {
    renderDocumentHTML();
  }
}, aB = function() {
  if (window.adsbygoogle) {
    console.log("AdSense terpasang...");
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    if (config.adblock.pakai) {
      script.onerror = function() {
        let mailOptionsInput = document.createElement("div");
        mailOptionsInput.id = "ignielAdBlock";
        mailOptionsInput.innerHTML = '<div class="isiAds"><svg viewBox="0 0 24 24"><path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>' + config.adblock.text + "</div>";
        document.body.append(mailOptionsInput);
        document.body.style.overflow = "hidden";
      };
    }
    document.getElementsByTagName("head")[0].appendChild(script);
  } else {
    console.log("Tidak ada AdSense...");
  }
}, sL = function() {
  if ($("#igniplexSlider")) {
    if (config.slider.pakai) {
      let meterPos = config.slider.tinggi;
      let node = document.createElement("script");
      node.async = true;
      node.src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
      node.onload = function() {
        $("#igniplexSlider .igniplexLoading").css("height", meterPos);
        $("#igniplexSlider").addClass("owl");
        $("#igniplexSlider .widget-content .post").wrapAll('<div class="owl-carousel"></div>');
        let carousel = $(".owl-carousel");
        carousel.owlCarousel({
          items : 3,
          loop : true,
          margin : 0,
          lazyLoad : true,
          autoplay : true,
          autoplayTimeout : config.slider.kecepatan * 1000,
          autoplayHoverPause : true,
          responsiveClass : true,
          responsive : {
            0 : {
              items : 1
            },
            640 : {
              items : 2
            },
            800 : {
              items : 3
            }
          }
        });
        $(".play").on("click", function() {
          carousel.trigger("play.owl.autoplay", [1000]);
        });
        $(".stop").on("click", function() {
          carousel.trigger("stop.owl.autoplay");
        });
        carousel.on("changed.owl.carousel", function() {
          $(".owl-dots button").attr("aria-label", "Slider");
          $("#igniplexSlider img").each(function() {
            $(this).attr("src", $(this).attr("src").replace(/w(\d+)-h(\d+)-(\D+)-k-no-nu/, "w480-h" + meterPos + "-p-k-no"));
          });
        });
      };
      document.head.appendChild(node);
    } else {
      if ($("#igniplexSlider .PopularPosts").html()) {
        let ipv6 = $("#igniplexSlider .PopularPosts .post:first-child img").attr("height");
        let golden_ratio_conjugate = $("#igniplexSlider .PopularPosts .post:last-child img").attr("height");
        let mockNavigationService = window.matchMedia("(max-width: 768px)");
        let showPagePreview = function() {
          $("#igniplexSlider .PopularPosts .post:first-child img").attr("src", function() {
            return this.src.replace(/w(\d+)-h(\d+)/, "w480-h360");
          });
          $("#igniplexSlider .PopularPosts .post:not(:first-child) img").each(function() {
            $(this).attr("src", $(this).attr("src").replace(/w(\d+)-h(\d+)/, "w480-h480"));
          });
        };
        let build = function() {
          $("#igniplexSlider .PopularPosts .post:first-child img").attr("src", function() {
            return this.src.replace(/h(\d+)-p/, "h" + ipv6 + "-p");
          });
          $("#igniplexSlider .PopularPosts .post:not(:first-child) img").each(function() {
            $(this).attr("src", $(this).attr("src").replace(/h(\d+)-p/, "h" + golden_ratio_conjugate + "-p"));
          });
        };
        $("#igniplexSlider img").each(function() {
          $(this).attr("src", $(this).attr("src").replace(/(\D+)-k-no-nu/, "-p-k-no"));
        });
        mockNavigationService.addListener(function(recogs) {
          if (recogs.matches) {
            showPagePreview();
          } else {
            build();
          }
        });
        if (Width <= 768) {
          showPagePreview();
        } else {
          build();
        }
      }
    }
  }
}, Po = function() {
  let zIncLen = $(".ignielPagination").length;
  if (zIncLen != 0) {
    $(".ignielPagination").first().before('<div class="ignielPagination" style="display:none;">Blogspot Pagination by igniel.com</div>');
    $(".ignielPagination").last().after('<div id="ignielPagination"></div><div class="clear"></div>');
    let j_panels = $(".ignielPagination");
    let clojIsReversed = "page";
    let val = Pg(clojIsReversed);
    j_panels.hide();
    if (val === undefined) {
      j_panels.eq(0).hide();
      j_panels.eq(1).show();
    } else {
      j_panels.eq(val).show();
    }
    i = 1;
    for (; i <= zIncLen; i++) {
      $("#ignielPagination").append($('<a href="' + window.location.pathname + "?" + clojIsReversed + "=" + i + '" title="Page ' + i + '" rel="nofollow">' + i + "</a>"));
    }
    if (val == undefined) {
      $("#ignielPagination > a").eq(0).replaceWith(function() {
        return $('<span class="selected">1</span>');
      });
    } else {
      $("#ignielPagination > a").eq(Pg(clojIsReversed) - 1).replaceWith(function() {
        return $('<span class="selected">' + Pg(clojIsReversed) + "</span>");
      });
    }
  } else {
    $("#ignielPagination").hide();
  }
  if (config.halaman_berjudul.pakai) {
    let _0x1b24x21 = config.halaman_berjudul.next;
    let _0x1b24x22 = config.halaman_berjudul.prev;
    let _0x1b24x23 = config.halaman_berjudul.latest;
    let _0x1b24x24 = config.halaman_berjudul.oldest;
    let relevance_tab = $(".blog-pager .newer");
    let $linkElem = $(".blog-pager .older");
    let allAttParams = $(".home-link");
    let $visual = $(".old-link");
    $(".blog-pager").addClass("stream");
    $.get(relevance_tab.attr("href"), function(mei) {
      relevance_tab.html($(mei).find("article .entry-title").first().text()).attr("title", $(mei).find(".entry-title").first().text()).attr("class", "title").wrap('<div class="left"></div>');
    }, "html").done(function() {
      relevance_tab.parent().prepend('<div class="text">' + _0x1b24x21 + "</div>");
    });
    $.get($linkElem.attr("href"), function(mei) {
      $linkElem.html($(mei).find("article .entry-title").first().text()).attr("title", $(mei).find(".entry-title").first().text()).attr("class", "title").wrap('<div class="right"></div>');
    }, "html").done(function() {
      $linkElem.parent().prepend('<div class="text">' + _0x1b24x22 + "</div>");
    });
    allAttParams.html('<div class="text">' + _0x1b24x23 + '</div> <span class="title">' + $(".entry-title").first().text() + "</span>");
    $visual.html('<div class="text">' + _0x1b24x24 + '</div> <span class="title">' + $(".entry-title").first().text() + "</span>");
  }
}, Pg = function(isSlidingUp) {
  let componentsStr = decodeURIComponent(window.location.search.substring(1));
  let paramsSplit = componentsStr.split("&");
  let gateSpaces;
  for (let i = 0; i < paramsSplit.length; i++) {
    gateSpaces = paramsSplit[i].split("=");
    if (gateSpaces[0] === isSlidingUp) {
      return gateSpaces[1] === undefined ? true : gateSpaces[1];
    }
  }
}, mB = {
  a : function(url, boolTb) {
    return Math.floor(Math.random() * (boolTb - url + 1)) + url;
  },
  b : function(r) {
    let method = r.length;
    let key;
    let item;
    if (method === 0) {
      return false;
    }
    for (; --method;) {
      key = Math.floor(Math.random() * (method + 1));
      item = r[method];
      r[method] = r[key];
      r[key] = item;
    }
    return r;
  },
  c : function(res) {
    let _0x1b24x2c = mB.a(1, res.feed["openSearch$totalResults"]["$t"] - config.middlebar.jumlah);
    $.ajax({
      url : "/feeds/posts/summary?alt=json-in-script&orderby=updated&start-index=" + _0x1b24x2c + "&max-results=" + config.middlebar.jumlah + "&callback=mB.d",
      type : "GET",
      dataType : "jsonp"
    });
  },
  d : function(exports) {
    let sigDescription;
    let a = mB.b(exports.feed.entry);
    let _0x1b24x2f;
    let entriesHTML;
    if (config.middlebar.image) {
      entriesHTML = "<ul>";
    } else {
      entriesHTML = '<ul class="noimage">';
    }
    for (let i = 0, l = a.length; i < l; i++) {
      for (let j = 0, jLength = a[i].link.length; j < jLength; j++) {
        sigDescription = a[i].link[j].rel == "alternate" ? a[i].link[j].href : "#";
      }
      if ("media$thumbnail" in a[i]) {
        _0x1b24x2f = a[i]["media$thumbnail"].url.replace(/\/s[0-9]+(\-c)?/, "/w250-h167-p-k-no-nu");
      } else {
        _0x1b24x2f = config.middlebar.noimage;
      }
      entriesHTML = entriesHTML + "<li>";
      if (config.middlebar.image) {
        entriesHTML = entriesHTML + ('<div class="thumb"><a href="' + sigDescription + '" title="' + a[i].title["$t"] + '"><img class="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=" data-src="' + _0x1b24x2f + '" title="' + a[i].title["$t"] + '" alt="' + a[i].title["$t"] + '"/></a></div>');
      }
      entriesHTML = entriesHTML + ('<div class="text"><a href="' + sigDescription + '">' + a[i].title["$t"] + "</a></div></li>");
    }
    $("#middlebar .igniplexLoading").remove();
    $("#middlebar .widget-content").html(entriesHTML + "</ul>").css("height", "auto");
  },
  e : function() {
    if ($("#middlebar .widget-content")) {
      $.ajax({
        url : "/feeds/posts/summary?alt=json-in-script&max-results=0&callback=mB.c",
        type : "GET",
        dataType : "jsonp"
      });
    }
  }
}, Si = function() {
  let syncedAnimals = $('iframe[src*="youtube.com"]');
  syncedAnimals.each(function() {
    $(this).attr("aspectRatio", this.height / this.width).attr("style", "width:100%");
  });
  $(window).resize(function() {
    syncedAnimals.each(function() {
      $(this).attr("height", $(this).width() * $(this).attr("aspectRatio"));
    });
  }).resize();
  if (document.querySelector(".igniplexTitle")) {
    document.querySelector(".isSingle main").style.marginTop = document.querySelector(".igniplexTitle").offsetHeight + 20 + "px";
  }
  $("#comments p").find("a").contents().unwrap();
  $(".post-comments a").click(function() {
    $("html, body").animate({
      scrollTop : $("#comments").offset().top
    }, 650);
  });
}, kO = function() {
  if (document.querySelector("section#comments")) {
    var doc = document;
    var user = doc.getElementById("comment-editor");
    var key = user.src;
    var datas = doc.querySelectorAll("ol .comment-reply");
    var el = doc.getElementsByClassName("comment-form")[0];
    var labelNumbers = datas.length;
    var w = doc.getElementById("top-continue");
    var done = function(button, e, data, uid) {
      button.addEventListener("click", function() {
        var type = button.getAttribute("data-comment-id");
        doc.querySelector("#c" + type + " > .comment-replybox-single").appendChild(e);
        data.src = uid + "&parentID=" + type;
        w.classList.remove("hidden");
        if (w) {
          doc.querySelector("#top-continue a").classList.remove("hidden");
        }
      });
    };
    i = 0;
    for (; i < labelNumbers; i++) {
      done(datas[i], el, user, key);
    }
    if (w) {
      w.classList.add("hidden");
      j = w.getElementsByTagName("a")[0];
      j.removeAttribute("class");
      var passButton = doc.querySelector("#top-continue a");
      passButton.addEventListener("click", function() {
        passButton.parentNode.appendChild(el);
        user.src = key;
        j.classList.add("hidden");
      });
    }
  }
}, rR = {
  a : new Array,
  b : 0,
  c : new Array,
  cc : new Array,
  d : function(exports) {
    for (let i = 0; i < exports.feed.entry.length; i++) {
      let element = exports.feed.entry[i];
      let url_salt;
      rR.a[rR.b] = element.title["$t"];
      if ("media$thumbnail" in element) {
        url_salt = element["media$thumbnail"].url;
      } else {
        url_salt = config.related_post_bawah.noimage;
      }
      rR.cc[rR.b] = url_salt;
      for (let i = 0; i < element.link.length; i++) {
        if (element.link[i].rel == "alternate") {
          rR.c[rR.b] = element.link[i].href;
          rR.b++;
          break;
        }
      }
    }
    rR.e();
  },
  e : function() {
    let j = new Array(0);
    let ambiguousIndexValues = new Array(0);
    let successRates = new Array(0);
    for (let i = 0; i < rR.c.length; i++) {
      if (!rR.i(j, rR.c[i])) {
        j.length += 1;
        j[j.length - 1] = rR.c[i];
        ambiguousIndexValues.length += 1;
        ambiguousIndexValues[ambiguousIndexValues.length - 1] = rR.a[i];
        successRates.length += 1;
        successRates[successRates.length - 1] = rR.cc[i];
      }
    }
    rR.a = ambiguousIndexValues.filter(function(s) {
      return s;
    });
    rR.c = j.filter(function(s) {
      return s;
    });
    rR.cc = successRates.filter(function(s) {
      return s;
    });
  },
  f : function() {
    if ($(".igniplexRelatedMiddle")) {
      let i = Math.floor((rR.a.length - 1) * Math.random());
      let _0x1b24x16 = 0;
      let miss_badge = "";
      let GRNOC = document.URL;
      let Qerr = i;
      for (; _0x1b24x16 < config.related_post_tengah.jumlah;) {
        if (rR.c[i] != GRNOC) {
          miss_badge = miss_badge + "<li>";
          if (config.related_post_tengah.image) {
            miss_badge = miss_badge + ('<div class="thumb"><a href="' + rR.c[i] + '" title="' + rR.a[i] + '"><img src="' + rR.cc[i] + '" title="' + rR.a[i] + '" alt="' + rR.a[i] + '"/></a></div>');
          }
          miss_badge = miss_badge + ('<a href="' + rR.c[i] + '" title="' + rR.a[i] + '">' + rR.a[i] + "</a></li>");
          _0x1b24x16++;
          if (_0x1b24x16 == config.related_post_tengah.jumlah) {
            break;
          }
        }
        if (i < rR.c.length - 1) {
          i++;
        } else {
          i = 0;
        }
        if (i == Qerr) {
          break;
        }
      }
      if (!config.related_post_tengah.image) {
        $(".igniplexRelatedMiddle ul").addClass("noimg");
      }
      $(".igniplexRelatedMiddle ul").html(miss_badge);
      $.each($(".igniplexRelatedMiddle img"), function() {
        if (this.src.indexOf("youtube") != -1) {
          $(this).attr("src", this.src.replace("default", "mqdefault"));
        } else {
          $(this).attr("src", this.src.replace(/\/s[0-9]+(\-c)?/, "/w75-h56-p-k-no-nu"));
        }
      });
      $(".igniplexRelatedMiddle ul").css("height", "auto");
      $(".igniplexRelatedMiddle ul .igniplexLoading").remove();
    }
  },
  g : function() {
    if ($(".igniplexRelated")) {
      let i = Math.floor((rR.a.length - 1) * Math.random());
      let _0x1b24x16 = 0;
      let miss_badge = "";
      let GRNOC = document.URL;
      let Qerr = i;
      for (; _0x1b24x16 < config.related_post_bawah.jumlah;) {
        if (rR.c[i] != GRNOC) {
          miss_badge = miss_badge + "<li>";
          if (config.related_post_bawah.image) {
            img = rR.cc[i].replace(/\/s[0-9]+(\-c)?/, "/w250-h167-p-k-no-nu");
            miss_badge = miss_badge + ('<div class="thumb"><a href="' + rR.c[i] + '" title="' + rR.a[i] + '"><img class="lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=" data-src="' + img + '" title="' + rR.a[i] + '" alt="' + rR.a[i] + '"/></a></div>');
            miss_badge = miss_badge + ('<div class="text"><a href="' + rR.c[i] + '" title="' + rR.a[i] + '">' + rR.a[i] + "</a></div></li>");
          } else {
            miss_badge = miss_badge + ('<a href="' + rR.c[i] + '" title="' + rR.a[i] + '">' + rR.a[i] + "</a></li>");
          }
          _0x1b24x16++;
          if (_0x1b24x16 == config.related_post_bawah.jumlah) {
            break;
          }
        }
        if (i < rR.c.length - 1) {
          i++;
        } else {
          i = 0;
        }
        if (i == Qerr) {
          break;
        }
      }
      if (!config.related_post_bawah.image) {
        $(".igniplexRelated ul").addClass("noimg");
      }
      $(".igniplexRelated ul").html(miss_badge);
      $.each($(".igniplexRelated img"), function() {
        if (this.src.indexOf("youtube") != -1) {
          $(this).attr("src", this.src.replace("default", "mqdefault"));
        }
      });
      $(".igniplexRelated ul").css("height", "auto");
      $(".igniplexRelated ul .igniplexLoading").remove();
    }
  },
  h : function() {
    if (label != "undefined" && label != "" && label.length != 0) {
      let nbProblems = 0;
      for (let i = 0; i < label.length; i++) {
        $.ajax({
          url : "/feeds/posts/summary/-/" + label[i].replace(/&amp;/g, "&") + "?alt=json-in-script&callback=rR.d&max-results=25",
          type : "GET",
          dataType : "jsonp",
          complete : function(fileApiXHR) {
            if (fileApiXHR.status == 200 || fileApiXHR.status == 304 || fileApiXHR.status == 401) {
              nbProblems++;
              if (nbProblems == label.length) {
                rR.f();
                rR.g();
              }
            }
          }
        });
      }
    } else {
      $(".igniplexRelatedMiddle").remove();
      $(".igniplexRelated").remove();
    }
  },
  i : function(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] == b) {
        return true;
      }
    }
    return false;
  }
};


  // TIGA -
  var hH = {
    perPage : function() {
      return config.navigasi_nomor.tampilan_per_halaman;
    }(),
    numPages : function() {
      return config.navigasi_nomor.tampilan_tombol_navigasi;
    }(),
    a : function(count) {
      var css = "";
      var page = parseInt(hH.numPages / 2);
      if (page == hH.numPages - page) {
        hH.numPages = page * 2 + 1;
      }
      pageStart = currentPageNo - page;
      if (pageStart < 1) {
        pageStart = 1;
      }
      lastPageNo = parseInt(count / hH.perPage) + 1;
      if (lastPageNo - 1 == count / hH.perPage) {
        lastPageNo = lastPageNo - 1;
      }
      pageEnd = pageStart + hH.numPages - 1;
      if (pageEnd > lastPageNo) {
        pageEnd = lastPageNo;
      }
      var prevNumber = parseInt(currentPageNo) - 1;
      if (pageStart > 1) {
        if (currentPage == "page") {
          css = css + '<a href="/" title="Page 1">1</a>';
        } else {
          css = css + ('<a href="/search/label/' + postLabel + "?max-results=" + hH.perPage + '" title="Page 1">1</a>');
        }
      }
      if (pageStart > 2) {
        css = css + '<span class="dot">...</span>';
      }
      var vp = pageStart;
      for (; vp <= pageEnd; vp++) {
        if (currentPageNo == vp) {
          css = css + ('<span class="current">' + vp + "</span>");
        } else {
          if (vp == 1) {
            if (currentPage == "page") {
              css = css + '<a href="/" title="Page 1">1</a>';
            } else {
              css = css + ('<a href="/search/label/' + postLabel + "?max-results=" + hH.perPage + '" title="Page 1">1</a>');
            }
          } else {
            if (currentPage == "page") {
              css = css + ('<a onclick="hH.d(' + vp + ');return false" title="Page ' + vp + '">' + vp + "</a>");
            } else {
              css = css + ('<a onclick="hH.e(' + vp + ');return false" title="Page ' + vp + '">' + vp + "</a>");
            }
          }
        }
      }
      if (pageEnd < lastPageNo - 1) {
        css = css + '<span class="dot">...</span>';
      }
      if (pageEnd < lastPageNo) {
        if (currentPage == "page") {
          css = css + ('<a onclick="hH.d(' + lastPageNo + ');return false" title="Page ' + lastPageNo + '">' + lastPageNo + "</a>");
        } else {
          css = css + ('<a onclick="hH.e(' + lastPageNo + ');return false" title="Page ' + lastPageNo + '">' + lastPageNo + "</a>");
        }
      }
      var nextnumber = parseInt(currentPageNo) + 1;
      var crossfilterable_layers = document.getElementsByName("pageArea");
      var _el = document.getElementsByClassName("blog-pager")[0];
      var layer_i = 0;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        crossfilterable_layers[layer_i].innerHTML = css;
      }
      if (crossfilterable_layers && crossfilterable_layers.length > 0) {
        css = "";
      }
      if (_el) {
        _el.innerHTML = css;
        _el.classList.add("number");
        _el.classList.remove("infinite");
      }
    },
    b : function(data) {
      var feed = data.feed;
      var n = parseInt(feed.openSearch$totalResults.$t, 10);
      hH.a(n);
    },
    c : function() {
      var e = window.location.href;
      if (e.indexOf("/search/label/") != -1) {
        if (e.indexOf("?updated-max") != -1) {
          postLabel = e.substring(e.indexOf("/search/label/") + 14, e.indexOf("?updated-max"));
        } else {
          if (e.indexOf("?max") != -1) {
            postLabel = e.substring(e.indexOf("/search/label/") + 14, e.indexOf("?max"));
          } else {
            postLabel = e.substring(e.indexOf("/search/label/") + 14);
          }
        }
      }
      if (e.indexOf("?q=") == -1) {
        if (e.indexOf("/search/label/") == -1) {
          currentPage = "page";
          if (window.location.href.indexOf("#page=") != -1) {
            currentPageNo = window.location.href.substring(window.location.href.indexOf("#page=") + 6, window.location.href.length);
          } else {
            currentPageNo = 1;
          }
          $.ajax({
            url : "/feeds/posts/summary?max-results=1&alt=json-in-script&callback=hH.b",
            type : "GET"
          });
        } else {
          currentPage = "label";
          if (e.indexOf("max-results=") == -1) {
            hH.perPage = 20;
          }
          if (window.location.href.indexOf("#page=") != -1) {
            currentPageNo = window.location.href.substring(window.location.href.indexOf("#page=") + 6, window.location.href.length);
          } else {
            currentPageNo = 1;
          }
          $.ajax({
            url : "/feeds/posts/summary?max-results=1&alt=json-in-script&callback=hH.b",
            type : "GET"
          });
        }
      }
    },
    d : function(n) {
      jsonstart = (n - 1) * hH.perPage;
      noPage = n;
      $.ajax({
        url : "/feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=hH.f",
        type : "GET"
      });
    },
    e : function(n) {
      jsonstart = (n - 1) * hH.perPage;
      noPage = n;
      $.ajax({
        url : "/feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=hH.f",
        type : "GET"
      });
    },
    f : function(results) {
      post = results.feed.entry[0];
      var nodeName = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29);
      var urlSafeNodeName = encodeURIComponent(nodeName);
      if (currentPage == "page") {
        var downloadHref = "/search?updated-max=" + urlSafeNodeName + "&max-results=" + hH.perPage + "#page=" + noPage;
      } else {
        downloadHref = "/search/label/" + postLabel + "?updated-max=" + urlSafeNodeName + "&max-results=" + hH.perPage + "#page=" + noPage;
      }
      window.location.href = downloadHref;
    },
    g : function() {
      let noPage;
      let currentPage;
      let currentPageNo;
      let postLabel;
    },
    h : function() {
      $(".blog-pager .inner").remove();
      let bernomor = false;
      window.addEventListener("scroll", function() {
        if (0 != document.documentElement.scrollTop && false === bernomor || 0 != document.body.scrollTop && false === bernomor) {
          !function() {
            hH.c();
          }();
          bernomor = true;
        }
      }, true);
    },
    i : function() {
      let resultsEl = $(".blog-pager");
      let top_vals_el = $(".blog-posts");
      resultsEl.on("click", "a", function() {
        history.pushState("", "", this.href);
        $.get(this.href, {}, function(body) {
          var filteredView = $(body).find("article").length ? $(body) : $("<div></div>");
          top_vals_el.append(filteredView.find(".blog-posts").html());
          resultsEl.html(filteredView.find(".blog-pager .inner").clone());
        }, "html");
        $(this).replaceWith('<div class="loading"><svg viewBox="0 0 24 24"><path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"/></svg></div>');
        return false;
      });
    },
    j : function() {
      if (config.navigasi == 1) {
        hH.i();
      } else {
        if (config.navigasi == 2) {
          hH.h();
        }
      }
    }
  };
  var PoO = function() {
    if (document.getElementById("HTML3")) {
      document.getElementById("HTML3").classList.add("igniplexTengah");
    }
    let items = document.querySelectorAll(".igniplexTengah");
    if (items) {
      let nodes = document.querySelectorAll(".post-body br, .post-body p, .post-body blockquote, .post-body table, .post-body figure");
      if (nodes.length >= 1) {
        let count = items.length + 1;
        let n = nodes.length / count;
        let charListNotLatin = Array.from({
          length : count
        }, (val, canCreateDiscussions) => {
          return canCreateDiscussions + 1;
        });
        let contentOfLiElements = charListNotLatin.slice(0, -1);
        for (let index = 0; index < contentOfLiElements.length; index++) {
          let max = contentOfLiElements[index];
          let i = parseInt(n * max);
          if (nodes[i].nodeName == "P") {
            nodes[i].parentNode.insertBefore(items[index], nodes[i]);
          } else {
            nodes[i].parentNode.insertBefore(items[index], nodes[i].nextSibling);
          }
        }
      } else {
        let previewer = document.getElementsByClassName("post-body")[0];
        for (let i = 0; i < items.length; i++) {
          previewer.append(items[i]);
        }
      }
    }
  };

  // EMPAT - LICENSE
  function vW() {
    Lz();
    gL();
    Dk();
    rC.b();
    otherScript();
    if (window.addEventListener) {
      window.addEventListener("load", nV());
    } else {
      if (window.attachEvent) {
        window.attachEvent("onload", nV());
      }
    }
    if (config.lazyads) {
      let _0x9c1fx2 = false;
      window.addEventListener("scroll", function() {
        if (0 != document.documentElement.scrollTop && false === _0x9c1fx2 || 0 != document.body.scrollTop && false === _0x9c1fx2) {
          !function() {
            aB();
          }();
          _0x9c1fx2 = true;
        }
      }, true);
    } else {
      aB();
    }
    if ($("body").hasClass("isHomepage")) {
      sL();
    }
    if ($("body").hasClass("isMultiple")) {
      hH.j();
      let _0x9c1fx3 = false;
      window.addEventListener("scroll", function() {
        if (0 != document.documentElement.scrollTop && false === _0x9c1fx3 || 0 != document.body.scrollTop && false === _0x9c1fx3) {
          !function() {
            mB.e();
          }();
          _0x9c1fx3 = true;
        }
      }, true);
    }
    if ($("body").hasClass("isPost")) {
      Po();
      PoO();
    }
    if ($("body").hasClass("isPost") && !$("body").hasClass("isPreview")) {
      let _0x9c1fx4 = false;
      window.addEventListener("scroll", function() {
        if (0 != document.documentElement.scrollTop && false === _0x9c1fx4 || 0 != document.body.scrollTop && false === _0x9c1fx4) {
          !function() {
            rR.h();
          }();
          _0x9c1fx4 = true;
        }
      }, true);
    }
    if ($("body").hasClass("isSingle")) {
      Si();
    }
  }
  function a() {
    if (!document.body.classList.contains("isPreview")) {
        cK.a();
        vW();
    }
  }
  if (document.cookie.match(/_ign=(\d+)/) && document.cookie.match(/_ign=(\d+)/)[0]) {
    if (window.addEventListener) {
      window.addEventListener("load", vW);
    } else {
      if (window.attachEvent) {
        window.attachEvent("onload", vW);
      }
    }
  } else {
    a();
  }
  ;
  
