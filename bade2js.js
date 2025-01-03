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
