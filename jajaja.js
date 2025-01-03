$(function()
{
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/p_497t12.png"]').replaceWith('<span class="gzarab_ic law">قانون</span>');
$('img[src="https://www7.0zz0.com/2022/02/19/03/633312516.png"]').replaceWith('<span class="gzarab_ic new">جديد</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/p_496n11.png"]').replaceWith('<span class="gzarab_ic exclusive">حصري</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/p_497g12.png"]').replaceWith('<span class="gzarab_ic urgent">عاجل</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/p_497t13.png"]').replaceWith('<span class="gzarab_ic important">هام</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/591011.png"]').replaceWith('<span class="gzarab_ic coding">تم التكويد</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/p_496u11.png"]').replaceWith('<span class="gzarab_ic complaint">شكوي</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/691011.png"]').replaceWith('<span class="gzarab_ic solution">جاري الحل</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/701011.png"]').replaceWith('<span class="gzarab_ic study">قيد الدراسة</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/721011.png"]').replaceWith('<span class="gzarab_ic lesson">درس</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/731011.png"]').replaceWith('<span class="gzarab_ic accessories">ملحقات</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/741011.png"]').replaceWith('<span class="gzarab_ic solved">تم الحل</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/761011.png"]').replaceWith('<span class="gzarab_ic closed">طلب مغلق</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/p_496f12.png"]').replaceWith('<span class="gzarab_ic contrary">مخالف</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/ca-aoo11.png"]').replaceWith('<span class="gzarab_ic nfollowing">عدم متابعة</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/p_496f13.png"]').replaceWith('<span class="gzarab_ic tech">تقنية</span>');
$('img[src="https://i.servimg.com/u/f46/20/18/95/08/751010.png"]').replaceWith('<span class="gzarab_ic implement">قيد التنفيذ</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/p_497310.png"]').replaceWith('<span class="gzarab_ic explain">شرح</span>');
$('img[src="https://i.servimg.com/u/f78/19/47/70/95/581011.png"]').replaceWith('<span class="gzarab_ic designed">تم التصميم</span>');
}
);

$(function() {
        $(document).ready(function() {
            $('a:not(:has(img))').each(function() {
                var html = $(this).html();
                var updatedHtml = html;

              
                  updatedHtml = updatedHtml
                        // Select prefix-Text
                        .replace(/\[جديد\]/g, '<span class="bade2-label جديد">جديد</span>')
                        .replace(/\[عاجل\]/g, '<span class="bade2-label عاجل">عاجل</span>')
                        .replace(/\[حصري\]/g, '<span class="bade2-label حصري">حصري</span>')
                        .replace(/\[تقنية\]/g, '<span class="bade2-label تقنية">تقنية</span>')
                        .replace(/\[درس\]/g, '<span class="bade2-label درس">درس</span>')
                        .replace(/\[ملحق\]/g, '<span class="bade2-label ملحق">ملحق</span>')
                        .replace(/\[شرح\]/g, '<span class="bade2-label شرح">شرح</span>')
                        .replace(/\[برنامج\]/g, '<span class="bade2-label برنامج">برنامج</span>')
                        .replace(/\[شكوي\]/g, '<span class="bade2-label شكوي">شكوي</span>')
                        .replace(/\[هام\]/g, '<span class="bade2-label هام">هام</span>')
                        .replace(/\[كود\]/g, '<span class="bade2-label كود">كود</span>')
                        .replace(/\[قانون\]/g, '<span class="bade2-label قانون">قانون</span>')
                        .replace(/\[أعلان\]/g, '<span class="bade2-label أعلان">أعلان</span>')
                        .replace(/\[العاب\]/g, '<span class="bade2-label العاب">العاب</span>')
                        .replace(/\[أستفسار\]/g, '<span class="bade2-label أستفسار">أستفسار</span>')
                        .replace(/\[طلب\]/g, '<span class="bade2-label طلب">طلب</span>')
                        .replace(/\[برامج\]/g, '<span class="bade2-label برامج">برامج</span>')
                        .replace(/\[رياضة\]/g, '<span class="bade2-label رياضة">رياضة</span>')
                        .replace(/\[تصميم\]/g, '<span class="bade2-label تصميم">تصميم</span>')
                        .replace(/\[حديث\]/g, '<span class="bade2-label حديث">حديث</span>')
                        .replace(/\[Js\]/g, '<span class="bade2-label Js">Js</span>')
                        .replace(/\[Css\]/g, '<span class="bade2-label Css">Css</span>')
                        .replace(/\[Html\]/g, '<span class="bade2-label Html">Html</span>')
                        .replace(/\[Template\]/g, '<span class="bade2-label Template">Template</span>')
                        .replace(/\[Blogger\]/g, '<span class="bade2-label Blogger">Blogger</span>')
            ;$(this).html(updatedHtml);
                });});});




    document.addEventListener("DOMContentLoaded", function() {
        var url = window.location.href;
        // التحقق من وجود '&mode=newtopic' في نهاية الرابط
        if (url.endsWith("&mode=newtopic")) {
            var conan2000 = [
              { value: 'conan20000', text: 'اختيار بادئة نصوص' },
                { value: 'option1', text: '[جديد]' },
                { value: 'option2', text: '[عاجل]' },
                { value: 'option3', text: '[حصري]' },
                { value: 'option4', text: '[تقنية]' },
                { value: 'option5', text: '[درس]' },
                { value: 'option6', text: '[ملحق]' },
                { value: 'option7', text: '[شرح]' },
                { value: 'option8', text: '[برنامج]' },
                { value: 'option9', text: '[شكوي]' },
                { value: 'option10', text: '[هام]' },
                { value: 'option11', text: '[كود]' },
                { value: 'option12', text: '[قانون]' },
                { value: 'option13', text: '[أعلان]' },
                { value: 'option14', text: '[العاب]' },
                { value: 'option15', text: '[أستفسار]' },
                { value: 'option16', text: '[طلب]' },
                { value: 'option17', text: '[برامج]' },
                { value: 'option18', text: '[رياضة]' },
                { value: 'option19', text: '[تصميم]' },
                { value: 'option20', text: '[حديث]' },
                { value: 'option21', text: '[Js]' },
                { value: 'option22', text: '[Css]' },
                { value: 'option23', text: '[Html]' },
                { value: 'option24', text: '[Template]' },
                { value: 'option25', text: '[Blogger]' },
                { value: 'conan200000', text: 'مسح' }
            ];

            var $input = document.querySelector('input[name="subject"]');
            var $dropconan2000 = document.createElement('select');
            var $forumButton = document.createElement('button');
            $dropconan2000.classList.add('dropconan2000', 'default'); // Start with default class
            $forumButton.classList.add('dropconan2000-forum', 'default'); // Start with default class
            $forumButton.textContent = 'التبديل الى بادئات نص';

            var isConan2000Visible = true;

            function populatedropconan2000(options) {
                $dropconan2000.innerHTML = ''; // Clear existing options
                options.forEach(function(option) {
                    var opt = document.createElement('option');
                    opt.value = option.value;
                    opt.textContent = option.text;
                    $dropconan2000.appendChild(opt);
                });
            }
            populatedropconan2000(conan2000);
            $forumButton.addEventListener('click', function(event) {
                event.preventDefault();
                if (isConan2000Visible) {
                    populatedropconan2000(konan2000);
                    $forumButton.textContent = 'بادئة-نص';
                    $forumButton.classList.remove('default');
                    $forumButton.classList.add('forumd');
                    $dropconan2000.classList.remove('default');
                    $dropconan2000.classList.add('forumd');
                }
                isConan2000Visible = !isConan2000Visible;
            });

            $dropconan2000.addEventListener('change', function() {
                var selectedValue = $dropconan2000.value;
                var selectedText = $dropconan2000.options[$dropconan2000.selectedIndex].text;
                var currentValue = $input.value;

                if (selectedValue === 'conan20000') {
                    return;
                } else if (selectedValue === 'conan200000') {
                    $input.value = '';
                } else {
                    if (currentValue) {
                        // Adding selectedText with a leading comma if there are existing words
                        $input.value = selectedText + '' + currentValue;
                    } else {
                        $input.value = selectedText;
                    }
                }
            });
            var container = document.createElement('div');
            container.classList.add('dropconan2000-container');
            container.appendChild($forumButton);
            container.appendChild($dropconan2000);
            $input.parentNode.insertBefore(container, $input.nextSibling);
        }
    });

    document.write('<style type="text/css">\
    .dropconan2000-forum.default,.dropconan2000.default{color:#000;cursor:pointer;}
    .dropconan2000-forum.forumd,.dropconan2000.forumd{color:#fff;cursor:pointer;}
    .dropconan2000.default, .dropconan2000.forumd{height:40px;}
    button.dropconan2000-forum.default{display:none;}
    select.dropconan2000.default{margin:0px;margin-right:10px;}
    button.dropconan2000-forum.forumd,button.dropconan2000-forum.default{padding:10px;border-radius:10px;margin-bottom:5px;margin-right:5px;}
    .dropconan2000-container{display:inline-block;margin-bottom:0!important;} </style>');

window.addEventListener('DOMContentLoaded', function() {
  var messageElement = document.createElement('div');
  messageElement.id = 'connection-message';
  messageElement.innerHTML = 'أنتبه: تم قطع الاتصال بالإنترنت';
  messageElement.style.cssText = `
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
   background:black;
    color:#fffdeb;
    font-size:16px;
    font-weight:bold;
    padding:7px;
    text-align:center;
    z-index:9999;
    display:none;
  `;
  document.body.appendChild(messageElement);
  function showMessage() {
    messageElement.style.display = 'block';
    messageElement.style.animation = 'slideIn 0.5s ease-in-out';
  }
  function hideMessage() {
    messageElement.style.animation = 'slideOut 0.5s ease-in-out';
    setTimeout(function() {
      messageElement.style.display = 'none';
    }, 500);
  }
  window.addEventListener('offline', showMessage);
  window.addEventListener('online', hideMessage);
  function animate(element, animationName) {
    element.style.animationName = animationName;
    setTimeout(function() {
      element.style.animationName = '';
    }, 1000);
  }
  var slideInAnimation = `
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;

  var slideOutAnimation = `
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  `;
  messageElement.addEventListener('animationstart', function() {
    if (messageElement.style.animationName === slideInAnimation) {
      animate(messageElement, slideOutAnimation);
    }
  });
});

$(function () {
 var alertLocation =  $('#email').closest('dl'),
 alertText = "<strong>تنبية :</strong> مسموح فقط بالتسجيل بالايميلات التاليه hotmail, gmail, outlook, yahoo و اي ايميل اخر يتم توقيف العضوية من الادارة مباشرة";
 $('<div style="text-align:center;background:#e30;color:#FFF;padding:5px;border-radius:5px;"><i class="fa-solid fa-triangle-exclamation" style="float:left;font-size:large;"></i>' + alertText + '</div>').insertBefore(alertLocation);
});

$(document).ready(function () {
$('.forum-block .forum-row .forum-last-post').each(function() {
if ($(this).find('.no-link').last().is(':empty')) 
{$(this).html('<span style="align-items:center;display:inline-flex;height:60px">لا يوجد مواضيع</span>')}});
});

$(function() {
            // تغليف حقل كلمة المرور في حاوية جديدة إذا لم يكن قد تم تغليفه بالفعل
          $('input[type="password"], input[name="cur_password"], input[name="new_password"], input[name="password_confirm"]').each(function() {
                if (!$(this).parent().hasClass('password-wrapper')) {
                    $(this).wrap('<div class="password-wrapper"></div>');
                }
           
                // إضافة أيقونة التبديل بعد حقل كلمة المرور
                if ($(this).siblings('.toggle-password').length === 0) {
                    $(this).after('<i class="toggle-password fas fa-eye-slash"></i>');
                }
            });

            // التعامل مع النقر على الأيقونة لتبديل إظهار كلمة المرور
            $(document).on("click", ".toggle-password", function() {
                // تحديد حقل كلمة المرور الأقرب لهذه الأيقونة
                var passwordField = $(this).closest('.password-wrapper').find('input[name="password"], input[name="cur_password"], input[name="new_password"], input[name="password_confirm"]');
                var isPasswordVisible = passwordField.attr('type') === 'text';

                if (isPasswordVisible) {
                    passwordField.prop("type", "password");
                    $(this).removeClass('fa-eye').addClass('fa-eye-slash');
                } else {
                    passwordField.prop("type", "text");
                    $(this).removeClass('fa-eye-slash').addClass('fa-eye');
                }
            });
        });

$(document).ready(function() {

        $("input[name='post']").after($('<input type="button" name="del" class="button1" value="احذف النص" id="dely">'));

        $("#dely").click(function () {
        $(".sceditor-container textarea").val('').focus();
        $("div.sceditor-toolbar + iframe").contents().find("body").empty().focus();
        });

        });

$(function() {
        if (_userdata["session_logged_in"] == "0") {
            /* PERSONNALISATION DES TEXTES */
            var txt_username = "اسم المستخدم",
                txt_password = "كلمة السر",
                txt_login = "تسجيل دخول",
                txt_remember = "دخول تلقائي",
                txt_guest = "ليس لديك حساب بعد ؟",
                txt_create = "تسجيل حساب جديد",
                txt_lost = "هل نسيت كلمة السر ؟",
                txt_recover = "استرجع كلمة السر";
/* END OF PERSONALISATION - Do not modify the code below */
   
          $('body').prepend('<div id="quickloginform_overlay" style="display:none;z-index:2147483647"></div><div id="quickloginform" style="display:none;z-index:2147483647"><form id="fa-login-formff" class="login-form"  name="form_login" method="post" action="/login" style="padding: 18px !important;"><h4>تسجيل دخول</h4><input style="height:44.8px;padding-top: 8px; padding-bottom: 8px; font-family:Droid Arabic Kufi,Tahoma; min-inline-size: -moz-available; min-inline-size: -webkit-fill-available; text-align: center; border-radius: 5px;width: 324px !important;" class="inputbox autowidth" type="text" maxlength="40" name="username" placeholder="' + txt_username + '" required=""><input style="height: 44.8px;padding-top: 8px; padding-bottom: 8px; font-family:Droid Arabic Kufi,Tahoma; text-align: center; min-inline-size: -moz-available; min-inline-size: -webkit-fill-available;border-radius:5px;width:324px !important;" class="inputbox autowidth" type="password" maxlength="32" name="password" placeholder="' + txt_password + '" required=""><button style="font-family:Droid Arabic Kufi,Tahoma; opacity:0.8; font-size:12px; padding-right: 105px 0; margin-right: 45px!important; display:inline-block; vertical-align: middle; padding-left: 82px; padding-right: 80px;" class="button1" name="login">' + txt_login + '</button><label><p style="color:#5C5C5C; margin-top: 0px;">' + txt_remember + ' <input type="checkbox"  name="autologin"></p></label><p style="color:#5C5C5C; float:left; text-align:left;">' + txt_guest + '<br><a href="/register">' + txt_create + '</a></p><p style="color:#5C5C5C; float:right; text-align:right;">' + txt_lost + '<br><a href="/profile?mode=sendpassword">' + txt_recover + '</a></p><div style="clear:both;"></div><input name="redirect" value="' + window.location.pathname + '" type="hidden"></form></div>');
   
            $('a[href*="/login"]').click(function() {
                $('#quickloginform, #quickloginform_overlay').fadeIn();
                $('#quickloginform input[name="username"]').focus();
                return false;
            });
   
            $(document).click(function(e) {
                if ($(e.target).closest('#quickloginform form').length === 0) {
                    $('#quickloginform, #quickloginform_overlay').fadeOut();
                }
            });
            $(document).keyup(function(e) {
                if (e.keyCode == 27) {
                    $('#quickloginform, #quickloginform_overlay').fadeOut();
                }
            });
        }
    });

$(document).ready(function() {
    var currentPath = window.location.pathname;
    $('ul.nav-linkss a, ul.chatcavo a').removeClass('active');
    $('ul.nav-linkss a, ul.chatcavo a').each(function() {
        var href = $(this).attr('href');
        var linkPath = href.split('?')[0];
        if (currentPath === linkPath) {
            $(this).addClass('active');
        }
    });
});

$(function(){
  if (!$.sceditor) return;
  var defaultSize = 18, // taille par défaut des icônes
      autoClose = 1, // ferme automatiquement la popup après la sélection d'une icône si activé
 
      // Liste d'icônes
      fa = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
      A = '', O = A;
 
  // si la taille est supérieur à 0, on formate une taille par défaut pour les icônes
  if (defaultSize) {
    A += '[size=' + defaultSize + ']';
    O += '[/size]';
  }
 
  // crée un bouton sur l'éditeur et une fenêtre de sélection
  $.sceditor.command.set('fontawesome', {
   
    dropDown : function(editor, caller, callback) {
      var a, b = '', c = document.createElement('DIV'), i = 0, j = fa.length;
     
      for (; i<j; i++) b += '<i class="fa">' + fa[i] + '</i>';
     
      c.innerHTML = b;
     
      for (a = c.getElementsByTagName('I'), i = 0, j = a.length; i<j; i++) {
        a[i].onclick = function() {
          callback(this.innerHTML);
          autoClose && editor.closeDropDown(true);
        };
      }
 
      editor.createDropDown(caller, 'fontawesome', c);
    },
 
    // wysiwyg
    exec : function(c) {
      var e = this;
      $.sceditor.command.get('fontawesome').dropDown(e, c, function(icon) {
        e.insert(' [font=FontAwesome]' + A + icon + O + '[/font]&nbsp;', '', true, true, true);
      });
    },
   
    // mode source
    txtExec : function(c) {
      var e = this;
      $.sceditor.command.get('fontawesome').dropDown(e, c, function(icon) {
        e.insert(' [font=FontAwesome]' + A + icon + O + '[/font] ', '');
      });
    },
   
    tooltip : 'Font Awesome Icons'
  });
 
  toolbar = toolbar.replace(/date,/,'fontawesome,date,'); // ajoute le bouton à la barre d'outils
});

$(function() {
      if (!$.sceditor) return;
     
      $.sceditor.command.set('messages', {
        dropDown : function(editor, caller, callback) {
          var messages = {
            'بسم الله...' : 'بسم الله الرحمن الرحيم',
            'السلام...' : 'السلام عليكم ورحمة الله وبركاته',
            'شُكرآ' : 'شُكرآ جزيلا',
            'بارك...' : 'بارك الله فيك',
            'جزاك...' : 'جزاك الله خير',
            'شُكرآ على...' : 'شُكرآ لك على المرور',
            'في رعاية...' : 'في رعاية الله',
    'مع السلامه...' : 'مع السلامه'
          },
          a, d = document.createElement('DIV'), i;
     
          for (i in messages) {
            a = document.createElement('A');
            a.className = 'sceditor-font-option';
            a.title = messages[i];
            a.innerHTML = i;
            a.onclick = function() {
              callback(this.title);
              editor.closeDropDown(true);
              return false;
            };
            d.appendChild(a);
          }
     
          editor.createDropDown(caller, 'messages', d);
        },
     
        exec : function(c) {
          var e = this;
          $.sceditor.command.get('messages').dropDown(e, c, function(content) {
            e.insertText(content);
          });
        },
     
        txtExec : function(c) {
          var e = this;
          $.sceditor.command.get('messages').dropDown(e, c, function(content) {
            e.insertText(content);
          });
        },
     
        tooltip : 'ردود جاهزة'
      });
     
      toolbar += '|messages'
    });

$.getScript('https://cdn.jsdelivr.net/clipboard.js/1.5.16/clipboard.min.js', function() {
      window.fae_copyCode = {
        copy : 'نسخ الكود',
        copied : 'تم النسخ!'
      };
     
      $(function() {
        var a = $('.codebox dt, .codebox p').not('.spoiler > dt, .hidecode > dt'),
            i = 0,
            j = a.length;
     
        if (a[0]) {
          $('head').append('<style type="text/css">.fae_copy-code{float:right;cursor:pointer;color: #444;}.fae_copy-code:hover{text-decoration:auto;}</style>');
     
          for (; i < j; i++) {
            a[i].insertAdjacentHTML('beforeend', '<span class="fae_copy-code">' + fae_copyCode.copy + '</span>');
          }
     
          new Clipboard('.fae_copy-code',{
            target : function (copy) {
              if (copy.innerHTML != fae_copyCode.copied) {
                return $(copy).closest('.codebox').find('.cont_code, code')[0];
              }
            }
     
          }).on('success', function (e) {
            var copy = e.trigger;
     
            if (copy.innerHTML != fae_copyCode.copied) {
              copy.innerHTML = fae_copyCode.copied;
              copy.className += ' fae_copied';
     
              window.setTimeout(function() {
                copy.innerHTML = fae_copyCode.copy;
                copy.className = copy.className.replace('fae_copied', '');
              }, 1000);
            }
     
            e.clearSelection();
          });
        }
     
      });
    });

document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.getElementById("theme-toggle-button");

    // تابع لتبديل المظهر
    function toggleTheme(isDarkMode) {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            themeToggleButton.textContent = "المظهر العادي";
            themeToggleButton.style.backgroundImage = "";
        } else {
            document.body.classList.remove("dark-mode");
            themeToggleButton.textContent = "المظهر الداكن";
            themeToggleButton.style.backgroundImage = "";
        }
    }

    // تابع لتعيين قيمة الكوكي
    function setThemeCookie(isDarkMode) {
        document.cookie = "darkMode=" + isDarkMode;
    }

    // تابع للحصول على قيمة الكوكي
    function getThemeCookie() {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [name, value] = cookie.split('=');
            if (name.trim() === 'darkMode') {
                return value.trim() === 'true';
            }
        }
        return false;
    }

    // التبديل عند تحميل الصفحة
    const isDarkMode = getThemeCookie();
    toggleTheme(isDarkMode);

    // التبديل عند النقر على الزر
    themeToggleButton.addEventListener("click", function() {
        const isDarkMode = document.body.classList.contains("dark-mode");
        toggleTheme(!isDarkMode);
        setThemeCookie(!isDarkMode);
    });
});

$(function(){
  if (!$.sceditor || /\/privmsg/.test(window.location.pathname)) return;
  var storage = window.localStorage, s = document.createElement('SELECT'), tags = '';
 
 
 if (storage && storage.faTags && storage.faTagsExp >
 +new Date - 29*59*1000 && storage.faTagsUser ==
_userdata.username) s.innerHTML = storage.faTags;
  else {
    $.get('/profile?mode=editprofile&page_profil=tags', function(d) {
      var h = $('form[name="tag_list"] a', d);
    
      if (h.length) {
        for (var i = 0, j = h.length, txt; i<j; i++) {
          txt = h[i].innerHTML.replace(/^\s+|\s+$/g,'');
          if (/^#/.test(txt)) {
            !tags && (tags += '<option value="">إختر هاشتاج</option>');
 
           tags += '<option value="'+ txt.slice(1) +'">' +
(txt.length > 24 ? txt.slice(0, 25) + '...' : txt) +
'</option>';
          }
        }
        s.innerHTML = tags;
      }
    
      if (storage) {
        storage.faTags = tags ? tags : 0;
        storage.faTagsUser = _userdata.username;
        storage.faTagsExp = +new Date;
      }
    });
  }
  
  
  $.sceditor.command.set('hashtag', {
    dropDown : function(editor, caller, callback) {
      var a = document.createElement('DIV'), b = document.createElement('INPUT'), c = document.createElement('INPUT');
      b.type = 'button';
      b.value = 'إدراج';
      b.className = 'button';
    
      c.type = 'text';
      c.id = 'fa-hashtag';
    
 
     a.innerHTML = '<div><label for="fa-hashtag">هاشتاج
:</label></div>' + ( s.innerHTML ?
'<div><label>Followed tags :</label></div>' : ''
 ) + '<div></div>';
      a.firstChild.appendChild(c);
      a.lastChild.appendChild(b);
    
      if (s.innerHTML != 0) {
        s.value = '';
        a.getElementsByTagName('DIV')[1].appendChild(s);
        s.onchange = function() {
          c.value = s.value;
        };
      }
    
      b.onclick = function() {
        c.value && callback(c.value);
        editor.closeDropDown(true);
      };
 
      editor.createDropDown(caller, 'inserthashtag', a);
    },
 
    exec : function(c) { tag(c, this) },
    txtExec : function(c) { tag(c, this) },
  
    tooltip : 'أدخل هاشتاج'
  });
 
  toolbar = toolbar.replace(/quote,/,'hashtag,quote,');
 
  function tag(c, e) {
    $.sceditor.command.get('hashtag').dropDown(e, c, function(tag) {
      e.insertText('#' + tag.replace(/^#/,'').replace(/[\xD7\xF7\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xBF]/g, '_') + ' ');
    });
  }
});
